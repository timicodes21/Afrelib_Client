import TransparentBlueButton from "@/components/atoms/buttons/TransparentBlueButton";
import PageHeader from "@/components/molecules/headers/PageHeader";
import CustomModal from "@/components/organisms/modals/CustomModal";
import UsersTable from "@/components/organisms/tables/UsersTable";
import Wrapper from "@/components/templates/Wrapper";
import { allUsers } from "@/data/dashboard";
import { useAdminUsers } from "@/hooks/admin/useAdminUsers";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import AddUser from "./AddUser";
import { useGetRoles, useModal } from "@/hooks/utility";
import { getRoles } from "@/api/roles";

const AdminUsersPage = () => {
  const { activeTab, setActiveTab, activeTabStyle, inActiveTabStyle } =
    useAdminUsers();

  const { open, setOpen, openModal, closeModal } = useModal();

  return (
    <Wrapper>
      <PageHeader headerText="Users" />
      <Box sx={{ mt: 2 }} className="d-flex items-center justify-between">
        <Box
          sx={{ background: "#F6F9FC", borderRadius: "12px", padding: "4px" }}
          className="d-flex items-center"
        >
          <Box
            sx={activeTab === "users" ? activeTabStyle : inActiveTabStyle}
            className="pointer"
            onClick={() => setActiveTab("users")}
          >
            <Typography
              className="font-14 font-400"
              sx={{ color: "secondary.main" }}
            >
              Users
            </Typography>
          </Box>
          <Box
            sx={activeTab === "admin" ? activeTabStyle : inActiveTabStyle}
            className="pointer"
            onClick={() => setActiveTab("admin")}
          >
            <Typography
              className="font-14 font-400"
              sx={{ color: "secondary.main" }}
            >
              Admin
            </Typography>
          </Box>
        </Box>
        <Box>
          <TransparentBlueButton onClick={openModal}>
            Add User
          </TransparentBlueButton>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <UsersTable loading={false} users={allUsers} />
      </Box>
      <CustomModal
        open={open}
        setOpen={setOpen}
        width="1000px"
        closeOnOverlayClick={false}
      >
        <AddUser handleClose={closeModal} />
      </CustomModal>
    </Wrapper>
  );
};

export default AdminUsersPage;
