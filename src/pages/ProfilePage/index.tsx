import {
  DarkMode,
  EditOutlined,
  ExpandMore,
  LightMode,
  PlayCircleOutlined,
} from "@mui/icons-material";
import { CircularProgress, Switch, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Loader } from "shared/ui/Loader";
import { SubscriptionUsage } from "components/Dashboard/charts/SubscriptionUsage";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { toggleTheme } from "store/slices/themeSlice";
import { getResolvedTheme } from "shared/utils/themeHelper";
import { TIMEZONES, TOUR_STEPS } from "constants/ProfilePage";
import { useProfile } from "./useProfile";
import {
  AvatarEditBadge,
  AvatarOverlay,
  AvatarSection,
  AvatarWrapper,
  EditActions,
  EditCancelButton,
  EditCornerSlot,
  EditSaveButton,
  EditTextButton,
  ErrorText,
  FieldGroup,
  FieldLabel,
  FieldRow,
  FieldValue,
  InfoSection,
  PageRoot,
  PreferenceControl,
  ProfileCard,
  SectionCard,
  SectionTitle,
  SettingsGrid,
  SettingsItem,
  SubscriptionHeader,
  SubscriptionPlanName,
  SubscriptionPlanTagline,
  SubscriptionUsageWrapper,
  TakeTourButton,
  TimezoneSelect,
  TourAccordion,
  TourAccordionDetails,
  TourAccordionSummary,
  TourRow,
  TourStepName,
  UserAvatar,
} from "./styles";

