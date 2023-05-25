import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import { guidelines } from "@/data/dashboard";
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

const GuidelinesPage = () => {
  return (
    <Wrapper>
      <PageHeader headerText="Guidelines" />

      <Box>
        <Box sx={{ mt: 2 }}>
          {guidelines.map((item, index) => (
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
      </Box>
    </Wrapper>
  );
};

export default GuidelinesPage;
