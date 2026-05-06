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
} from "components/Input/styles";

import type { FileDropZoneProps } from "components/Input/types";
import useFileDropZone from "./useFileDropZone";
import { useTranslation } from "react-i18next";

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

  const {
    inputRef,
    isDragActive,
    setIsDragActive,
    localError,
    handleDrop,
    handleRemove,
    handleInputChange,
    handleDragOver,
  } = useFileDropZone({ onChange });

  return (
    <div>
      <FileWrapper
        onClick={() => inputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={() => setIsDragActive(false)}
        onDrop={handleDrop}
        $hasError={Boolean(error || localError)}
      >
        <input ref={inputRef} type="file" hidden onChange={handleInputChange} />

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
