import React, { useMemo, useState } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { EvaluatedSubmission } from "@/types/apiResponses";

interface IProps {
  evaluatedSubmissions: EvaluatedSubmission[];
  nonEvaluatedSubmissions: EvaluatedSubmission[];
  isFetching?: boolean;
  onClick: (submissionId: number) => void;
}

const AllSubmissions: React.FC<IProps> = ({
  evaluatedSubmissions,
  nonEvaluatedSubmissions,
  isFetching,
  onClick,
}) => {
  const [activeTab, setActiveTab] = useState<"new" | "evaluated">("new");

  const submissions = useMemo(
    () =>
      activeTab === "new" ? evaluatedSubmissions : nonEvaluatedSubmissions,
    [activeTab],
  );

  console.log("submissions", submissions);

  return (
    <Box sx={{ mt: 2 }}>
      <Box className="d-flex">
        <Box
          sx={{
            py: 2,
            width: "50%",
            borderBottom: `2px solid  ${
              activeTab === "new" ? "#074EE8" : "#AAAAAA"
            }`,
          }}
          className="pointer"
          onClick={() => setActiveTab("new")}
        >
          <Typography
            className="font-16 font-400 text-center"
            sx={{ color: activeTab === "new" ? "#074EE8" : "secondary.main" }}
          >
            New
          </Typography>
        </Box>
        <Box
          sx={{
            py: 2,
            width: "50%",
            borderBottom: `2px solid  ${
              activeTab === "evaluated" ? "#074EE8" : "#AAAAAA"
            }`,
          }}
          className="pointer"
          onClick={() => setActiveTab("evaluated")}
        >
          <Typography
            className="font-16 font-400 text-center"
            sx={{
              color: activeTab === "evaluated" ? "#074EE8" : "secondary.main",
            }}
          >
            Evaluated
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        {isFetching && (
          <Box sx={{ width: "100%", mt: 2 }}>
            <LinearProgress sx={{ color: "#213F7D" }} />
          </Box>
        )}
        {submissions.map((item, index) => (
          <Box
            sx={{ borderBottom: "1px solid #AAAAAA", py: 1, px: 2 }}
            className="d-flex pointer"
            onClick={() => onClick(item?.id)}
          >
            <Box sx={{ width: "33.3%" }}>
              <Typography
                className="font-14 font-400"
                sx={{ color: "secondary.main" }}
              >
                {item?.submission_title}
              </Typography>
            </Box>
            <Box sx={{ width: "33.3%" }}>
              <Typography
                className="font-14 font-400 text-center"
                sx={{ color: "secondary.main" }}
              >
                {item?.created_at}
              </Typography>
            </Box>
            <Box sx={{ width: "33.3%" }}>
              <Typography
                className="font-14 font-400"
                sx={{ color: "secondary.main", textAlign: "right" }}
              >
                {item?.submission_comment} comments
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AllSubmissions;
