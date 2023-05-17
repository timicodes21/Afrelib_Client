import { useState } from "react";
import styles from "./styles.module.css";
import { badgeIcons } from "@/data/badge-icons";
import Image from "next/image";
import { Box, Button, Grid } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import AuthInput from "@/components/atoms/inputFields/AuthInput";

const AddNewBadge = () => {
  const [selectedIcon, setSelectedIcon] = useState("");
  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    //resolver: zodResolver(schema),
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>New Badge</h1>
      </div>

      <div className={styles.formContainer}>
        <Box>
          <Controller
            control={control}
            name="badge_name"
            render={({ field: { onChange, value, onBlur } }) => (
              <AuthInput
                label="Badge Name"
                type="text"
                placeholder="Badge name"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                blackLabel
              />
            )}
          />
        </Box>

        <Box>
          <Controller
            control={control}
            name="badge_rules"
            render={({ field: { onChange, value, onBlur } }) => (
              <AuthInput
                label="Bage Rules"
                type="text"
                placeholder="Badge rules"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                blackLabel
              />
            )}
          />
        </Box>
      </div>

      <div className={styles.badgeIconsContainer}>
        <p>Badge Icon</p>
        <Grid container>
          {badgeIcons.map(item => (
            <Grid item xl={4} lg={4} sm={6} xs={12} key={item} mb={2}>
              <div className={styles.eachIconContainer}>
                <div
                  className={`${styles.badgeIcon} ${
                    selectedIcon === item ? styles.iconSelected : ""
                  }`}
                  onClick={() => setSelectedIcon(item)}
                >
                  <Image
                    src={item}
                    height={60}
                    width={100}
                    loading="lazy"
                    alt="add"
                  />
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className={styles.buttonContainer}>
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default AddNewBadge;
