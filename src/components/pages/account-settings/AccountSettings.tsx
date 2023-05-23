import React from "react";
import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import { Box, Grid, Typography } from "@mui/material";

import { useMessagesContext } from "@/contexts/MessagesContext";

import styles from "@/styles/AccountSettings.module.css";

import { useGlobalContext } from "@/contexts/GlobalContext";
import AccountPersonalInformation from "./personal-information/PersonalInformation";
import AccountSubmissions from "./submissions/Submissions";
import AccountBadges from "./badges/Badges";

const AccountSettingsPage = () => {
  const { userDetails } = useGlobalContext();
  const { chat } = useMessagesContext();
  const activeChat = chat ? true : false;

  const { role } = userDetails;

  return (
    <Wrapper>
      <PageHeader headerText="Account & Settings" />
      <div className={styles.container}>
        <Box mb={5}>
          <Typography className={styles.headerText}>
            Personal Information
          </Typography>
          <AccountPersonalInformation />
        </Box>

        {role?.toLowerCase() === "student" && (
          <Box mb={5}>
            <Typography className={styles.headerText}>Submissions</Typography>
            <AccountSubmissions />
          </Box>
        )}

        {/* {(role?.toLowerCase() === "student" ||
          role?.toLowerCase() === "admin") && (
          <Box>
            <Typography className={styles.headerText}>Badges</Typography>
            <AccountBadges />
          </Box>
        )} */}
      </div>
    </Wrapper>
  );
};

export default AccountSettingsPage;
