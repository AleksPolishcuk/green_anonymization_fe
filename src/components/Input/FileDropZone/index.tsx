import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { headerSpriteRef } from "constants/MainPages";
import {
  FileWrapper,
  FileUploadIcon,
  FileTextBlock,
  FileDropHeading,
  FileDropSubtitle,
  FileTextWrapper,
  FileRemoveButton,
  FileDropHelperText,
} from "../styles";

import type { FileDropZoneProps } from "components/Input/types";
import {
  ALLOWED_FILE_TYPES,
  INPUT_SECTION_CONSTANTS,
  MAX_FILE_UPLOAD_SIZE,
} from "constants/DeidPage";

type Props = FileDropZoneProps & {
  error?: boolean;
  helperText?: string | null;
};

export default function FileDropZone({
  value,
  onChange,
  error,
  helperText,
}: Props) {
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

  return (
    <div>
      <FileWrapper
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragActive(true);
        }}
        onDragLeave={() => setIsDragActive(false)}
        onDrop={handleDrop}
        $hasError={Boolean(error || localError)}
      >
        <input
          ref={inputRef}
          type="file"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            handleFileSelect(file);
            e.target.value = "";
          }}
        />

        <FileUploadIcon>
          <use href={headerSpriteRef("upload-file-icon")} />
        </FileUploadIcon>

        <FileTextBlock>
          <FileDropHeading>
            {isDragActive
              ? t("input.form.fileDragActive")
              : t("input.form.fileDragInactive")}
          </FileDropHeading>

          <FileDropSubtitle>{t("input.form.fileSupport")}</FileDropSubtitle>
        </FileTextBlock>

        {value && (
          <FileTextWrapper>
            <FileDropHeading>{value.name}</FileDropHeading>

            <FileRemoveButton onClick={handleRemove}>✕</FileRemoveButton>
          </FileTextWrapper>
        )}
      </FileWrapper>

      {(localError || (error && helperText)) && (
        <FileDropHelperText>{localError || helperText}</FileDropHelperText>
      )}
    </div>
  );
}
