import PageHeader from "@/components/molecules/headers/PageHeader";
import Wrapper from "@/components/templates/Wrapper";
import { compliance, guidelines, termsAndConditions } from "@/data/dashboard";
import { useAdminUsers } from "@/hooks/admin/useAdminUsers";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const TermsAndConditionsPage = () => {
  const [activeTab, setActiveTab] = useState<
    "compliance" | "terms_and_conditions"
  >("compliance");
  const { activeTabStyle, inActiveTabStyle } = useAdminUsers();

  return (
    <Wrapper>
      <PageHeader headerText="Compliance / Terms and Conditions" />

      <Box sx={{ mt: 2 }} className="d-flex items-center justify-between">
        <Box
          sx={{ background: "#F6F9FC", borderRadius: "12px", padding: "4px" }}
          className="d-flex items-center"
        >
          <Box
            sx={activeTab === "compliance" ? activeTabStyle : inActiveTabStyle}
            className="pointer"
            onClick={() => setActiveTab("compliance")}
          >
            <Typography
              className="font-14 font-400"
              sx={{ color: "secondary.main" }}
            >
              Compliance
            </Typography>
          </Box>
          <Box
            sx={
              activeTab === "terms_and_conditions"
                ? activeTabStyle
                : inActiveTabStyle
            }
            className="pointer"
            onClick={() => setActiveTab("terms_and_conditions")}
          >
            <Typography
              className="font-14 font-400"
              sx={{ color: "secondary.main" }}
            >
              Terms and Conditions
            </Typography>
          </Box>
        </Box>
      </Box>

      {activeTab === "terms_and_conditions" && (
        <>
          <Typography
            sx={{ color: "secondary.main", mt: 2 }}
            className="font-14 font-500"
          >
            These Terms and Conditions outline the rules and guidelines for
            using the Afrelib AI Challenge Hub. By accessing and using the
            platform, you agree to comply with these terms. Here is a summary of
            the key points:
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
              These Terms and Conditions outline the rules and guidelines for
              using the Afrelib AI Challenge Hub. By accessing and using the
              platform, you agree to comply with these terms. Here is a summary
              of the key points:
            </Typography>
          </Box>
        </>
      )}
      {activeTab === "compliance" && (
        <>
          <Typography
            sx={{ color: "secondary.main", mt: 2 }}
            className="font-14 font-500"
          >
            At Afrelib AI Challenge Hub, we are committed to protecting your
            personal data and ensuring compliance with the General Data
            Protection Regulation (GDPR). We respect your privacy rights and
            strive to handle your personal information responsibly and securely.
            This GDPR compliance statement outlines our approach to data
            protection and provides transparency regarding the processing of
            personal data within our platform.
          </Typography>

          <Box>
            <Box sx={{ mt: 2 }}>
              {compliance.map((item, index) => (
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
              By participating in the Afrelib AI Challenge Hub, you acknowledge
              and consent to the processing of your personal data in accordance
              with this GDPR compliance statement. We are committed to
              maintaining your privacy and protecting your rights as we navigate
              the exciting world of AI challenges and innovation together
            </Typography>
          </Box>
        </>
      )}
    </Wrapper>
  );
};

export default TermsAndConditionsPage;
