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
        <Box>
          <Typography
            sx={{ color: "secondary.main" }}
            className="font-16 font-500"
          >
            Frequently Asked Questions (F.A.Qs)
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Accordion>
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
                  How do I know when it is time to make a submission
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ color: "secondary.main" }}
                  className="font-12 font-400"
                >
                  How do I know when it is time to make a submission
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
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
                  How do I know when it is time to make a submission
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ color: "secondary.main" }}
                  className="font-12 font-400"
                >
                  How do I know when it is time to make a submission
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </PageFlexLayout>
    </Wrapper>
  );
};

export default SupportPage;
