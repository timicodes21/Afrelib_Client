import { useState } from "react";
import { Box, Button } from "@mui/material";

import styles from "./styles.module.css";

import { useChatMessages, useRemoveChatMember } from "@/hooks/chat/useChat";
import { useMessagesContext } from "@/contexts/MessagesContext";
import CustomModal from "@/components/organisms/modals/CustomModal";
import DeleteWrapper from "@/components/molecules/wrappers/DeleteWrapper";
import { chatMemberType } from "@/types/messages";
import { useGlobalContext } from "@/contexts/GlobalContext";

interface IProps {
  memberId: number | string;
  action: (userId: string | number) => void;
  muiBtnColor: "error" | "primary" | "secondary" | "warning" | "success";
  btnText: string;
  member: chatMemberType;
  showBtn: boolean;
}

const EachChatMember = ({
  memberId,
  action,
  muiBtnColor,
  btnText,
  showBtn,
  member,
}: IProps) => {
  const { userDetails } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const { handleRemoveMember, removingMember } = useRemoveChatMember();
  const { chat } = useMessagesContext();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
      mt={2}
    >
      <CustomModal open={open} setOpen={setOpen} showCloseIcon maxWidth="320px">
        <DeleteWrapper
          text={`Are you sure you want to remove this member?`}
          onCancel={() => setOpen(false)}
          onDelete={() => action(memberId)}
          deleteBtnText="Yes"
          cancelBtnText="No"
          loading={removingMember}
        />
      </CustomModal>

      <div className={styles.memberInformation}>
        <div className={styles.memberAvatar}>
          <div
            className={styles.avatarImage}
            style={{
              background: `url(${
                member.avatar ||
                "https://api.dicebear.com/6.x/bottts/svg?seed=Sammy"
              })`,
            }}
          />
        </div>

        <div className={styles.memberDetails}>
          {userDetails.userId === member.userId ? (
            <h1>You</h1>
          ) : (
            <h1>
              {member.firstName} {member.lastName}
            </h1>
          )}

          <p>{member.email}</p>
        </div>
      </div>

      {showBtn && (
        <div className={styles.membersAction}>
          <Button
            color={muiBtnColor}
            size="small"
            onClick={() => setOpen(true)}
          >
            {btnText}
          </Button>
        </div>
      )}
    </Box>
  );
};

export default EachChatMember;
