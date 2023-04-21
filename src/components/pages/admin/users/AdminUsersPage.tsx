import TransparentBlueButton from "@/components/atoms/buttons/TransparentBlueButton";
import PageHeader from "@/components/molecules/headers/PageHeader";
import CustomModal from "@/components/organisms/modals/CustomModal";
import UsersTable from "@/components/organisms/tables/UsersTable";
import Wrapper from "@/components/templates/Wrapper";
import { useAdminUsers, useGetAllUsers } from "@/hooks/admin/useAdminUsers";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import AddUser from "./AddUser";
import { useModal } from "@/hooks/utility";
import TableOptionsButton, {
  TableOptionsButton2,
} from "@/components/atoms/buttons/TableOptionsButton";

const AdminUsersPage = () => {
  const {
    activeTab,
    setActiveTab,
    activeTabStyle,
    inActiveTabStyle,
    selectedRole,
    setSelectedRole,
    statusOptions,
    setStatusOptions,
  } = useAdminUsers();

  const {
    allUsers,
    status,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetAllUsers();

  console.log("all users", allUsers);

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
          <TransparentBlueButton type="button" onClick={openModal}>
            Add User
          </TransparentBlueButton>
        </Box>
      </Box>
      <Box
        className="items-center"
        sx={{
          mt: 2,
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Box className="d-flex items-center">
          <TableOptionsButton
            active={selectedRole === "Student"}
            onClick={() => setSelectedRole("Student")}
          >
            Students
          </TableOptionsButton>
          <TableOptionsButton
            ml
            active={selectedRole === "Mentor"}
            onClick={() => setSelectedRole("Mentor")}
          >
            Mentors
          </TableOptionsButton>{" "}
          <TableOptionsButton
            ml
            active={selectedRole === "Panelist"}
            onClick={() => setSelectedRole("Panelist")}
          >
            Panelists
          </TableOptionsButton>
        </Box>
        <Box className="d-flex items-center" sx={{ mt: { xs: 2, md: 0 } }}>
          <TableOptionsButton2
            active={statusOptions === ""}
            onClick={() => setStatusOptions("")}
          >
            All
          </TableOptionsButton2>
          <TableOptionsButton2
            ml
            active={statusOptions === "active"}
            onClick={() => setStatusOptions("active")}
          >
            Active
          </TableOptionsButton2>{" "}
          <TableOptionsButton2
            ml
            active={statusOptions === "disabled"}
            onClick={() => setStatusOptions("disabled")}
          >
            Disabled
          </TableOptionsButton2>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <UsersTable
          loading={isLoading}
          users={allUsers?.filter(
            item =>
              item?.role_name === selectedRole &&
              item?.status?.startsWith(statusOptions),
          )}
          onDisableEnable={id => console.log("userId", id)}
          onResetPassword={id => console.log("userId", id)}
        />
      </Box>
      <CustomModal
        open={open}
        setOpen={setOpen}
        showCloseIcon={false}
        width="1000px"
        closeOnOverlayClick={false}
      >
        <AddUser handleClose={closeModal} />
      </CustomModal>
    </Wrapper>
  );
};

export default AdminUsersPage;
