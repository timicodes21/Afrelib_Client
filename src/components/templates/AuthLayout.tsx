import React, { ReactNode } from "react";
import styles from "@/styles/Auth.module.css";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { roles } from "@/data/auth";
import RoleCard from "../molecules/cards/RoleCard";

interface IProps {
  children: ReactNode;
  onClickRole: (role: string) => void;
  selectedRole: string;
}

const AuthLayout: React.FC<IProps> = ({
  children,
  onClickRole,
  selectedRole,
}) => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          className={styles.leftBackground}
          sx={{ p: { xs: 2, md: 3 } }}
        >
          <Image
            src="/assets/icons/logo.svg"
            height={60}
            width={100}
            loading="lazy"
            alt="logo"
          />
          <Box>
            <Image
              src="/assets/images/auth_background.gif"
              height={400}
              width={400}
              loading="lazy"
              alt="auth_image"
            />
          </Box>
          <Box>
            <Typography
              sx={{ color: "secondary.main" }}
              className="font-32 font-700"
            >
              Welcome
            </Typography>
            <Typography
              sx={{ color: "secondary.main" }}
              className="font-18 font-600"
            >
              Get started in the Afrelib Academy Artificial Intelligence
              Challenge
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={styles.rightBackground}
          sx={{
            px: { xs: 2, md: 4, lg: 7 },
          }}
        >
          <Image
            src="/assets/images/auth_white_pattern.svg"
            fill
            loading="lazy"
            alt="auth_image"
          />
          <Box sx={{ zIndex: 2 }}>
            <Typography
              sx={{ color: "info.main" }}
              className="font-28 font-700 text-center"
            >
              Log In to your account
            </Typography>
            <Typography
              sx={{ color: "info.main" }}
              className="font-16 font-400 text-center"
            >
              Please select your role
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {roles.map((item, index) => (
                <Grid item xs={4} key={index} className="pointer">
                  <RoleCard
                    text={item?.roleName}
                    image={
                      item?.roleName === selectedRole
                        ? item?.activeSrc
                        : item.src
                    }
                    onClick={() => onClickRole(item?.roleName)}
                    selectedRole={selectedRole}
                  />
                </Grid>
              ))}
              <Grid item xs={4}></Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={2}></Grid>
              <Grid item xs={12} md={8} sx={{ mt: 3 }}>
                {children}
              </Grid>
              <Grid item xs={12} md={2}></Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthLayout;
