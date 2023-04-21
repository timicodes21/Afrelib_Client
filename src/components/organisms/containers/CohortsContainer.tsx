import DashboardCard from "@/components/molecules/cards/DashboardCard";
import CohortOptionsList from "@/components/molecules/lists/CohortOptionsList";
import { Box, Grid, Popover, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { FiMoreVertical } from "react-icons/fi";

interface IProps {
  header: string;
  children: ReactNode;
  onEdit: () => void;
  onAssign: () => void;
  onDelete: () => void;
  onUpdate: () => void;
  teams: number;
  students: number;
  panelists: number;
  mentors: number;
  viewTeams: () => void;
  viewStudents: () => void;
  viewMentors: () => void;
  viewPanelists: () => void;
}

const CohortsContainer: React.FC<IProps> = ({
  header,
  children,
  onEdit,
  onAssign,
  onDelete,
  teams,
  students,
  mentors,
  panelists,
  onUpdate,
  viewMentors,
  viewTeams,
  viewPanelists,
  viewStudents,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<SVGElement | null>(null);

  const handleClick = (event: React.MouseEvent<SVGElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      sx={{
        p: 2,
        background: "#FBFAFA",
        borderRadius: "10px",
        boxShadow:
          "0px 1px 3px rgba(16, 24, 40, 0.15), 0px 1px 2px rgba(16, 24, 40, 0.1)",
      }}
    >
      <Box className="d-flex justify-between items-center">
        <Typography
          className="font-16 font-600"
          sx={{ color: "secodary.main" }}
        >
          {header}
        </Typography>
        <Box>
          <FiMoreVertical
            style={{ color: "#353F50" }}
            className="font-18 font-500 pointer"
            aria-describedby={id}
            onClick={handleClick}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <CohortOptionsList
              onEdit={() => {
                handleClose();
                onEdit();
              }}
              onAssign={() => {
                handleClose();
                onAssign();
              }}
              onDelete={() => {
                handleClose();
                onDelete();
              }}
              onUpdate={() => {
                handleClose();
                onUpdate();
              }}
            />
          </Popover>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={6} md={3}>
            <DashboardCard
              background="#DEF1FF"
              value={teams.toString()}
              textColor="#0072C7"
              title="No. of Teams"
              height="70px"
              onClick={viewTeams}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <DashboardCard
              background="#EFE3FF"
              value={students.toString()}
              textColor="#5C0BC9"
              title="No. of Students"
              height="70px"
              onClick={viewStudents}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <DashboardCard
              background="#FFF9E3"
              value={mentors.toString()}
              textColor="#E4B300"
              title="No. of Mentors"
              height="70px"
              onClick={viewMentors}
            />
          </Grid>{" "}
          <Grid item xs={6} md={3}>
            <DashboardCard
              background="#E3FFF7"
              value={panelists.toString()}
              textColor="#02C08A"
              title="No. of Panelists"
              height="70px"
              onClick={viewPanelists}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CohortsContainer;
