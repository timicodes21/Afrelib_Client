import { INotification, IResources } from "@/types/dashboard";
import {
  ACCOUNTS_SETTINGS,
  ADMIN_ACCOUNTS_SETTINGS,
  ADMIN_COHORTS,
  ADMIN_DASHBOARD,
  ADMIN_GROUPCHATS,
  ADMIN_PROJECTS,
  ADMIN_TEAMS,
  ADMIN_USER,
  CLASSROOM,
  DASHBOARD,
  MESSAGES,
  RESOURCES,
  SUPPORT,
} from "./constants";
import { IUSer } from "@/types";

export interface ILink {
  name: string;
  link: string;
  icon: string;
  activeIcon: string;
}

export const dashboardLinks: ILink[] = [
  {
    name: "Dashboard",
    link: DASHBOARD,
    icon: "/assets/icons/dashboard_icon.svg",
    activeIcon: "/assets/icons/dashboard_icon_active.svg",
  },
  {
    name: "Classroom",
    link: CLASSROOM,
    icon: "/assets/icons/classroom_icon.svg",
    activeIcon: "/assets/icons/classroom_icon_active.svg",
  },
  {
    name: "Messages",
    link: MESSAGES,
    icon: "/assets/icons/messages_icon.svg",
    activeIcon: "/assets/icons/messages_icon_active.svg",
  },
  {
    name: "Resources",
    link: RESOURCES,
    icon: "/assets/icons/resources_icon.svg",
    activeIcon: "/assets/icons/resources_icon_active.svg",
  },
  {
    name: "Account & Settings",
    link: ACCOUNTS_SETTINGS,
    icon: "/assets/icons/account_icon.svg",
    activeIcon: "/assets/icons/account_icon_active.svg",
  },
];

export const adminDashboardLinks: ILink[] = [
  {
    name: "Dashboard",
    link: ADMIN_DASHBOARD,
    icon: "/assets/icons/dashboard_icon.svg",
    activeIcon: "/assets/icons/dashboard_icon_active.svg",
  },
  {
    name: "Users",
    link: ADMIN_USER,
    icon: "/assets/icons/users_icon.svg",
    activeIcon: "/assets/icons/users_icon_active.svg",
  },
  {
    name: "Teams",
    link: ADMIN_TEAMS,
    icon: "/assets/icons/cohorts_icon.svg",
    activeIcon: "/assets/icons/cohorts_icon_active.svg",
  },
  {
    name: "Cohorts",
    link: ADMIN_COHORTS,
    icon: "/assets/icons/cohorts_icon.svg",
    activeIcon: "/assets/icons/cohorts_icon_active.svg",
  },
  {
    name: "Projects",
    link: ADMIN_PROJECTS,
    icon: "/assets/icons/projects_icon.svg",
    activeIcon: "/assets/icons/projects_icon_active.svg",
  },
  {
    name: "Group Chats",
    link: ADMIN_GROUPCHATS,
    icon: "/assets/icons/groupchats_icon.svg",
    activeIcon: "/assets/icons/groupchats_icon_active.svg",
  },
  {
    name: "Account & Settings",
    link: ADMIN_ACCOUNTS_SETTINGS,
    icon: "/assets/icons/account_icon.svg",
    activeIcon: "/assets/icons/account_icon_active.svg",
  },
];

export const bottomDashboardLinks: ILink[] = [
  {
    name: "Support",
    link: SUPPORT,
    icon: "/assets/icons/support_icon.svg",
    activeIcon: "/assets/icons/support_icon_active.svg",
  },
  {
    name: "Logout",
    link: "",
    icon: "/assets/icons/logout_icon.svg",
    activeIcon: "/assets/icons/logout_icon.svg",
  },
];

