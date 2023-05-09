import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "@/styles/Dashboard.module.css";
import { Box, Typography } from "@mui/material";
import { BsChevronRight } from "react-icons/bs";
import Image from "next/image";

interface IProps {
  children: ReactNode;
  link: string;
  src: string;
  activeSrc: string;
  onClick?: () => void;
}

const LinkWrapper: React.FC<IProps> = ({
  children,
  link,
  src,
  activeSrc,
  onClick,
}) => {
  const { pathname } = useRouter();
  return (
    <Link
      href={link}
      className={styles.link_container}
      style={{
        background:
          pathname === link
            ? "linear-gradient(90deg, rgba(20, 136, 204, 0.88) 0%, #2B32B2 100%)"
            : "",
      }}
      onClick={onClick ? onClick : () => {}}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image
          src={pathname === link ? activeSrc : src}
          alt="icon"
          width={20}
          height={20}
        />
        <Typography
          className="font-14 font-500"
          sx={{
            color: pathname === link ? "info.main" : "primary.light",
            ml: 2,
          }}
        >
          {children}
        </Typography>
      </Box>
      <BsChevronRight color="#0065B5" className="font-16 font-700" />
    </Link>
  );
};

export default LinkWrapper;
