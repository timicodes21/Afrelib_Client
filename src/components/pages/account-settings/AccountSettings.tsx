import React from "react";
import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import { Box, Grid, Typography } from "@mui/material";

import { useMessagesContext } from "@/contexts/MessagesContext";

import styles from "@/styles/AccountSettings.module.css";

import { useGlobalContext } from "@/contexts/GlobalContext";
import AccountPersonalInformation from "./personal-information/PersonalInformation";
import AccountSubmissions from "./submissions/Submissions";

const AccountSettingsPage = () => {
  const { userDetails } = useGlobalContext();
  const { chat } = useMessagesContext();
  const activeChat = chat ? true : false;

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

        <Box mb={5}>
          <Typography className={styles.headerText}>Submissions</Typography>
          <AccountSubmissions />
        </Box>

        <Box>
          <Typography className={styles.headerText}>Badges</Typography>
          {/* <AccountPersonalInformation /> */}
        </Box>
      </div>
    </Wrapper>
  );
};

export default AccountSettingsPage;
