import { useState } from "react";

import GroupCheckBox from "@/components/atoms/inputFields/GroupCheckBox";
import styles from "./styles.module.css";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  LinearProgress,
  Typography,
} from "@mui/material";

interface iProps {
  addMember?: (id: string) => void;
  removeMember?: (id: string) => void;
  members?: string[]; //array of members that have been added to the chat
  users?: { name: string; id: string | number }[]; //list of students, mentors or panelists
  control?: any;
  setValue?: any;
  loadingUsers: boolean;
}

const SelectChatMembers = ({
  members,
  users,
  control,
  setValue,
  loadingUsers,
}: iProps) => {
  const [checkAll, setCheckAll] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setCheckAll(event.target.checked);
    if (isChecked) {
      return setValue("members", users && users.map(item => item.id));
    } else {
      setValue("members", []);
    }
  };

  return (
    <div className={styles.container}>
      {loadingUsers ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress sx={{ color: "#213F7D" }} />
        </Box>
      ) : (
        <>
          <FormControl sx={{ marginTop: "0.75rem" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkAll}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                  size="small"
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontFamily: "Nunito",
                    lineHeight: "24px",
                    fontWeight: 700,
                    fontStyle: "normal",
                    color: "#353F50",
                  }}
                >
                  Select All
                </Typography>
              }
            />
          </FormControl>

          <GroupCheckBox
            control={control}
            options={users || []}
            disabled={false}
            row={false}
            label=""
            optionColor="#353F50"
            name="members"
          />
        </>
      )}
    </div>
  );
};

export default SelectChatMembers;
