import {
  panelistCommentSubmission,
  panelistScoreSubmission,
} from "@/api/submission";
import AuthButton from "@/components/atoms/buttons/AuthButton";
import NumberButton from "@/components/atoms/buttons/NumberButton";
import CustomTextArea from "@/components/atoms/inputFields/CustomTextArea";
import { IMAGE_BASE_URL, queryClient, queryKeys } from "@/data/constants";
import { IGetSingleSubmissionResponse } from "@/types/apiResponses";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useMemo, useState } from "react";

interface IProps {
  submission: IGetSingleSubmissionResponse;
  submissionId: number;
}

const SubmissionDetails: React.FC<IProps> = ({ submission, submissionId }) => {
  const [accuracy, setAccuracy] = useState(0);
  const [process, setProcess] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [loading, setLoading] = useState(false);
  const [commetLoading, setCommetLoading] = useState(false);
  const [comment, setComment] = useState("");

  const totalScore = useMemo(
    () => process + accuracy + speed,
    [process, accuracy, speed],
  );

  const handleScore = async () => {
    setLoading(true);
    await panelistScoreSubmission({ score: totalScore }, submissionId);
    setLoading(false);
  };

  const handleComment = async () => {
    setCommetLoading(true);
    await panelistCommentSubmission({ comment }, submissionId);
    queryClient.invalidateQueries([queryKeys.getSingleSubmission]);
    setCommetLoading(false);
    setComment("");
  };

  return (
    <Box sx={{ mt: 1, p: { xs: 2, md: 3 } }}>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Box sx={{ mt: 2 }} className="d-flex items-center">
              <Typography
                className="font-16 font-600"
                sx={{ color: "#172B4D" }}
              >
                Title:
              </Typography>
              <Typography
                className="font-14 font-400"
                sx={{ color: "secondary.main", ml: 2 }}
              >
                {submission?.submission_title ?? ""}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }} className="d-flex items-center">
              <Typography
                className="font-16 font-600"
                sx={{ color: "#172B4D" }}
              >
                URL:
              </Typography>
              <Typography
                className="font-14 font-400"
                sx={{ color: "secondary.main", ml: 2 }}
              >
                <a
                  href={
                    `https://139-162-248-210.ip.linodeusercontent.comi${submission?.submission_url}` ??
                    ""
                  }
                  target="_blank"
                >
                  Enter Url
                </a>
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }} className="d-flex items-center">
              <Typography
                className="font-16 font-600"
                sx={{ color: "#172B4D" }}
              >
                Comment:
              </Typography>
              <Typography
                className="font-14 font-400"
                sx={{ color: "secondary.main", ml: 2 }}
              >
                {submission?.submission_comment ?? ""}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }} className="">
              <Typography
                className="font-16 font-600"
                sx={{ color: "#172B4D" }}
              >
                File:
              </Typography>
            </Box>

            {submission &&
              submission?.submission_url &&
              submission?.submission_url.trim() && (
                <Box
                  className="d-flex items-center justify-between"
                  sx={{
                    background: "#F3F5F6",
                    borderRadius: "4px",
                    p: 2,
                  }}
                >
                  <Typography
                    className="font-14 font-400"
                    sx={{ color: "secondary.main" }}
                  >
                    Submission File
                  </Typography>
                  <a
                    href={`${IMAGE_BASE_URL}${submission?.submission_url}`}
                    download
                    target="_blank"
                  >
                    <Box className="d-flex items-center justify-end pointer">
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
                </Box>
              )}

            <Box sx={{ mt: 3 }} className="d-flex items-center">
              <Typography
                className="font-24 font-600"
                sx={{ color: "#172B4D" }}
              >
                Feedback
              </Typography>
            </Box>
            <Box>
              {Array.isArray(submission?.panelist_feedback) &&
                submission?.panelist_feedback?.map((item, index) => (
                  <Box className="d-flex" key={index}>
                    <Image
                      alt="avatar"
                      src="/assets/icons/avatar_mentor.svg"
                      width={48}
                      height={48}
                    />
                    <Box sx={{ ml: 2 }}>
                      <Typography
                        sx={{ color: "#172B4D" }}
                        className="font-16 font-600"
                      >
                        {`${item?.panelist?.first_name} ${item?.panelist?.last_name}`}
                      </Typography>
                      <Typography
                        sx={{ color: "secondary.main" }}
                        className="font-14 font-400"
                      >
                        {item?.comment}
                      </Typography>
                    </Box>
                  </Box>
                ))}
            </Box>
            <Box className="d-flex">
              <Image
                alt="avatar"
                src="/assets/icons/avatar_mentor.svg"
                width={48}
                height={48}
              />
              <Box sx={{ mx: 1, flexGrow: 1 }}>
                <CustomTextArea
                  style={{
                    width: "100%",
                    marginLeft: "10px",
                    background: "#FFF !important",
                  }}
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  border
                  background="#FFFFFF"
                />
              </Box>
              <Box sx={{ alignSelf: "flex-end" }}>
                <AuthButton
                  onClick={handleComment}
                  size="small"
                  type="button"
                  notFullWidth
                  loading={commetLoading}
                  disabled={comment.trim().length === 0}
                >
                  Comment
                </AuthButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ mt: 3 }} className="d-flex items-center">
              <Typography
                className="font-24 font-600"
                sx={{ color: "#172B4D" }}
              >
                Evaluation
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }} className="d-flex">
              <Typography
                className="font-16 font-600"
                sx={{ color: "#172B4D" }}
              >
                Accuracy
              </Typography>
              <NumberButton
                number={20}
                onClick={number => setAccuracy(number)}
                ml
                active={accuracy === 20}
              />
              <NumberButton
                number={40}
                onClick={number => setAccuracy(number)}
                ml
                active={accuracy === 40}
              />
              <NumberButton
                number={60}
                onClick={number => setAccuracy(number)}
                ml
                active={accuracy === 60}
              />
              <NumberButton
                number={80}
                onClick={number => setAccuracy(number)}
                ml
                active={accuracy === 80}
              />
              <NumberButton
                number={100}
                onClick={number => setAccuracy(number)}
                ml
                active={accuracy === 100}
              />
            </Box>
            <Box sx={{ mt: 2 }} className="d-flex">
              <Typography
                className="font-16 font-600"
                sx={{ color: "#172B4D" }}
              >
                Process
              </Typography>
              <NumberButton
                number={20}
                onClick={number => setProcess(number)}
                ml
                active={process === 20}
              />
              <NumberButton
                number={40}
                onClick={number => setProcess(number)}
                ml
                active={process === 40}
              />
              <NumberButton
                number={60}
                onClick={number => setProcess(number)}
                ml
                active={process === 60}
              />
              <NumberButton
                number={80}
                onClick={number => setProcess(number)}
                ml
                active={process === 80}
              />
              <NumberButton
                number={100}
                onClick={number => setProcess(number)}
                ml
                active={process === 100}
              />
            </Box>
            <Box sx={{ mt: 2 }} className="d-flex">
              <Typography
                className="font-16 font-600"
                sx={{ color: "#172B4D" }}
              >
                Speed
              </Typography>
              <NumberButton
                number={20}
                onClick={number => setSpeed(number)}
                ml
                active={speed === 20}
              />
              <NumberButton
                number={40}
                onClick={number => setSpeed(number)}
                ml
                active={speed === 40}
              />
              <NumberButton
                number={60}
                onClick={number => setSpeed(number)}
                ml
                active={speed === 60}
              />
              <NumberButton
                number={80}
                onClick={number => setSpeed(number)}
                ml
                active={speed === 80}
              />
              <NumberButton
                number={100}
                onClick={number => setSpeed(number)}
                ml
                active={speed === 100}
              />
            </Box>
            <Typography
              sx={{ color: "secondary.main", mt: 4 }}
              className="font-20 font-400"
            >
              Total Score : {totalScore}
            </Typography>
            <Box sx={{ mt: 4 }}>
              <AuthButton
                type="button"
                onClick={handleScore}
                loading={loading}
                disabled={accuracy === 0 || process === 0 || speed === 0}
              >
                Submit
              </AuthButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SubmissionDetails;
