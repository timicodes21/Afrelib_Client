import React from "react";
import styles from "@/styles/Molecules.module.css";
import { FiSearch } from "react-icons/fi";
import { Box } from "@mui/material";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  darkBackground?: boolean;
}

const SearchInput: React.FC<IProps> = ({ darkBackground, ...rest }) => {
  return (
    <Box
      className={styles.searchIconWrapper}
      sx={{ background: darkBackground ? "#F3F4F6" : "#FFF" }}
    >
      <FiSearch className="font-18" style={{ color: "#66A3D3" }} />
      <input type="text" {...rest} />
    </Box>
  );
};

export default SearchInput;
