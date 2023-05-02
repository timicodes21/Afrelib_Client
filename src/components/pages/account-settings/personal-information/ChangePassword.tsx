import { Box, Button, IconButton, Typography } from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Controller, useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./styles.module.css";
import usePasswordShow from "@/hooks/utility";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import InputErrorText from "@/components/atoms/texts/InputErrorText";

interface iProps {
  closeModal: () => void;
}

const ChangeAccountPassword = ({ closeModal }: iProps) => {
  const { showPassword, passwordShow } = usePasswordShow();

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    //resolver: zodResolver(schema),
  });

  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: "429px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        paddingBottom: "40px",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <IconButton onClick={closeModal}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          width: "327px",
        }}
      >
        <Typography className={styles.changePasswordHeader} mb={5}>
          Change Password
        </Typography>

        <Box sx={{ mt: 2.5 }}>
          <Controller
            control={control}
            name="current_assword"
            render={({ field: { onChange, value, onBlur } }) => (
              <AuthInput
                label="Current Password"
                blackLabel
                type={passwordShow ? "text" : "password"}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder="Enter Password"
                icon={
                  passwordShow ? (
                    <AiOutlineEyeInvisible
                      className="pointer font-24"
                      style={{ color: "#5F738C" }}
                      onClick={showPassword}
                    />
                  ) : (
                    <AiOutlineEye
                      className="pointer font-24"
                      style={{ color: "#5F738C" }}
                      onClick={showPassword}
                    />
                  )
                }
              />
            )}
          />
          {/* {errors?.password && (
            <InputErrorText>{errors?.password?.message ?? ""}</InputErrorText>
          )} */}
        </Box>

        <Box sx={{ mt: 2.5 }}>
          <Controller
            control={control}
            name="new_password"
            render={({ field: { onChange, value, onBlur } }) => (
              <AuthInput
                label="New Password"
                blackLabel
                type={passwordShow ? "text" : "password"}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder="Enter Password"
                icon={
                  passwordShow ? (
                    <AiOutlineEyeInvisible
                      className="pointer font-24"
                      style={{ color: "#5F738C" }}
                      onClick={showPassword}
                    />
                  ) : (
                    <AiOutlineEye
                      className="pointer font-24"
                      style={{ color: "#5F738C" }}
                      onClick={showPassword}
                    />
                  )
                }
              />
            )}
          />
          {/* {errors?.password && (
            <InputErrorText>{errors?.password?.message ?? ""}</InputErrorText>
          )} */}
        </Box>

        <Box
          sx={{
            mt: 4,
          }}
        >
          <Button
            sx={{
              width: "100%",
              height: "48px",
            }}
            variant="contained"
          >
            Change Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangeAccountPassword;
