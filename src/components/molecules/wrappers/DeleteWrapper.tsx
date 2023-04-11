import {
  CancelButton,
  DeleteButton,
} from "@/components/atoms/buttons/ActionButton";
import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

interface IProps {
  text: string;
  onDelete: () => void;
  onCancel: () => void;
  deleteBtnText?: string;
  cancelBtnText?: string;
  loading?: boolean;
}

const DeleteWrapper: React.FC<IProps> = ({
  text,
  onDelete,
  onCancel,
  deleteBtnText,
  cancelBtnText,
  loading,
}) => {
  return (
    <Box
      sx={{ mt: 2, p: 2 }}
      className="d-flex justify-center items-center flex-column"
    >
      <Typography
        sx={{ color: "secondary.main", width: "259px" }}
        className="font-20 font-600 text-center"
      >
        {text}
      </Typography>
      {!loading && (
        <Box sx={{ mt: 2 }} className="d-flex items-center justify-center">
          <CancelButton onClick={onCancel}>{cancelBtnText}</CancelButton>
          <Box sx={{ mx: 1 }}></Box>
          <DeleteButton onClick={onDelete}>{deleteBtnText}</DeleteButton>
        </Box>
      )}
      {loading && (
        <Box className="d-flex justify-center" sx={{ mt: 2 }}>
          <CircularProgress sx={{ color: "#F03738" }} size={25} thickness={5} />
        </Box>
      )}
    </Box>
  );
};

export default DeleteWrapper;
