import { useDropzone } from "react-dropzone";
import type { DropzoneOptions } from "react-dropzone";

type UseFileDropzoneParams = {
  onChange: (file: File | null) => void;
  options: Omit<DropzoneOptions, "onDrop">;
};

export const useFileDropzone = ({
  onChange,
  options,
}: UseFileDropzoneParams) => {
  const handleDrop: DropzoneOptions["onDrop"] = (acceptedFiles) => {
    onChange(acceptedFiles[0] ?? null);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null);
  };

  const dropzone = useDropzone({
    ...options,
    onDrop: handleDrop,
  });

  return {
    ...dropzone,
    handleRemove,
  };
};
