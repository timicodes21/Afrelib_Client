import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";

import { avatarTypes, avatarNames } from "@/data/avatars";
import CustomSelect from "../../../atoms/inputFields/CustomSelect";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useUpdateUserDetails } from "@/hooks/user/useUser";

import styles from "./styles.module.css";

interface iProps {
  closeModal: () => void;
}

const Avatars = ({ closeModal }: iProps) => {
  const { updating, handleUpdate } = useUpdateUserDetails();
  const [type, setType] = useState(avatarTypes[0].value);
  const [selectedAvatar, setSelectedAvatar] = useState<{
    name: string;
    value: string;
  } | null>(null);

  const handleOnChange = (value: string) => {
    setType(value);
  };

  const options = avatarTypes.map(item => ({
    label: item.name,
    value: item.value,
  }));

  const udpateUserAvatar = () => {
    const avatarUrl = `https://api.dicebear.com/6.x/${type}/svg?seed=${selectedAvatar?.value}`;
    const update = {
      profile_image: avatarUrl,
    };
    handleUpdate(update);
  };

  return (
    <Box className={styles.container}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 15px",
        }}
      >
        <Typography>Choose Avatar</Typography>
        <IconButton onClick={closeModal}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box
        sx={{
          padding: "0 15px",
        }}
      >
        <CustomSelect
          options={options}
          onChange={e =>
            handleOnChange(typeof e?.value === "string" ? e?.value : "")
          }
          label=""
          placeholder=""
          value={options.find(item => item.value === type)}
        />
      </Box>

      <Box className={styles.avatarList}>
        {avatarNames.map((item, index) => {
          return (
            <Box
              key={index}
              className={styles.eachAvatar}
              onClick={() => setSelectedAvatar(item)}
              sx={{
                border:
                  `${type}-${item.value}` === `${type}-${selectedAvatar?.value}`
                    ? "3px solid #0065B5"
                    : "3px solid #f4f4f4",
              }}
            >
              <img
                src={`https://api.dicebear.com/6.x/${type}/svg?seed=${item.value}`}
                alt="avatar"
              />
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          disabled={!selectedAvatar}
          onClick={udpateUserAvatar}
          sx={{
            width: "80%",
          }}
          variant="contained"
        >
          {updating ? (
            <CircularProgress sx={{ color: "#FFF" }} size={25} />
          ) : (
            "Change Avatar"
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default Avatars;
