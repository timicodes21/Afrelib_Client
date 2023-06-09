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
import { mentorsTableColumns, studentsTableColumns } from "@/data/dashboard";
import { useTable } from "@/hooks/utility";
import Image from "next/image";
import { User } from "@/types/apiResponses";

interface IProps {
  mentors: User[];
  loading?: boolean;
}

const MentorsTable: React.FC<IProps> = ({ mentors, loading }) => {
  const { rowsPerPage, page, handleChangePage, handleChangeRowsPerPage } =
    useTable();

  return (
    <Paper
      sx={{
        maxWidth: "100%",
        overflow: "hidden",
        boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
        background: "#FFF",
        borderRadius: 4,
      }}
    >
      <TableContainer sx={{ maxHeight: 500, background: "#FBFAFA" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {mentorsTableColumns.map((column, index) => (
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
            {mentors.length === 0 && (
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
              mentors?.length > 0 &&
              mentors
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell align="left">
                        <Typography
                          className="font-12 font-700"
                          sx={{ color: "secondary.main" }}
                        >
                          {`${item?.first_name} ${item?.last_name}`}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          className="font-12 font-400"
                          sx={{ color: "secondary.main" }}
                        >
                          {item?.date_of_birth}
                        </Typography>
                      </TableCell>

                      <TableCell align="left">
                        <Typography
                          className="font-12 font-400"
                          sx={{ color: "secondary.main" }}
                        >
                          {item?.badges}
                        </Typography>
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
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={mentors.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default MentorsTable;
