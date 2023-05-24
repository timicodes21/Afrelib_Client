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
export const ADMIN_SUPPORT = "/admin/dashboard/support";
export const ADMIN_LOGIN = "/admin/login";

// Api Url's

// Image base url
export const IMAGE_BASE_URL =
  "https://139-162-248-210.ip.linodeusercontent.com";

// Admin
export const ADMIN_LOGIN_API = "/admin/signin";
export const GET_ALL_ADMIN_API = "/admin/all";

// File
//export const UPLOAD_FILE = "/upload/:type";
export const UPLOAD_FILE = (type: string) => `/upload/${type}`;

// Weekly updates api
export const GET_WEEKLY_UPDATES = "/update";
export const CREATE_WEEKLY_UPDATES = "/update";

//Roles
export const GET_ROLES_API = "/roles";

// Users
export const CREATE_USER_API = "/admin/user/create";
export const GET_ALL_USERS_API = (page: number) => `users?page=${page}`;
export const LOGIN_USER_API = "/user/signin";
export const GET_STUDENTS_NOT_IN_TEAM = "/students/unmatched";
export const UPDATE_USER_DETAILS = "/user";
export const CHANGE_USER_PASSWORD = "/user/password";
export const ENABLE_DISABLE_USER_API = ({
  type,
  userId,
}: {
  type: "enable" | "disable";
  userId: number;
}) =>
  type === "enable" ? `/user/${userId}/enable` : `/user/${userId}/disable`;
export const GET_MENTOR_MENTEES = (id: number) => `/mentees/${id}`;
export const RESET_USER_PASSWORD = (id: number) =>
  `/admin/user/${id}/password/reset`;
export const GET_LOGGED_IN_USER = "/user";

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
export const CREATE_TEAM_PROJECT = "/project/create";
export const EDIT_TEAM_PROJECT = (projectId: number) => `/project/${projectId}`;
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

// Chats teams cohort api routes
export const ADD_TEAM_MEMBERS_GROUPCHAT = "/group-chat/team";
export const ADD_COHORT_GROUPCHAT = (cohortId: string) =>
  `/chat/cohort/${cohortId}/add`;

// Dashboard Api's
export const GET_DASHBOARD_DETAILS_ADMIN = "/dashboard/admin";
export const GET_DASHBOARD_DETAILS_MENTOR = "/dashboard/mentor";
export const GET_DASHBOARD_DETAILS_PANELIST = "/dashboard/panelist";
export const GET_DASHBOARD_DETAILS_STUDENT = "/dashboard/student";

// Query keys for React Query
export const queryKeys = {
  getRoles: "getRoles",
  getAllUsers: "getAllUsers",
  getAdminDashboard: "getAdminDashboard",
  getStudentDashboard: "getStudentDashboard",
  getAllAdmin: "getAllAdmin",
  getMentorMentees: "getMentorMentees",
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
  getChats: "getChats",
  getMessages: "getMessages",
  getMembers: "getMembers",
  getWeeklyUpdates: "getWeeklyUpdates",
};

//Chats links

export const CREATE_GROUP_CHAT_API = "/chat/admin-chat";
export const GET_USER_GROUP_CHATS_API = (userId: number | string) =>
  `/chat/user/${userId}/groups`;
export const GET_ALL_CHAT_MESSAGES = (chatId: number | string) =>
  `/chat/${chatId}/messages`;
export const SEND_CHAT_MESSAGE = (chatId: number | string) =>
  `/chat/${chatId}/message`;
export const GET_ALL_CHAT_MEMBERS = (chatId: number | string) =>
  `/chat/${chatId}/members`;
export const REMOVE_CHAT_MEMBER = (
  userId: number | string,
  chatId: number | string,
) => `group-chats/${chatId}/members/${userId}`;
export const ADD_CHAT_MEMBER = (
  userId: number | string,
  chatId: number | string,
) => `chat/${chatId}/addUser/${userId}`;
export const READ_UNREAD_CHAT_MESSAGES = (
  userId: number | string,
  chatId: number | string,
) => `chat/${chatId}/user/${userId}/read`;
export const GET_UNREAD_MESSAGES = (chatId: number | string) =>
  `/chat/${chatId}/unread`;

export const LOCAL_STORAGE_KEY = "afrelibUserdetails";
