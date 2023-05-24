import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./styles.module.css";
import usePasswordShow from "@/hooks/utility";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import InputErrorText from "@/components/atoms/texts/InputErrorText";
import { useChangePassword } from "@/hooks/user/useUser";
import { zodResolver } from "@hookform/resolvers/zod";

interface iProps {
  closeModal: () => void;
}

type FormValues = {
  old_password: string;
  new_password: string;
};

const ChangeAccountPassword = ({ closeModal }: iProps) => {
  const { showPassword, passwordShow } = usePasswordShow();
  const { schema, changingPassword, handleChangePassword } =
    useChangePassword();

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const changeUserPassword: SubmitHandler<FormValues> = data => {
    handleChangePassword(data);
  };

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
            name="old_password"
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
          {errors?.old_password && (
            <InputErrorText>
              {errors?.old_password?.message ?? ""}
            </InputErrorText>
          )}
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
          {errors?.new_password && (
            <InputErrorText>
              {errors?.new_password?.message ?? ""}
            </InputErrorText>
          )}
        </Box>

        <Box
          sx={{
            mt: 4,
          }}
        >
          <Button
            onClick={handleSubmit(changeUserPassword)}
            sx={{
              width: "100%",
              height: "48px",
            }}
            variant="contained"
          >
            {changingPassword ? (
              <CircularProgress sx={{ color: "#FFF" }} size={25} />
            ) : (
              "Change Password"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangeAccountPassword;
