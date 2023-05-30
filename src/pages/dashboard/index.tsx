import DashboardPage from "@/components/pages/dashboard/DashboardPage";
import MentorDashboardPage from "@/components/pages/mentors/dashboard/MentorDashboardPage";
import PanelistDashboardPage from "@/components/pages/panelist/dashboard/PanelistDashboardPage";
import { useGlobalContext } from "@/contexts/GlobalContext";
import React, { useCallback } from "react";

const DashboardHome = () => {
  const {
    userDetails: { role },
  } = useGlobalContext();
  // render project page based on user role Students, Panelist and Mentor

  const RenderPage = useCallback(() => {
    switch (role) {
      case "Student":
        return <DashboardPage />;
      case "Panelist":
        return <PanelistDashboardPage />;
      case "Mentor":
        return <MentorDashboardPage />;
      default:
        return <DashboardPage />;
    }
  }, [role]);

  return RenderPage();
};

export default DashboardHome;
