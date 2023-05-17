import { useState } from "react";
import { Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import Carousel from "react-simply-carousel";

import styles from "./styles.module.css";
import SubmissionCard from "./SubmissionCard";

import { data, submissionType } from "../../../../data/submissions";
import CustomModal from "@/components/organisms/modals/CustomModal";
import StudentSubmissionDetails from "./detail/SubmissionDetail";

const AccountSubmissions = () => {
  const [submissions, setSubmissions] = useState<submissionType[]>([...data]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [detailModal, setDetailModal] = useState(false);
  const [selectedSubmission, setSelectedSubmission] =
    useState<submissionType | null>(null);

  const checkIsEvenNumber = (n: number) => {
    return n % 2 == 0;
  };

  const showSubmissionDetail = (submission: submissionType) => {
    setSelectedSubmission(submission);
    setDetailModal(true);
  };

  return (
    <Box className={styles.container}>
      <CustomModal
        open={detailModal}
        setOpen={setDetailModal}
        width="682px"
        showCloseIcon
      >
        <StudentSubmissionDetails submission={selectedSubmission} />
      </CustomModal>
      <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            // width: "100%",
            width: `${258 * submissions.length}px`,
            justifyContent: "space-between",
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "blue",
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: (
            <Box className={`${styles.nextButton} ${styles.carouselButton}`}>
              <NavigateNextIcon />
            </Box>
          ),
          style: {
            background: "none",
            border: "none",
          },
        }}
        backwardBtnProps={{
          children: (
            <Box className={`${styles.prevButton} ${styles.carouselButton}  `}>
              <NavigateBeforeIcon />
            </Box>
          ),
          style: {
            background: "none",
            border: "none",
            display: "none",
          },
        }}
        speed={400}
      >
        {submissions.map((item: submissionType, index: number) => {
          return (
            <SubmissionCard
              key={index}
              submission={item}
              showDetails={showSubmissionDetail}
              isEven={checkIsEvenNumber(item.index)}
            />
          );
        })}
      </Carousel>
    </Box>
  );
};

export default AccountSubmissions;
