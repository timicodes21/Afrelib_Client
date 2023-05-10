import { useState } from "react";
import { Box, Button } from "@mui/material";

import styles from "./styles.module.css";

import { useChatMessages, useRemoveChatMember } from "@/hooks/chat/useChat";
import { useMessagesContext } from "@/contexts/MessagesContext";
import CustomModal from "@/components/organisms/modals/CustomModal";
import DeleteWrapper from "@/components/molecules/wrappers/DeleteWrapper";

interface IProps {
  memberId: number | string;
  action: (userId: string | number) => void;
  muiBtnColor: "error" | "primary" | "secondary" | "warning" | "success";
  btnText: string;
}

const EachChatMember = ({ memberId, action, muiBtnColor, btnText }: IProps) => {
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
              background: `url("https://api.dicebear.com/6.x/adventurer/svg?seed=Bella")`,
            }}
          />
        </div>

        <div className={styles.memberDetails}>
          <h1>David Markinde</h1>
          <p>david&markinde@gmail.com</p>
        </div>
      </div>

      <div className={styles.membersAction}>
        <Button color={muiBtnColor} size="small" onClick={() => setOpen(true)}>
          {btnText}
        </Button>
      </div>
    </Box>
  );
};

export default EachChatMember;