export const notifications: INotification[] = [
  {
    src: "/assets/icons/notification_avatar.svg",
    title: "James Umoh sent a resource",
    time: "30m ago",
    date: "Dec 13",
  },
  {
    src: "/assets/icons/notification_avatar.svg",
    title: "James Umoh sent a resource",
    time: "30m ago",
    date: "Dec 13",
  },
  {
    src: "/assets/icons/notification_avatar.svg",
    title: "James Umoh sent a resource",
    time: "30m ago",
    date: "Dec 13",
  },
  {
    src: "/assets/icons/notification_avatar.svg",
    title: "James Umoh sent a resource",
    time: "30m ago",
    date: "Dec 13",
  },
  {
    src: "/assets/icons/notification_avatar.svg",
    title: "James Umoh sent a resource",
    time: "30m ago",
    date: "Dec 13",
  },
];

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "left" | "center";
}

export const columns: readonly Column[] = [
  { id: "title", label: "TITLE", minWidth: 180, align: "left" },
  { id: "type", label: "TYPE", minWidth: 70, align: "left" },
  { id: "resource", label: "RESOURCE", minWidth: 100, align: "left" },
  { id: "sharedBy", label: "SHARED BY", minWidth: 100, align: "left" },
];

export const usersTableColumns: readonly Column[] = [
  { id: "FIRSTNAME", label: "FIRSTNAME", minWidth: 50, align: "left" },
  { id: "LASTNAME", label: "LASTNAME", minWidth: 50, align: "left" },
  { id: "EMAIL", label: "EMAIL", minWidth: 100, align: "left" },
  { id: "DATEOFBIRTH", label: "DATE OF BIRTH", minWidth: 100, align: "left" },
  {
    id: "LOADERBOARD",
    label: "LOADERBOARD POINTS",
    minWidth: 150,
    align: "center",
  },
  { id: "BADGES", label: "BADGES", minWidth: 50, align: "center" },
  { id: "STATUS", label: "STATUS", minWidth: 50, align: "center" },
  { id: "SCHOOL", label: "SCHOOL", minWidth: 100, align: "center" },
  { id: "ACTION", label: "ACTION", minWidth: 100, align: "left" },
];

export const resources: IResources[] = [
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
  {
    title: "Intro to Artificial Intelligence",
    type: "URL",
    resource: "https://www.jhchf./kkdk.com",
    sharedBy: "James Umoh",
  },
];

export interface IMessages {
  src?: string;
  time: string;
  number?: number;
  message: string;
  group: string;
}

export const messages: IMessages[] = [
  {
    time: "8:30 AM",
    number: 8,
    message: "Ayomide: Hello everyo.",
    group: "AIC-Cohort 14",
  },
  {
    time: "8:30 AM",
    number: 8,
    message: "Ayomide: Hello everyo.",
    group: "AIC-Cohort 14",
  },
  {
    time: "8:30 AM",
    number: 8,
    message: "Ayomide: Hello everyo.",
    group: "AIC-Cohort 14",
  },
  {
    time: "8:30 AM",
    number: 8,
    message: "Ayomide: Hello everyo.",
    group: "AIC-Cohort 14",
  },
];

export const allUsers: IUSer[] = [
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
  {
    firstName: "Peter",
    lastName: "Umokori",
    email: "peter@gmail.com",
    dateOfBirth: "15/03/2008",
    points: 1500,
    badges: 6,
    status: "active",
    school: "Loral Secondary School",
  },
];

interface Option {
  name: string;
  src: string;
}

export const cohortOptions: Option[] = [
  {
    name: "Update Cohort",
    src: "/assets/icons/edit_icon.svg",
  },

  {
    name: "Assign Panelists",
    src: "/assets/icons/assign_icon.svg",
  },
  {
    name: "Delete Cohort",
    src: "/assets/icons/delete_icon.svg",
  },
  {
    name: "Edit Cohort",
    src: "/assets/icons/edit_icon.svg",
  },
];

export const teamOptions: Option[] = [
  {
    name: "Assign Mentor",
    src: "/assets/icons/assign_icon.svg",
  },
  {
    name: "Delete Team",
    src: "/assets/icons/delete_icon.svg",
  },
];
