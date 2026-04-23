import { useDropzone } from "react-dropzone";
import {
  FileDropHeading,
  FileDropSubtitle,
  FileTextBlock,
  FileUploadIcon,
  FileWrapper,
} from "../styles";
import { headerSpriteRef } from "constants/header";

type FileDropZoneProps = {
  value?: File | null;
  onChange: (file: File | null) => void;
};

export default function FileDropZone({ value, onChange }: FileDropZoneProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    maxSize: 50 * 1024 * 1024,
    accept: {
      "text/plain": [],
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
    },
    onDrop: (acceptedFiles) => {
      onChange(acceptedFiles[0] || null);
    },
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
            ? "Drop file here..."
            : "Drop file here, or click to browse"}
        </FileDropHeading>

        <FileDropSubtitle>
          Supports: txt, pdf, docx — max 50 MB
        </FileDropSubtitle>
      </FileTextBlock>

      {value && (
        <FileDropHeading style={{ marginLeft: "auto" }}>
          {value.name}
        </FileDropHeading>
      )}
    </FileWrapper>
  );
}
