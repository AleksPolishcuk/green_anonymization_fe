import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { userService } from "services/user";
import { pricingService } from "services/pricing";
import { updateAvatarUrl, updateWorkflowTour } from "store/slices/authSlice";
import type User from "shared/interfaces/User";
import type { CurrentSubscription } from "services/pricing/typing/pricing";
import type { UpdateWorkflowTourPayload } from "services/auth/typing";
import {
  ALLOWED_TYPES,
  MAX_FILE_SIZE,
  MAX_NAME_LENGTH,
  NAME_PATTERN,
  TOUR_ROUTES,
  type TourStep,
} from "constants/ProfilePage";

export type { TourStep };

type EditField = "firstName" | "lastName" | "companyName";

const validateField = (field: EditField, value: string): string | null => {
  const trimmed = value.trim();
  if (!trimmed) return "Required";
  if (trimmed.length > MAX_NAME_LENGTH)
    return `Must be ${MAX_NAME_LENGTH} characters or fewer`;
  if (field !== "companyName" && !NAME_PATTERN.test(trimmed))
    return "Only letters, spaces, hyphens and apostrophes are allowed";
  return null;
};

export function useProfile() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [profile, setProfile] = useState<User | null>(null);
  const [subscription, setSubscription] = useState<CurrentSubscription | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
  });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const [profileData, subscriptionData] = await Promise.all([
          userService.getProfile(),
          pricingService.getCurrentSubscription().catch(() => null),
        ]);
        if (cancelled) return;
        setProfile(profileData);
        setSubscription(subscriptionData);
      } catch {
        if (!cancelled) setFetchError("Failed to load profile");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleAvatarClick = () => {
    if (!uploading) fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setUploadError("Only JPEG, PNG and WEBP images are allowed");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setUploadError("File must be smaller than 5 MB");
      return;
    }

    setUploadError(null);
    setUploading(true);

    try {
      const { avatarUrl } = await userService.uploadAvatar(file);
      dispatch(updateAvatarUrl(avatarUrl));
      setProfile((prev) => (prev ? { ...prev, avatarUrl } : prev));
    } catch {
      setUploadError("Failed to upload avatar. Please try again.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleStartEdit = () => {
    if (!profile) return;
    setEditForm({
      firstName: profile.firstName ?? "",
      lastName: profile.lastName ?? "",
      companyName: profile.companyName ?? "",
    });
    setSaveError(null);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setSaveError(null);
  };

  const handleEditFieldChange = (field: EditField, value: string) => {
    setEditForm((prev) => ({ ...prev, [field]: value }));
  };

  const editErrors: Record<EditField, string | null> = {
    firstName: validateField("firstName", editForm.firstName),
    lastName: validateField("lastName", editForm.lastName),
    companyName: validateField("companyName", editForm.companyName),
  };

  const isEditFormValid =
    !editErrors.firstName && !editErrors.lastName && !editErrors.companyName;

  const handleSaveProfile = async () => {
    if (!isEditFormValid) {
      setSaveError("Please fix the errors above");
      return;
    }
    const trimmed = {
      firstName: editForm.firstName.trim(),
      lastName: editForm.lastName.trim(),
      companyName: editForm.companyName.trim(),
    };
    setSaving(true);
    setSaveError(null);
    try {
      const updated = await userService.updateProfile(trimmed);
      setProfile((prev) => (prev ? { ...prev, ...updated } : updated));
      setIsEditing(false);
    } catch {
      setSaveError("Failed to save profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleTakeTour = async (step: TourStep) => {
    const payload: UpdateWorkflowTourPayload = { [step]: false };
    if (profile?.workflowTour?.skipped) payload.skipped = false;
    await dispatch(updateWorkflowTour(payload));
    navigate(TOUR_ROUTES[step]);
  };

  const initials = `${profile?.firstName?.charAt(0) ?? ""}${
    profile?.lastName?.charAt(0) ?? ""
  }`.toUpperCase();

  return {
    profile,
    subscription,
    loading,
    fetchError,
    uploading,
    uploadError,
    initials,
    fileInputRef,
    handleAvatarClick,
    handleFileChange,
    handleTakeTour,
    isEditing,
    editForm,
    editErrors,
    isEditFormValid,
    saving,
    saveError,
    handleStartEdit,
    handleCancelEdit,
    handleEditFieldChange,
    handleSaveProfile,
  };
}
