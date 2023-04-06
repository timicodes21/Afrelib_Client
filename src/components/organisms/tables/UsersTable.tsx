import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, LinearProgress, Typography } from "@mui/material";
import { usersTableColumns } from "@/data/dashboard";
import { useTable } from "@/hooks/utility";
import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";
import AuthButton from "@/components/atoms/buttons/AuthButton";
import { IGetAllUsersResponse } from "@/types/apiResponses";
import ActiveInActiveBdge from "@/components/atoms/badges/ActiveInActiveBdge";

interface IProps {
  users: IGetAllUsersResponse[];
  loading?: boolean;
}

const UsersTable: React.FC<IProps> = ({ users, loading }) => {
  const { rowsPerPage, page, handleChangePage, handleChangeRowsPerPage } =
    useTable();

  return (
    <Paper
      sx={{
        maxWidth: "95%",
        overflow: "hidden",
        boxShadow:
          "0px 1px 3px rgba(16, 24, 40, 0.15), 0px 1px 2px rgba(16, 24, 40, 0.1)",
        background: "#FBFAFA",
        borderRadius: "10px",
      }}
    >
      <TableContainer sx={{ maxHeight: 500, background: "#FBFAFA" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {usersTableColumns.map((column, index) => (
                <TableCell
                  sx={{
                    py: 2,
                  }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <Box className="flex items-center relative">
                    <div className="">
                      <Typography
                        className="font-12 font-600"
                        sx={{ mr: 1, color: "secondary.main" }}
                      >
                        {column.label}
                      </Typography>
                    </div>
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {!loading && users.length === 0 && (
              <Box className="d-flex justify-center items-center">
                <Image
                  src="/assets/icons/empty_icon.svg"
                  alt="icon"
                  width={143}
                  height={107}
                />
              </Box>
            )}
            {!loading &&
              users?.length > 0 &&
              users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell align="left">
                        <Typography
                          className="font-10 font-500"
                          sx={{ color: "secondary.main" }}
                        >
                          {item.first_name}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          className="font-10 font-500"
                          sx={{ color: "secondary.main" }}
                        >
                          {item.last_name}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          className="font-10 font-500"
                          sx={{ color: "secondary.main" }}
                        >
                          {item.email}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          className="font-10 font-500"
                          sx={{ color: "secondary.main" }}
                        >
                          Date of birth
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          className="font-10 font-500"
                          sx={{ color: "secondary.main" }}
                        >
                          {item.leadership_points}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          className="font-10 font-500"
                          sx={{ color: "secondary.main" }}
                        >
                          {item.badges}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <ActiveInActiveBdge
                          type={item.status.toLocaleLowerCase()}
                        >
                          {item.status}
                        </ActiveInActiveBdge>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          className="font-10 font-500"
                          sx={{ color: "secondary.main" }}
                        >
                          {item.school_name}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Box className="d-flex items-center justify-between">
                          <Box>
                            <AuthButton size="small" notFullWidth>
                              Login
                            </AuthButton>
                          </Box>
                          <Box>
                            <FiMoreVertical
                              style={{ color: "#353F50" }}
                              className="font-16 pointer"
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
        {loading && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress sx={{ color: "#213F7D" }} />
          </Box>
        )}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default UsersTable;
