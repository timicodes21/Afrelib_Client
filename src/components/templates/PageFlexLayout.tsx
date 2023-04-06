import React, { ReactNode } from "react";
import styles from "@/styles/Template.module.css";
import { Box } from "@mui/material";

interface IProps {
  children: ReactNode;
  rightContent: ReactNode;
}

const PageFlexLayout: React.FC<IProps> = ({ children, rightContent }) => {
  return (
    <div className={styles.flexLayoutContainer}>
      <div className={styles.leftContainer} style={{ marginTop: "20px" }}>
        {children}
      </div>
      <div className={styles.rightContainer}>
        <Box sx={{ marginTop: "20px", pl: 2 }}>{rightContent}</Box>
      </div>
    </div>
  );
};

export default PageFlexLayout;
