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

const AuthBackgroundLayout: React.FC<IProps> = ({
  children,
  onClickRole,
  selectedRole,
}) => {
  return (
    <Box sx={{ height: "100vh" }} className={styles.authPatternBackground}>
      <Image
        src="/assets/images/background_pattern.svg"
        fill
        loading="lazy"
        alt="auth_image"
        style={{ zIndex: -999 }}
      />
      <Grid container>
        <Grid item xs={12} md={3} lg={4}></Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box
            sx={{
              background: "#FFF",
              p: { xs: 2, md: 4 },
              borderRadius: "8px",
              zIndex: 2,
            }}
          >
            <Box className="text-center">
              <Image
                src="/assets/icons/logo.svg"
                height={60}
                width={100}
                loading="lazy"
                alt="logo"
              />
            </Box>
            {children}
          </Box>
        </Grid>
        <Grid item xs={12} md={3} lg={4}></Grid>
      </Grid>
    </Box>
  );
};

export default AuthBackgroundLayout;
