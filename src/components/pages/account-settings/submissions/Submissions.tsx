import { useState } from "react";
import { Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import Carousel from "react-simply-carousel";

import styles from "./styles.module.css";
import SubmissionCard from "./SubmissionCard";

import { data, submissionType } from "../../../../data/submissions";

const AccountSubmissions = () => {
  const [count, setCount] = useState(0);
  const [submissions, setSubmissions] = useState<submissionType[]>([...data]);
  const [activeClass, setActiveClass] = useState("");

  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextButton = () => {
    setActiveClass("prev");
    setCount(prev => prev + 1);
  };

  const handlePrevButton = () => {
    setActiveClass("next");
    setCount(prev => prev - 1);
  };

  const handleAnimationEnd = () => {
    if (activeClass === "prev") {
      shiftNext([...submissions]);
    } else if (activeClass === "next") {
      shiftPrev([...submissions]);
    }
    setActiveClass("");
  };

  const shiftPrev = (copy: any[]) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setSubmissions(copy);
  };

  const shiftNext = (copy: any[]) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setSubmissions(copy);
  };

  const checkIsEvenNumber = (n: number) => {
    return n % 2 == 0;
  };

  return (
    <Box className={styles.container}>
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
              item={item}
              isEven={checkIsEvenNumber(item.index)}
            />
          );
        })}
      </Carousel>
    </Box>
  );
};

export default AccountSubmissions;

// import { useState } from "react";
// import { Box } from "@mui/material";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

// import styles from "./styles.module.css";
// import SubmissionCard from "./SubmissionCard";

// import { data, submissionType } from "../../../../data/submissions";

// const AccountSubmissions = () => {
//   const [count, setCount] = useState(0);
//   const [submissions, setSubmissions] = useState<submissionType[]>([...data]);
//   const [activeClass, setActiveClass] = useState("");

//   const handleNextButton = () => {
//     setActiveClass("prev");
//     setCount(prev => prev + 1);
//   };

//   const handlePrevButton = () => {
//     setActiveClass("next");
//     setCount(prev => prev - 1);
//   };

//   const handleAnimationEnd = () => {
//     if (activeClass === "prev") {
//       shiftNext([...submissions]);
//     } else if (activeClass === "next") {
//       shiftPrev([...submissions]);
//     }
//     setActiveClass("");
//   };

//   const shiftPrev = (copy: any[]) => {
//     let lastcard = copy.pop();
//     copy.splice(0, 0, lastcard);
//     setSubmissions(copy);
//   };

//   const shiftNext = (copy: any[]) => {
//     let firstcard = copy.shift();
//     copy.splice(copy.length, 0, firstcard);
//     setSubmissions(copy);
//   };

//   const checkIsEvenNumber = (n: number) => {
//     return n % 2 == 0;
//   };

//   return (
//     <Box className={styles.container}>
//       {count !== submissions.length - 3 && (
//         <Box
//           className={`${styles.nextButton} ${styles.carouselButton}`}
//           onClick={handleNextButton}
//         >
//           <NavigateNextIcon />
//         </Box>
//       )}

//       {count !== 0 && (
//         <Box
//           className={`${styles.prevButton} ${styles.carouselButton}  `}
//           onClick={handlePrevButton}
//         >
//           <NavigateBeforeIcon />
//         </Box>
//       )}

//       <ul
//         onAnimationEnd={handleAnimationEnd}
//         className={`${styles.carousel} ${
//           activeClass === "next"
//             ? styles.next
//             : activeClass === "prev"
//             ? styles.prev
//             : ""
//         }`}
//         style={{
//           width: `${258 * submissions.length}px`,
//         }}
//       >
//         {submissions.map((item: submissionType, index: number) => {
//           return (
//             <SubmissionCard
//               key={index}
//               item={item}
//               isEven={checkIsEvenNumber(item.index)}
//             />
//           );
//         })}
//       </ul>
//     </Box>
//   );
// };

// export default AccountSubmissions;
