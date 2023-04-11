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

// links
export const DASHBOARD = "/dashboard";
export const CLASSROOM = "/dashboard/classroom";
export const MESSAGES = "/dashboard/messages";
export const RESOURCES = "/dashboard/resources";
export const ACCOUNTS_SETTINGS = "/dashboard/accounts_settings";
export const SUPPORT = "/dashboard/support";
export const LOGIN = "/login";

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

//Roles
export const GET_ROLES_API = "/roles";

// Users
export const CREATE_USER_API = "/admin/user/create";
export const GET_ALL_USERS_API = (page: number) => `users?page=${page}`;
export const LOGIN_USER_API = "/user/signin";

//Cohorts
export const CREATE_COHORT_API = "/cohort";
export const DELETE_COHORT_API = (cohortId: string) => `/cohort/${cohortId}`;
export const GET_COHORTS_API = (page: number) => `cohorts?page=${page}`;

//teams
export const CREATE_TEAM_API = (cohortId: string) => `/cohort/${cohortId}/team`;
export const GET_TEAMS_API = (page: number) => `teams?page=${page}`;
export const DELETE_TEAM_API = (teamId: number) => `/team/${teamId}`;

export const queryKeys = {
  getRoles: "getRoles",
  getAllUsers: "getAllUsers",
  getCohorts: "getCohorts",
  getTeams: "getTeams",
};

export const LOCAL_STORAGE_KEY = "afrelibUserdetails";
