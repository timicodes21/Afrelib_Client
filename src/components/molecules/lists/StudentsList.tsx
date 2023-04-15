import { User } from "@/types/apiResponses";
import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

interface IProps {
  students: User[];
  header: string;
  loading?: boolean;
}

const StudentsList: React.FC<IProps> = ({ students, header, loading }) => {
  return (
    <Box sx={{ px: 2, py: 5 }}>
      {loading && (
        <Box className="d-flex justify-center">
          <CircularProgress sx={{ color: "#0065B5" }} size={25} thickness={5} />
        </Box>
      )}
      {!loading && (
        <Box>
          {students.map((item, index) => (
            <Box key={index}>
              <Typography
                sx={{ color: "secondary.main" }}
                className="font-16 font-600"
              >
                {item?.first_name} {item?.last_name}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default StudentsList;
