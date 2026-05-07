import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ALLOWED_FILE_TYPES,
  INPUT_SECTION_CONSTANTS,
  MAX_FILE_UPLOAD_SIZE,
} from "constants/DeidPage";
import type { UseFileDropZoneProps } from "components/Input/types";

export default function useFileDropZone({ onChange }: UseFileDropZoneProps) {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isDragActive, setIsDragActive] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const validateFile = (file: File | null): string | null => {
    if (!file) return null;

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return t("input.form.errors.fileWrongFormat");
    }

    if (file.size > MAX_FILE_UPLOAD_SIZE) {
      return t("input.form.errors.fileTooLarge");
    }

    return null;
  };

  const handleFileSelect = (file: File | null) => {
    const error = validateFile(file);

    if (error) {
      setLocalError(error);

      setTimeout(() => {
        setLocalError(null);
      }, INPUT_SECTION_CONSTANTS.SUBMIT_SUCCESS_TIMEOUT);

      return;
    }

    onChange(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);

    const file = e.dataTransfer.files?.[0] || null;
    handleFileSelect(file);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileSelect(file);
    e.target.value = "";
  };

  return {
    inputRef,
    isDragActive,
    setIsDragActive,
    localError,
    setLocalError,
    handleDrop,
    handleRemove,
    handleDragOver,
    handleDragLeave,
    handleInputChange,
    handleFileSelect,
  };
}
