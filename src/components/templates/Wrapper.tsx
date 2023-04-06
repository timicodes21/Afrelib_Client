import { Container } from "@mui/material";
import { NextPage } from "next";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Wrapper: NextPage<IProps> = ({ children }) => {
  return (
    <>
      <Container maxWidth="xl" sx={{ py: 3 }}>
        {children}
      </Container>
    </>
  );
};

export default Wrapper;
