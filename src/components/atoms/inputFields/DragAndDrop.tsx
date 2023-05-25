import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";

interface IProps {
  handleDragDrop: (file: any) => void;
  fileName: string;
  isLoading?: boolean;
}

const DragAndDrop: React.FC<IProps> = ({
  handleDragDrop,
  fileName,
  isLoading,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => handleDragDrop(acceptedFiles),
    [],
  );
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/png": [".png", ".jpg"],
      "video/mp4": [".mp4", ".wmv"],
      "image/jpeg": [".jpeg", ".png"],
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
    },
  });
  return (
    <div {...getRootProps()}>
      <input {...getInputProps({})} />
      <Box
        sx={{
          background: "#F3F5F6",
          borderRadius: "12px",
          border: `2px dashed ${
            isDragAccept ? "green" : isDragReject ? "red" : "#B1B1B1"
          }`,
          p: 1,
        }}
        className="pointer"
      >
        <Box className="text-center">
          <Image
            alt="upload"
            src="/assets/icons/upload_icon.svg"
            width={36}
            height={36}
          />
        </Box>
        {isLoading && (
          <Box className="d-flex justify-center items-center">
            <CircularProgress sx={{ color: "primary.main" }} size={20} />
          </Box>
        )}
        {isDragActive ? (
          <Typography
            sx={{ color: "rgba(53, 63, 80, 0.6)" }}
            className="font-400 font-12 text-center"
          >
            Drop the file here
          </Typography>
        ) : (
          <Box className="text-center">
            <Typography
              sx={{ color: "rgba(53, 63, 80, 0.6)" }}
              className="font-700 font-24 text-center"
            >
              Drag & drop
            </Typography>
            <Typography
              sx={{ color: "rgba(53, 63, 80, 0.6)" }}
              className="font-400 font-12 text-center"
            >
              {fileName && fileName?.trim()
                ? fileName
                : "Drag a file here or click in this area to browse in your folderexplorer"}
            </Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default DragAndDrop;
