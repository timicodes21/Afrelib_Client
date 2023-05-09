import { Button } from "@mui/material";

import EachChatMember from "./Each-Member";
import styles from "./styles.module.css";
import { useMessagesContext } from "@/contexts/MessagesContext";
import { useRemoveChatMember } from "@/hooks/chat/useChat";

const ChatMembers = () => {
  const { openChatModal, chat } = useMessagesContext();
  const { handleRemoveMember, removingMember } = useRemoveChatMember();

  const removeMember = (memberId: string | number) => {
    handleRemoveMember(memberId, chat?.chatId || 0);
  };
  const members = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className={styles.container}>
      <div className={styles.usersContainer}>
        {members.map(item => (
          <EachChatMember
            memberId={item}
            key={item}
            action={removeMember}
            muiBtnColor="error"
            btnText="Remove User"
          />
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Button onClick={() => openChatModal("add-members")}>
          Add New User
        </Button>
      </div>
    </div>
  );
};

export default ChatMembers;
