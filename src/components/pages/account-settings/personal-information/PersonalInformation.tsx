import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import CreateIcon from "@mui/icons-material/Create";
import CustomModal from "@/components/organisms/modals/CustomModal";
import { useForm, Controller } from "react-hook-form";

import styles from "./styles.module.css";
import Avatars from "../Avatars/Avatars";
import CustomTextArea from "@/components/atoms/inputFields/CustomTextArea";
import ChangeAccountPassword from "./ChangePassword";
import Image from "next/image";
import { useGlobalContext } from "@/contexts/GlobalContext";

const AccountPersonalInformation = () => {
  const { userDetails } = useGlobalContext();
  const [avatarsModal, setAvatarsModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const showAvatarsModal = () => {
    setAvatarsModal(true);
  };

  const closeAvatarModal = () => {
    setAvatarsModal(false);
  };

  const openPasswordModal = () => {
    setPasswordModal(true);
  };

  const closePasswordModal = () => {
    setPasswordModal(false);
  };

  useEffect(() => {
    const defaultvalues = {
      first_name: userDetails.first_name,
      last_name: userDetails.last_name,
      dob: userDetails.dob,
      email: userDetails.email,
      bio: userDetails.bio,
    };
    reset(defaultvalues);
  }, [userDetails]);
  return (
    <Box className={styles.container}>
      <CustomModal open={avatarsModal} setOpen={setAvatarsModal} width="620px">
        <Avatars closeModal={closeAvatarModal} />
      </CustomModal>

      <CustomModal
        open={passwordModal}
        setOpen={setPasswordModal}
        width="537px"
      >
        <ChangeAccountPassword closeModal={closePasswordModal} />
      </CustomModal>

      <Box className={styles.contentsContainer}>
        <Box className={styles.avatar}>
          <div className={styles.avatarBadge} onClick={showAvatarsModal}>
            <CreateIcon />
          </div>
          <div
            className={styles.avatarImage}
            style={{
              background: `url(${"https://api.dicebear.com/6.x/adventurer/svg?seed=Bella"})`,
            }}
          />
        </Box>

        <Box className={styles.informationContainer}>
          <Box className={styles.informationInnerContainer}>
            <Box className={styles.informationSections}>
              <Box>
                <Controller
                  control={control}
                  name="first_name"
                  render={({ field: { onChange, value, onBlur } }) => (
                    <AuthInput
                      label="First Name"
                      type="text"
                      placeholder="First name"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      blackLabel
                    />
                  )}
                />
              </Box>

              <Box>
                <Controller
                  control={control}
                  name="last_name"
                  render={({ field: { onChange, value, onBlur } }) => (
                    <AuthInput
                      label="Last Name"
                      type="text"
                      placeholder="Last name"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      blackLabel
                    />
                  )}
                />
              </Box>

              <Box>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, value, onBlur } }) => (
                    <AuthInput
                      label="Email"
                      type="text"
                      placeholder="Email address"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      blackLabel
                    />
                  )}
                />
              </Box>
            </Box>

            <Box className={styles.informationSections}>
              <Box>
                <Controller
                  control={control}
                  name="dob"
                  render={({ field: { onChange, value, onBlur } }) => (
                    <AuthInput
                      label="Date of Birth"
                      type="text"
                      placeholder="Date of birth"
                      value={value}
                      onBlur={onBlur}
                      blackLabel
                      onChange={onChange}
                    />
                  )}
                />
              </Box>

              <Box>
                <Controller
                  control={control}
                  name="bio"
                  render={({ field: { onChange, value, onBlur } }) => (
                    <CustomTextArea
                      label="About Me"
                      type="text"
                      placeholder="Type here..."
                      value={value}
                      onBlur={onBlur}
                      blackLabel
                      onChange={onChange}
                      rows={7}
                    />
                  )}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              minHeight: "97px",
            }}
            onClick={openPasswordModal}
          >
            <Typography className={styles.securityText}>Security</Typography>
            <Box className={styles.changePassword}>
              <Typography>Change Password</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "50%",
            height: "48px",
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default AccountPersonalInformation;
