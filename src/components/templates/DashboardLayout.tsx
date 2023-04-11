import React, { ReactNode } from "react";
import styles from "@/styles/Dashboard.module.css";
import Image from "next/image";
import {
  adminDashboardLinks,
  bottomDashboardLinks,
  dashboardLinks,
} from "@/data/dashboard";
import LinkWrapper from "../molecules/wrappers/LinkWrapper";
import { useRouter } from "next/router";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { useModal } from "@/hooks/utility";
import CustomModal from "../organisms/modals/CustomModal";
import DeleteWrapper from "../molecules/wrappers/DeleteWrapper";
import { LOGIN } from "@/data/constants";
import { clearLocalStorage } from "@/utils/helpers";

interface IProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<IProps> = ({ children }) => {
  const router = useRouter();

  const links = router.pathname.startsWith("/admin")
    ? adminDashboardLinks
    : dashboardLinks;

  console.log("pathname", router.pathname);

  useProtectedRoute();

  const { openModal, closeModal, open, setOpen } = useModal();

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div style={{ margin: "20px" }}>
          <div>
            <Image
              src="/assets/icons/logo.svg"
              height={60}
              width={100}
              loading="lazy"
              alt="logo"
            />
            <div className={styles.links_wrapper}>
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
            </div>
          </div>

          <div className={styles.links_wrapper}>
            {bottomDashboardLinks.map((item, index) => (
              <LinkWrapper
                key={index}
                link={item?.link}
                src={item.icon}
                activeSrc={item.activeIcon}
                onClick={item?.name === "Logout" ? openModal : () => {}}
              >
                {item.name}
              </LinkWrapper>
            ))}
          </div>
          <CustomModal
            open={open}
            setOpen={setOpen}
            showCloseIcon
            maxWidth="320px"
          >
            <DeleteWrapper
              text="Are you sure you want to log out?"
              onCancel={closeModal}
              onDelete={() => {
                clearLocalStorage();
                router.push(LOGIN);
              }}
              deleteBtnText="Yes"
              cancelBtnText="No"
            />
          </CustomModal>
        </div>
      </div>
      <div className={styles.outlet}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
