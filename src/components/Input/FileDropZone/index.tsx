import { useDropzone } from "react-dropzone";
import {
  FileDropHeading,
  FileDropSubtitle,
  FileRemoveButton,
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

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevents opening file dialog
    onChange(null);
  };

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
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <FileDropHeading>{value.name}</FileDropHeading>

          <FileRemoveButton onClick={handleRemove}>✕</FileRemoveButton>
        </div>
      )}
    </FileWrapper>
  );
}
