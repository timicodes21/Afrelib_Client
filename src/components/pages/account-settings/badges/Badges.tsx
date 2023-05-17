import { useState } from "react";
import Image from "next/image";

import styles from "./styles.module.css";
import { badgeIcons } from "@/data/badge-icons";
import CustomModal from "@/components/organisms/modals/CustomModal";
import AddNewBadge from "./new-badge/NewBadge";
import { useGlobalContext } from "@/contexts/GlobalContext";

const badges = [
  {
    title: "Class Captain",
    icon: badgeIcons[0],
    rule: "",
  },
  {
    title: "Project Whiz",
    icon: badgeIcons[3],
    rule: "",
  },
  {
    title: "Team Leader",
    icon: badgeIcons[1],
    rule: "",
  },
  {
    title: "Code Whiz",
    icon: badgeIcons[5],
    rule: "",
  },
  {
    title: "Early Submissions",
    icon: badgeIcons[2],
    rule: "",
  },
  {
    title: "Project Whiz",
    icon: badgeIcons[4],
    rule: "",
  },
  {
    title: "Class Captain",
    icon: badgeIcons[5],
    rule: "",
  },
];

const AccountBadges = () => {
  const [showModal, setShowModal] = useState(false);
  const { userDetails } = useGlobalContext();

  const { role } = userDetails;

  return (
    <div className={styles.container}>
      <CustomModal
        open={showModal}
        setOpen={setShowModal}
        width="500px"
        showCloseIcon
      >
        <AddNewBadge />
      </CustomModal>

      {role?.toLowerCase() === "admin" && (
        <div
          className={styles.addBadgeButton}
          onClick={() => setShowModal(true)}
        >
          <Image
            src="/assets/icons/add_badge_icon.svg"
            height={60}
            width={100}
            loading="lazy"
            alt="add"
          />
          <p>Create New Badge</p>
        </div>
      )}

      {badges.map((item, index) => {
        return (
          <div className={styles.badgeContainer} key={index}>
            <Image
              src={item.icon}
              height={60}
              width={100}
              loading="lazy"
              alt="add"
            />
            <p>{item.title}</p>
            <span>For completing 5 classes</span>
          </div>
        );
      })}
    </div>
  );
};

export default AccountBadges;
