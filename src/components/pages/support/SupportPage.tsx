import PageHeader from "@/components/molecules/headers/PageHeader";
import PageFlexLayout from "@/components/templates/PageFlexLayout";
import Wrapper from "@/components/templates/Wrapper";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import SupportForm from "./SupportForm";
import { frequentlyAskedQuestions } from "@/data/dashboard";

const SupportPage = () => {
  return (
    <Wrapper>
      <PageHeader headerText="Support" />
      <PageFlexLayout
        rightContent={
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={12}>
              <SupportForm />
            </Grid>
          </Grid>
        }
      >
        <Box sx={{ mt: 2 }}>
          <Grid container>
            <Grid xs={12} md={8} lg={6}>
              {frequentlyAskedQuestions?.length > 0 &&
                frequentlyAskedQuestions?.map((item, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={
                        <BsChevronDown
                          style={{ color: "#3384C4", fontWeight: 700 }}
                        />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography
                        sx={{ color: "secondary.main" }}
                        className="font-14 font-500"
                      >
                        {item?.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{ color: "secondary.main" }}
                        className="font-12 font-400"
                      >
                        {item?.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              <Typography
                sx={{ color: "secondary.main", mt: 3 }}
                className="font-12 font-400"
              >
                We hope this FAQ has provided helpful guidance as you embark on
                your tech challenge journey. Remember, our support team is here
                to assist you every step of the way. Best of luck in the
                challenge! -The Afrelib AI Challenge Hub Support Team
              </Typography>
            </Grid>
            <Grid xs={12} md={4} lg={6}></Grid>
          </Grid>
        </Box>
      </PageFlexLayout>
    </Wrapper>
  );
};

export default SupportPage;
