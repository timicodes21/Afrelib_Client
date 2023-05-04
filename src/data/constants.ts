import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      useErrorBoundary: false,
      refetchOnWindowFocus: false,
    },
  },
});

// links for students
export const DASHBOARD = "/dashboard";
export const CLASSROOM = "/dashboard/classroom";
export const MESSAGES = "/dashboard/messages";
export const RESOURCES = "/dashboard/resources";
export const PROJECTS = "/dashboard/projects";
export const MENTEES = "/dashboard/mentees";
export const ACCOUNTS_SETTINGS = "/dashboard/accounts_settings";
export const SUPPORT = "/dashboard/support";
export const LOGIN = "/login";

// Links for Panelists

// admin links
export const ADMIN_DASHBOARD = "/admin/dashboard";
export const ADMIN_USER = "/admin/dashboard/users";
export const ADMIN_COHORTS = "/admin/dashboard/cohorts";
export const ADMIN_TEAMS = "/admin/dashboard/teams";
export const ADMIN_PROJECTS = "/admin/dashboard/projects";
export const ADMIN_GROUPCHATS = "/admin/dashboard/groupchats";
export const ADMIN_ACCOUNTS_SETTINGS = "/admin/dashboard/accounts_settings";
export const ADMIN_LOGIN = "/admin/login";

// Api Url's

// Admin
export const ADMIN_LOGIN_API = "/admin/signin";

// File
export const UPLOAD_FILE = "/upload/:type";

//Roles
export const GET_ROLES_API = "/roles";

// Users
export const CREATE_USER_API = "/admin/user/create";
export const GET_ALL_USERS_API = (page: number) => `users?page=${page}`;
export const LOGIN_USER_API = "/user/signin";
export const GET_STUDENTS_NOT_IN_TEAM = "/students/unmatched";
export const ENABLE_DISABLE_USER_API = ({
  type,
  userId,
}: {
  type: "enable" | "disable";
  userId: number;
}) =>
  type === "enable" ? `/user/${userId}/enable` : `/user/${userId}/disable`;

//Cohorts
export const CREATE_COHORT_API = "/cohort";
export const DELETE_COHORT_API = (cohortId: string) => `/cohort/${cohortId}`;
export const GET_COHORTS_API = (page: number) => `cohorts?page=${page}`;
export const ASSIGN_PANELISTS_API = (cohortId: string) =>
  `/cohort/${cohortId}/panelist/add`;
export const UPDATE_COHORT_API = (cohortId: string) => `/cohort/${cohortId}`;
export const GET_SINGLE_COHORT_API = (cohortId: string) =>
  `/cohort/${cohortId}`;

//teams
export const CREATE_TEAM_API = (cohortId: string) => `/cohort/${cohortId}/team`;
export const CREATE_TEAM__WITHOUT_COHORT_API = `/team/create`;
export const GET_TEAMS_API = (page: number) => `teams?page=${page}`;
export const GET_SINGLE_TEAM_API = (teamId: number) => `/team/${teamId}`;
export const DELETE_TEAM_API = (teamId: number) => `/team/${teamId}`;
export const UPDATE_TEAM_MENTOR = (teamId: number) => `/team/${teamId}/mentor`;

// projects Api Routes
export const GET_ALL_PROJECTS = "/project";
export const GET_COHORT_PROJECT = (cohortId: string) =>
  `/project/cohort/${cohortId}`;
export const GET_PROJECTS_UNDER_PANELISTS = "/project/panelist";
export const GET_TEAM_PROJECTS = (teamId: number) => `/project/${teamId}`;

// Submission Api Routes
export const CREATE_SUBMISSION = (projectId: number) =>
  `/project/submission/${projectId}`;
export const GET_PROJECT_PANELIST_SUBMISSION = (projectId: number) =>
  `/project/submission/panelist/${projectId}`;
export const GET_SINGLE_SUBMISSION = (submissionId: number) =>
  `/project/submission/single/${submissionId}`;
export const PANELIST_SCORE_SUBMISSION = (submissionId: number) =>
  `/project/submission/score/${submissionId}`;
export const PANELIST_COMMENT_SUBMISSION = (submissionId: number) =>
  `/project/submission/comment/${submissionId}`;

// Query keys for React Query
export const queryKeys = {
  getRoles: "getRoles",
  getAllUsers: "getAllUsers",
  getCohorts: "getCohorts",
  getTeams: "getTeams",
  getSingleTeam: "getSingleTeam",
  getSingleCohort: "getSingleCohort",
  getStudentsNotInTeam: "getStudentsNotInTeam",
  getAllprojects: "getAllprojects",
  getProjectsUnderPanelists: "getProjectsUnderPanelists",
  getProjectPanelistSubmission: "getProjectPanelistSubmission",
  getSingleSubmission: "getSingleSubmission",
  getTeamProjects: "getTeamProjects",
};

export const LOCAL_STORAGE_KEY = "afrelibUserdetails";
