import React, { useRef } from "react";
import styles from "@/styles/Molecules.module.css";
import { Typography } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import CustomModal from "@/components/organisms/modals/CustomModal";
import { useModal } from "@/hooks/utility";
import NotificationPage from "@/components/pages/dashboard/NotificationPage";
import CustomDrawer from "../../organisms/drawer/CustomDrawer";
import { useDrawer } from "@/hooks/utility";
import { Box } from "@mui/material";
import { BiMenuAltRight } from "react-icons/bi";
import {
  adminDashboardLinks,
  bottomDashboardLinks,
  dashboardLinks,
} from "@/data/dashboard";
import LinkWrapper from "../wrappers/LinkWrapper";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";
import DeleteWrapper from "../wrappers/DeleteWrapper";
import { clearLocalStorage } from "@/utils/helpers";
import { LOGIN } from "@/data/constants";

interface IProps {
  headerText: string;
}

const PageHeader: React.FC<IProps> = ({ headerText }) => {
  const {
    open: drawerOpen,
    setOpen: setDrawerOpen,
    openDrawer,
    closeDrawer,
  } = useDrawer();
  const { open, setOpen, openModal, closeModal } = useModal();

  const {
    openModal: openLogoutModal,
    closeModal: closeLogoutModal,
    open: logoutOpen,
    setOpen: setLogoutOpen,
  } = useModal();

  const router = useRouter();

  const links = router.pathname.startsWith("/admin")
    ? adminDashboardLinks
    : dashboardLinks;

  // The navbar links for mobile appears here

  return (
    <div>
      <div className={styles.pageHeaderContainer}>
        <Typography
          sx={{ color: "secondary.main" }}
          className="font-24 font-600"
        >
          {headerText}
        </Typography>

        <div className={styles.pageHeaderRightContainer}>
          <div className={styles.searchIconWrapper}>
            <FiSearch className="font-18" style={{ color: "#66A3D3" }} />
            <input type="text" placeholder="Search" />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <Image
              src="/assets/icons/notification_icon.svg"
              width={22}
              height={30}
              alt="icon"
              className="pointer"
              onClick={openModal}
            />
          </div>
          <Box className={styles.mobileIconContainer} sx={{ ml: 2 }}>
            <BiMenuAltRight
              className="font-32 font-800 pointer"
              style={{ color: "#353F50" }}
              onClick={openDrawer}
            />
          </Box>
        </div>
      </div>
      <CustomModal
        open={logoutOpen}
        setOpen={setLogoutOpen}
        showCloseIcon
        maxWidth="320px"
      >
        <DeleteWrapper
          text="Are you sure you want to log out?"
          onCancel={closeLogoutModal}
          onDelete={() => {
            clearLocalStorage();
            router.push(LOGIN);
          }}
          deleteBtnText="Yes"
          cancelBtnText="No"
        />
      </CustomModal>
      <CustomModal open={open} setOpen={setOpen} showCloseIcon={false}>
        <NotificationPage />
      </CustomModal>
      {/* Tab and Mobile Screens Drawer */}
      <CustomDrawer open={drawerOpen} setOpen={setDrawerOpen} anchor="left">
        <Box sx={{ p: 2 }}>
          <div className={styles.links_wrapper}>
            <Box className="d-flex justify-end" sx={{ mb: 2 }}>
              <GrClose
                className="font-20 font-800 pointer"
                style={{ color: "#353F50" }}
                onClick={closeDrawer}
              />
            </Box>
            {links.map((item, index) => (
              <LinkWrapper
                key={index}
                link={item?.link}
                src={item.icon}
                activeSrc={item.activeIcon}
              >
                {item.name}
              </LinkWrapper>
            ))}
            <div className={styles.links_wrapper}></div>
            {bottomDashboardLinks.map((item, index) => (
              <LinkWrapper
                key={index}
                link={item?.link}
                src={item.icon}
                activeSrc={item.activeIcon}
                onClick={
                  item?.name === "Logout"
                    ? () => {
                        closeDrawer();
                        openLogoutModal();
                      }
                    : () => {}
                }
              >
                {item.name}
              </LinkWrapper>
            ))}
          </div>
        </Box>
      </CustomDrawer>
    </div>
  );
};

export default PageHeader;
