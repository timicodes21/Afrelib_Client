import { useGetAllUsers } from "@/hooks/admin/useAdminUsers";
import SelectChatMembers from "./SelectMembers";

interface iProps {
  control: any;
  name: string;
  setValue: any;
}

const ListOfStudents = ({ control, name, setValue }: iProps) => {
  const {
    allUsers,
    status,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetAllUsers();

  const students = isLoading
    ? []
    : allUsers.filter(item => item.role_name === "Student");

  const users = students.map(item => {
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

export default ListOfStudents;
