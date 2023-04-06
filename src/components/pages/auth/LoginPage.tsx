import AuthInput from "@/components/atoms/inputFields/AuthInput";
import AuthLayout from "@/components/templates/AuthLayout";
import usePasswordShow from "@/hooks/utility";
import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "@/styles/Auth.module.css";
import Link from "next/link";
import AuthButton from "@/components/atoms/buttons/AuthButton";
import { useLogin } from "@/hooks/auth/useLogin";
import { useForm, Controller } from "react-hook-form";
import { LoginFormValues } from "@/types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import InputErrorText from "@/components/atoms/texts/InputErrorText";

const LoginPage = () => {
  const { showPassword, passwordShow } = usePasswordShow();

  const { selectedRole, setSelectedRole, schema, onSubmit, isLoading } =
    useLogin();

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

  console.log("errors", errors);

  return (
    <>
      <AuthLayout
        onClickRole={name => setSelectedRole(name)}
        selectedRole={selectedRole ?? ""}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value, onBlur } }) => (
                <AuthInput
                  label="Email Address"
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
              <InputErrorText>{errors?.password?.message ?? ""}</InputErrorText>
            )}
          </Box>
          <Box className={styles.rememberContainer} sx={{ mt: 1 }}>
            <Box className={styles.checkContainer}>
              <Checkbox
                sx={{
                  color: "info.main",
                  "&.Mui-checked": {
                    color: "info.main",
                  },
                  margin: 0,
                  padding: 0,
                }}
              />
              <Typography
                sx={{ color: "info.main", ml: 1 }}
                className="font-14 font-400"
              >
                Remember me
              </Typography>
            </Box>
            <Box>
              <Link href="/">
                <Typography
                  sx={{ color: "info.main" }}
                  className="font-14 font-700"
                >
                  Forgot Password?
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <AuthButton type="submit" loading={isLoading}>
              Login
            </AuthButton>
          </Box>
        </form>
      </AuthLayout>
    </>
  );
};

export default LoginPage;
