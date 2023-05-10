import * as React from "react";
import Box from "@mui/material/Box";
import { Modal } from "react-responsive-modal";

interface IProps {
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal?: () => void;
  children: React.ReactNode;
  width?: string;
  maxWidth?: string;
  closeOnOverlayClick?: boolean;
  showCloseIcon?: boolean;
}

const CustomModal: React.FC<IProps> = ({
  open,
  setOpen,
  children,
  width,
  maxWidth,
  closeOnOverlayClick,
  showCloseIcon,
  closeModal,
}) => {
  const customModalStyle = {
    modal: {
      width: width ?? "500px",
      maxWidth: maxWidth ?? "1000px",
    },
    // modalContainer: {
    //   "@media (min-width: 1024px)": {
    //     modalContent: {
    //       width: width ?? "500px",
    //       maxWidth: maxWidth ?? "1000px",
    //     },
    //   },
    //   "@media (max-width: 1024px)": {
    //     modalContent: {
    //       width: width ?? "500px",
    //       maxWidth: maxWidth ?? "1000px",
    //     },
    //   },
    //   "@media (max-width: 768px)": {
    //     modalContent: {
    //       maxWidth: "90%",
    //     },
    //   },
    //   "@media (min-width: 450px)": {
    //     modalContent: {
    //       width: "70%",
    //     },
    //   },
    // },
  };

  const handleCloseModal = () => {
    if (setOpen) {
      return setOpen(false);
    } else if (closeModal) {
      return closeModal();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      center
      showCloseIcon={showCloseIcon ?? false}
      styles={customModalStyle}
      closeOnOverlayClick={closeOnOverlayClick}
    >
      <Box>{children}</Box>
    </Modal>
  );
};

export default CustomModal;
