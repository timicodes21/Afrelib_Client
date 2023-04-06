import AuthInput from "@/components/atoms/inputFields/AuthInput";
import usePasswordShow from "@/hooks/utility";
import { Box, Checkbox, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "@/styles/Auth.module.css";
import Link from "next/link";
import AuthButton from "@/components/atoms/buttons/AuthButton";
import { useLogin } from "@/hooks/auth/useLogin";
import { useForm, Controller } from "react-hook-form";
import { LoginFormValues } from "@/types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthBackgroundLayout from "@/components/templates/AuthBackgroundLayout";
import InputErrorText from "@/components/atoms/texts/InputErrorText";

const AdminLoginPage = () => {
  const { showPassword, passwordShow } = usePasswordShow();

  const {
    selectedRole,
    setSelectedRole,
    schema,
    onSubmitAdmin,
    isLoadingAdmin,
  } = useLogin();

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  return (
    <>
      <AuthBackgroundLayout
        onClickRole={name => setSelectedRole(name)}
        selectedRole={selectedRole ?? ""}
      >
        <Box sx={{ my: 2 }}>
          <Box>
            <Typography
              sx={{ color: "secondary.main" }}
              className="font-20 font-700 text-center"
            >
              Hello, Admin!
            </Typography>
            <Typography
              sx={{ color: "secondary.light" }}
              className="font-14 font-400 text-center"
            >
              Log in to access your account.
            </Typography>
          </Box>
          <form onSubmit={handleSubmit(onSubmitAdmin)}>
            <Box>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, onBlur } }) => (
                  <AuthInput
                    label="Email Address"
                    blackLabel
                    type="email"
                    placeholder="Enter email"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                  />
                )}
              />
              {errors?.email && (
                <InputErrorText>{errors?.email?.message ?? ""}</InputErrorText>
              )}
            </Box>
            <Box sx={{ mt: 2 }}>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value, onBlur } }) => (
                  <AuthInput
                    label="Password"
                    type={passwordShow ? "text" : "password"}
                    blackLabel
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
              {errors?.password && (
                <InputErrorText>
                  {errors?.password?.message ?? ""}
                </InputErrorText>
              )}
            </Box>
            <Box className={styles.rememberContainer} sx={{ mt: 1 }}>
              <Box className={styles.checkContainer}>
                <Checkbox
                  sx={{
                    color: "#AAB7C6",
                    "&.Mui-checked": {
                      color: "primary.main",
                    },
                    margin: 0,
                    padding: 0,
                  }}
                />
                <Typography
                  sx={{ color: "secondary.main", ml: 1 }}
                  className="font-14 font-400"
                >
                  Remember me
                </Typography>
              </Box>
              <Box>
                <Link href="/">
                  <Typography
                    sx={{ color: "primary.main" }}
                    className="font-14 font-700"
                  >
                    Forgot Password?
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box sx={{ mt: { xs: 3, md: 5 } }}>
              <AuthButton type="submit" loading={isLoadingAdmin}>
                Login
              </AuthButton>
            </Box>
          </form>
        </Box>
      </AuthBackgroundLayout>
    </>
  );
};

export default AdminLoginPage;
