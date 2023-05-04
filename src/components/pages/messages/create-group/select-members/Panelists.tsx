import { useGetAllUsers } from "@/hooks/admin/useAdminUsers";
import SelectChatMembers from "./SelectMembers";

interface iProps {
  control: any;
  name: string;
  setValue: any;
}

const ListOfPanelists = ({ control, name, setValue }: iProps) => {
  const {
    allUsers,
    status,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetAllUsers();

  const panelists = isLoading
    ? []
    : allUsers.filter(item => item.role_name === "Panelist");

  const users = panelists.map(item => {
    return {
      id: item.id,
      name: `${item.first_name} ${item.last_name}`,
    };
  });

  return (
    <>
      <SelectChatMembers
        control={control}
        users={users}
        setValue={setValue}
        loadingUsers={isLoading}
      />
    </>
  );
};

export default ListOfPanelists;
