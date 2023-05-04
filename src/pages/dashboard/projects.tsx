import ProjectsPage from "@/components/pages/dashboard/ProjectsPage";
import PanelistProjectPage from "@/components/pages/panelist/projects/PanelistProjectPage";
import { useGlobalContext } from "@/contexts/GlobalContext";
import React, { useCallback } from "react";

const Projects = () => {
  const {
    userDetails: { role },
  } = useGlobalContext();
  // render project page based on user role Students, Panelist and Mentor
  const RenderPage = useCallback(() => {
    switch (role) {
      case "Student":
        return <ProjectsPage />;
      case "Panelist":
        return <PanelistProjectPage />;
      case "Mentor":
        return <ProjectsPage />;
      default:
        return <ProjectsPage />;
    }
  }, [role]);

  return RenderPage();
};

export default Projects;