export default function ProfilePage() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);
  const isDark = getResolvedTheme(themeMode) === "dark";

  const {
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
    handleTimezoneChange,
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
  } = useProfile();

  if (loading) return <Loader />;

  if (fetchError || !profile) {
    return (
      <PageRoot>
        <ErrorText>{fetchError ?? "Profile unavailable"}</ErrorText>
      </PageRoot>
    );
  }

  const avatarSrc = profile.avatarUrl ?? null;

  const planName = subscription?.plan.name ?? "Free";
  const isPro = planName === "Pro";

  return (
    <PageRoot>
      <ProfileCard>
        <EditCornerSlot>
          {!isEditing ? (
            <EditTextButton
              onClick={handleStartEdit}
              startIcon={<EditOutlined fontSize="small" />}
            >
              {t("profile.actions.edit")}
            </EditTextButton>
          ) : (
            <EditActions>
              <EditCancelButton onClick={handleCancelEdit} disabled={saving}>
                {t("profile.actions.cancel")}
              </EditCancelButton>
              <EditSaveButton
                onClick={handleSaveProfile}
                disabled={saving || !isEditFormValid}
              >
                {saving ? (
                  <CircularProgress size={16} color="inherit" />
                ) : (
                  t("profile.actions.save")
                )}
              </EditSaveButton>
            </EditActions>
          )}
        </EditCornerSlot>
        <AvatarSection>
          <AvatarWrapper
            className="avatar-wrapper"
            onClick={handleAvatarClick}
            title={t("profile.avatar.changeHint")}
          >
            <UserAvatar src={avatarSrc ?? undefined}>
              {!avatarSrc && initials}
            </UserAvatar>
            <AvatarOverlay $loading={uploading}>
              {uploading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                t("profile.avatar.changeLabel")
              )}
            </AvatarOverlay>
            <AvatarEditBadge>
              <EditOutlined sx={{ fontSize: 14 }} />
            </AvatarEditBadge>
          </AvatarWrapper>

          {uploadError && <ErrorText>{uploadError}</ErrorText>}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </AvatarSection>

        <InfoSection>
          <FieldRow>
            <FieldGroup>
              <FieldLabel>{t("profile.fields.firstName")}</FieldLabel>
              {isEditing ? (
                <TextField
                  size="small"
                  value={editForm.firstName}
                  onChange={(e) =>
                    handleEditFieldChange("firstName", e.target.value)
                  }
                  disabled={saving}
                  error={Boolean(editErrors.firstName)}
                  helperText={editErrors.firstName ?? " "}
                  inputProps={{ maxLength: 255 }}
                />
              ) : (
                <FieldValue>{profile.firstName}</FieldValue>
              )}
            </FieldGroup>

            <FieldGroup>
              <FieldLabel>{t("profile.fields.lastName")}</FieldLabel>
              {isEditing ? (
                <TextField
                  size="small"
                  value={editForm.lastName}
                  onChange={(e) =>
                    handleEditFieldChange("lastName", e.target.value)
                  }
                  disabled={saving}
                  error={Boolean(editErrors.lastName)}
                  helperText={editErrors.lastName ?? " "}
                  inputProps={{ maxLength: 255 }}
                />
              ) : (
                <FieldValue>{profile.lastName}</FieldValue>
              )}
            </FieldGroup>
          </FieldRow>

          <FieldRow>
            <FieldGroup>
              <FieldLabel>{t("profile.fields.email")}</FieldLabel>
              <FieldValue>{profile.email}</FieldValue>
            </FieldGroup>

            <FieldGroup>
              <FieldLabel>{t("profile.fields.company")}</FieldLabel>
              {isEditing ? (
                <TextField
                  size="small"
                  value={editForm.companyName}
                  onChange={(e) =>
                    handleEditFieldChange("companyName", e.target.value)
                  }
                  disabled={saving}
                  error={Boolean(editErrors.companyName)}
                  helperText={editErrors.companyName ?? " "}
                  inputProps={{ maxLength: 255 }}
                />
              ) : (
                <FieldValue>{profile.companyName}</FieldValue>
              )}
            </FieldGroup>
          </FieldRow>

          {saveError && <ErrorText>{saveError}</ErrorText>}
        </InfoSection>
      </ProfileCard>

      <SectionCard>
        <SectionTitle variant="h5">
          {t("profile.subscription.title")}
        </SectionTitle>

        {subscription ? (
          <>
            <SubscriptionHeader>
              <div>
                <SubscriptionPlanName $isPro={isPro}>
                  {planName}
                </SubscriptionPlanName>
                <SubscriptionPlanTagline>
                  {t(`profile.subscription.tagline.${isPro ? "pro" : "free"}`)}
                </SubscriptionPlanTagline>
              </div>
            </SubscriptionHeader>

            <SubscriptionUsageWrapper>
              <SubscriptionUsage />
            </SubscriptionUsageWrapper>
          </>
        ) : (
          <TourStepName>{t("profile.subscription.none")}</TourStepName>
        )}
      </SectionCard>

      <TourAccordion>
        <TourAccordionSummary expandIcon={<ExpandMore />}>
          <SectionTitle variant="h5">{t("profile.tour.title")}</SectionTitle>
        </TourAccordionSummary>

        <TourAccordionDetails>
          {TOUR_STEPS.map((step) => (
            <TourRow key={step}>
              <TourStepName>{t(`profile.tour.${step}`)}</TourStepName>

              <TakeTourButton
                onClick={() => handleTakeTour(step)}
                startIcon={<PlayCircleOutlined />}
              >
                {t("profile.tour.takeTour")}
              </TakeTourButton>
            </TourRow>
          ))}
        </TourAccordionDetails>
      </TourAccordion>

      <SectionCard>
        <SectionTitle variant="h5">{t("profile.settings.title")}</SectionTitle>

        <SettingsGrid>
          <SettingsItem>
            <FieldLabel>{t("profile.settings.theme")}</FieldLabel>
            <PreferenceControl>
              {isDark ? (
                <DarkMode fontSize="small" />
              ) : (
                <LightMode fontSize="small" />
              )}
              <FieldValue>
                {isDark
                  ? t("profile.settings.themeDark")
                  : t("profile.settings.themeLight")}
              </FieldValue>
              <Switch
                checked={isDark}
                onChange={() => dispatch(toggleTheme())}
                color="primary"
              />
            </PreferenceControl>
          </SettingsItem>

          <SettingsItem>
            <FieldLabel>{t("profile.settings.timezone")}</FieldLabel>
            <TimezoneSelect
              size="small"
              options={TIMEZONES}
              value={profile.timezone ?? "UTC"}
              disableClearable
              blurOnSelect
              selectOnFocus
              handleHomeEndKeys
              onChange={(_, value) => {
                if (value) void handleTimezoneChange(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder={t("profile.settings.timezonePlaceholder")}
                />
              )}
            />
          </SettingsItem>
        </SettingsGrid>
      </SectionCard>
    </PageRoot>
  );
}
