import { useState } from "react";
import AuthInput from "@/components/atoms/inputFields/AuthInput";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, CircularProgress } from "@mui/material";

import styles from "./styles.module.css";
import SelectChatMembers from "./select-members/SelectMembers";
import SearchInput from "@/components/atoms/inputFields/SearchInput";
import ListOfStudents from "./select-members/Students";
import ListOfMentors from "./select-members/Mentors";
import ListOfPanelists from "./select-members/Panelists";
import { useAdminChat } from "@/hooks/admin/useAdminChat";
import { zodResolver } from "@hookform/resolvers/zod";

import { CreateGroupChatFormValues } from "@/types/formValues";
import InputErrorText from "@/components/atoms/texts/InputErrorText";

interface iProps {
  closeModal: () => void;
}

const memebersButtons = ["Students", "Mentors", "Panelists"];

const CreateNewMessageGroup = ({ closeModal }: iProps) => {
  const [membersType, setMemberType] = useState("Students");
  const { createGroupChat, creatingGroupChat, groupChatSchema } =
    useAdminChat();
  const {
    control,
    setValue,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<CreateGroupChatFormValues>({
    mode: "onBlur",
    resolver: zodResolver(groupChatSchema),
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>New Group</h1>
        <p>Enter a group name and select users to add to group</p>
      </div>

      <div className={styles.groupNameInput}>
        <Box>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value, onBlur } }) => (
              <AuthInput
                label="Group Name"
                type="text"
                placeholder="Group name"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                blackLabel
              />
            )}
          />
          {errors?.name && (
            <InputErrorText>{errors?.name?.message ?? ""}</InputErrorText>
          )}
        </Box>
      </div>

      <nav className={styles.selectMembersNav}>
        <div className={styles.navSearchInputContainer}>
          <SearchInput />
        </div>

        <div className={styles.navButtonsContainer}>
          {memebersButtons.map(item => (
            <Button
              key={item}
              sx={{
                border: membersType === item ? "1px solid #a8d6ef" : "none",
              }}
              onClick={() => setMemberType(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </nav>

      <div className={styles.memebersListContainer}>
        {membersType === "Students" && (
          <ListOfStudents
            control={control}
            name="memebers"
            setValue={setValue}
          />
        )}

        {membersType === "Mentors" && (
          <ListOfMentors
            control={control}
            name="memebers"
            setValue={setValue}
          />
        )}

        {membersType === "Panelists" && (
          <ListOfPanelists
            control={control}
            name="memebers"
            setValue={setValue}
          />
        )}

        {errors?.members && (
          <InputErrorText>{errors?.members?.message ?? ""}</InputErrorText>
        )}
      </div>

      <div className={styles.buttonContainer}>
        <Button onClick={handleSubmit(createGroupChat)}>
          {creatingGroupChat ? (
            <CircularProgress sx={{ color: "#FFF" }} size={25} />
          ) : (
            "Create Group"
          )}
        </Button>
      </div>
    </div>
  );
};

export default CreateNewMessageGroup;
