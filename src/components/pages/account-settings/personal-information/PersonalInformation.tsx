import { useState, useEffect } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import CreateIcon from "@mui/icons-material/Create";
import CustomModal from "@/components/organisms/modals/CustomModal";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import styles from "./styles.module.css";
import Avatars from "../Avatars/Avatars";
import CustomTextArea from "@/components/atoms/inputFields/CustomTextArea";
import ChangeAccountPassword from "./ChangePassword";
import Image from "next/image";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { useUpdateUserDetails } from "@/hooks/user/useUser";

type FormValue = {
  first_name: string;
  last_name: string;
  dob: string;
  email: string;
  about_me: string;
};

const AccountPersonalInformation = () => {
  const { userDetails } = useGlobalContext();
  const { updating, handleUpdate } = useUpdateUserDetails();
  const [avatarsModal, setAvatarsModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);

  console.log(userDetails);

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormValue>({
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

  const handleUpdateUser: SubmitHandler<FormValue> = data => {
    const update = {
      about_me: data.about_me,
    };
    handleUpdate(update);
  };

  useEffect(() => {
    const defaultvalues = {
      first_name: userDetails.first_name || "",
      last_name: userDetails.last_name || "",
      dob: userDetails.dob || "",
      email: userDetails.email || "",
      about_me: userDetails.about_me || "",
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
                      disabled
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
                      disabled
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
                      disabled
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
                      disabled
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
                  name="about_me"
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
          onClick={handleSubmit(handleUpdateUser)}
          variant="contained"
          sx={{
            width: "50%",
            height: "48px",
          }}
        >
          {updating ? (
            <CircularProgress sx={{ color: "#FFF" }} size={25} />
          ) : (
            "Save Changes"
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default AccountPersonalInformation;
