import TransparentBlueButton from "@/components/atoms/buttons/TransparentBlueButton";
import PageHeader from "@/components/molecules/headers/PageHeader";
import CustomModal from "@/components/organisms/modals/CustomModal";
import Wrapper from "@/components/templates/Wrapper";
import { useAdminUsers } from "@/hooks/admin/useAdminUsers";
import { useModal } from "@/hooks/utility";
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

const AdminSupportPage = () => {
  const [activeTab, setActiveTab] = useState<"faq" | "messages">("faq");
  const { activeTabStyle, inActiveTabStyle } = useAdminUsers();
  const { open, setOpen, openModal, closeModal } = useModal();
  return (
    <Wrapper>
      <PageHeader headerText="Support" />

      <Box>
        <Typography
          sx={{ color: "secondary.main" }}
          className="font-16 font-500"
        >
          Frequently Asked Questions (F.A.Qs)
        </Typography>
        <Box sx={{ mt: 2 }} className="d-flex items-center justify-between">
          <Box
            sx={{ background: "#F6F9FC", borderRadius: "12px", padding: "4px" }}
            className="d-flex items-center"
          >
            <Box
              sx={activeTab === "faq" ? activeTabStyle : inActiveTabStyle}
              className="pointer"
              onClick={() => setActiveTab("faq")}
            >
              <Typography
                className="font-14 font-400"
                sx={{ color: "secondary.main" }}
              >
                F.A.Qs
              </Typography>
            </Box>
            <Box
              sx={activeTab === "messages" ? activeTabStyle : inActiveTabStyle}
              className="pointer"
              onClick={() => setActiveTab("messages")}
            >
              <Typography
                className="font-14 font-400"
                sx={{ color: "secondary.main" }}
              >
                Messages
              </Typography>
            </Box>
          </Box>
          <Box>
            <TransparentBlueButton type="button" onClick={openModal}>
              Add New
            </TransparentBlueButton>
          </Box>
        </Box>
        {activeTab === "faq" && (
          <Box sx={{ mt: 2 }}>
            <Grid container>
              <Grid xs={12} md={8} lg={6}>
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
              </Grid>
              <Grid xs={12} md={4} lg={6}></Grid>
            </Grid>
          </Box>
        )}
        {activeTab === "messages" && <Box sx={{ mt: 2 }}></Box>}
      </Box>
      <CustomModal
        open={open}
        setOpen={setOpen}
        showCloseIcon={false}
        width="1000px"
        closeOnOverlayClick={false}
      >
        <Box></Box>
      </CustomModal>
    </Wrapper>
  );
};

export default AdminSupportPage;