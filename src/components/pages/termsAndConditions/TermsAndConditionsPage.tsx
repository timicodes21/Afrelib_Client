import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import { guidelines, termsAndConditions } from "@/data/dashboard";
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

const TermsAndConditionsPage = () => {
  return (
    <Wrapper>
      <PageHeader headerText="Terms and Conditions" />
      <Typography
        sx={{ color: "secondary.main", mt: 2 }}
        className="font-14 font-500"
      >
        These Terms and Conditions outline the rules and guidelines for using
        the Afrelib AI Challenge Hub. By accessing and using the platform, you
        agree to comply with these terms. Here is a summary of the key points:
      </Typography>

      <Box>
        <Box sx={{ mt: 2 }}>
          {termsAndConditions.map((item, index) => (
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
                  {item?.header}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ color: "secondary.main" }}
                  className="font-12 font-400"
                >
                  {item?.text}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Typography
          sx={{ color: "secondary.main", mt: 2 }}
          className="font-14 font-500"
        >
          These Terms and Conditions outline the rules and guidelines for using
          the Afrelib AI Challenge Hub. By accessing and using the platform, you
          agree to comply with these terms. Here is a summary of the key points:
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default TermsAndConditionsPage;
