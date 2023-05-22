import { Button } from "@mui/material";

import EachChatMember from "./Each-Member";
import styles from "./styles.module.css";
import { useMessagesContext } from "@/contexts/MessagesContext";
import { useChatMembers, useRemoveChatMember } from "@/hooks/chat/useChat";
import { chatMemberType } from "@/types/messages";
import { useGlobalContext } from "@/contexts/GlobalContext";

const ChatMembers = () => {
  const { userDetails } = useGlobalContext();
  const { chatMembers } = useMessagesContext();
  const { openChatModal, chat } = useMessagesContext();
  const { handleRemoveMember, removingMember } = useRemoveChatMember();
  // const { chatMembers, fetchingMembers, data } = useChatMembers(
  //   chat?.chatId ?? 0,
  // );

  const removeMember = (memberId: string | number) => {
    handleRemoveMember(memberId, chat?.chatId || 0);
  };

  const role = userDetails ? userDetails.role : "";

  return (
    <div className={styles.container}>
      <div className={styles.usersContainer}>
        {chatMembers?.map((member: chatMemberType) => (
          <EachChatMember
            memberId={member.userId}
            key={member.id}
            member={member}
            action={removeMember}
            muiBtnColor="error"
            btnText="Remove User"
            showBtn={role === "admin"}
          />
        ))}
      </div>

      {role === "admin" && (
        <div className={styles.buttonContainer}>
          <Button onClick={() => openChatModal("add-members")}>
            Add New User
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChatMembers;
