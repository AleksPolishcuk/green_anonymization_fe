import { useTranslation } from "react-i18next";
import { useFileDropzone } from "components/Input/hooks/useFileDropzone";
import { fileDropzoneOptions } from "constants/DeidPage";
import { headerSpriteRef } from "constants/header";
import {
  FileWrapper,
  FileUploadIcon,
  FileTextBlock,
  FileDropHeading,
  FileDropSubtitle,
  FileTextWrapper,
  FileRemoveButton,
} from "../styles";
import type { FileDropZoneProps } from "components/Input/types";

export default function FileDropZone({ value, onChange }: FileDropZoneProps) {
  const { t } = useTranslation();

  const { getRootProps, getInputProps, isDragActive, handleRemove } =
    useFileDropzone({
      onChange,
      options: fileDropzoneOptions,
    });

  return (
    <FileWrapper {...getRootProps()}>
      <input {...getInputProps()} />

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
  );
}
