import { useMessagesContext } from "@/contexts/MessagesContext";
import EachChatMember from "./Each-Member";
import styles from "./styles.module.css";
import { useRemoveChatMember } from "@/hooks/chat/useChat";
import { useGetAllUsers } from "@/hooks/admin/useAdminUsers";

const AddChatMembers = () => {
  const members = [1, 2, 3, 4, 5, 6];

  const { chat } = useMessagesContext();
  const {
    allUsers,
    status,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetAllUsers();

  const addMember = (memberId: string | number) => {
    // handleRemoveMember(memberId, chat?.chatId || 0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.addUsersContainer}>
        {/* {members.map(item => (
          <EachChatMember
            memberId={item}
            key={item}
            action={addMember}
            muiBtnColor="success"
            btnText="Add User"
          />
        ))} */}
      </div>
    </div>
  );
};

export default AddChatMembers;
