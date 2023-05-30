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
import { submissionTableColumns } from "@/data/dashboard";
import { IStudents } from "@/types/dashboard";
import { useTable } from "@/hooks/utility";
import Image from "next/image";
import {
  IGetSingleSubmissionResponse,
  Submission,
  User,
} from "@/types/apiResponses";
import { IMAGE_BASE_URL } from "@/data/constants";

interface IProps {
  submission: IGetSingleSubmissionResponse[];
  loading?: boolean;
  onClickRow: (submissionId: number) => void;
}

const SubmissionTable: React.FC<IProps> = ({
  submission,
  loading,
  onClickRow,
}) => {
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
              {submissionTableColumns.map((column, index) => (
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
            {submission.length === 0 && (
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
              submission?.length > 0 &&
              submission
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                      onClick={() => onClickRow(item?.id)}
                    >
                      <TableCell align="left">
                        <Typography
                          className="font-12 font-700"
                          sx={{ color: "secondary.main" }}
                        >
                          {item?.submission_week}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          className="font-12 font-400"
                          sx={{ color: "secondary.main" }}
                        >
                          {item?.submission_title}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <a href={item?.submission_attachments} target="_blank">
                          <Typography
                            sx={{ color: "primary.A100" }}
                            className="font-12 font-400 pointer"
                          >
                            {item.submission_attachments}
                          </Typography>
                        </a>
                      </TableCell>
                      <TableCell align="left">
                        <a
                          href={`${IMAGE_BASE_URL}${item?.submission_url}`}
                          download
                          target="_blank"
                        >
                          <Box className="d-flex items-center pointer">
                            <Image
                              alt="download"
                              src="/assets/icons/download_blue_icon.svg"
                              width={13}
                              height={13}
                            />
                            <Typography
                              className="font-12 font-400"
                              sx={{ color: "#0275D8" }}
                            >
                              Download
                            </Typography>
                          </Box>
                        </a>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          className="font-12 font-400"
                          sx={{ color: "secondary.main" }}
                        >
                          {item?.submission_comment}
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
        count={submission.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default SubmissionTable;
