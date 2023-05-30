import { INotification, IResources } from "@/types/dashboard";
import {
  ACCOUNTS_SETTINGS,
  ADMIN_ACCOUNTS_SETTINGS,
  ADMIN_COHORTS,
  ADMIN_DASHBOARD,
  ADMIN_GROUPCHATS,
  ADMIN_PROJECTS,
  ADMIN_SUPPORT,
  ADMIN_TEAMS,
  ADMIN_USER,
  CHAT_WITH_AI,
  CLASSROOM,
  COMPLIANCE,
  DASHBOARD,
  GUIDELINES,
  MENTEES,
  MESSAGES,
  PROJECTS,
  RESOURCES,
  SUPPORT,
  TERMS_AND_CONDITIONS,
} from "./constants";
import { IUSer, RoleName } from "@/types";

export interface ILink {
  name: string;
  link: string;
  icon: string;
  activeIcon: string;
}

export const studentDashboard = [
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
    name: "Chat With AI",
    link: CHAT_WITH_AI,
    icon: "/assets/icons/messages_icon.svg",
    activeIcon: "/assets/icons/messages_icon_active.svg",
  },
  {
    name: "Account & Settings",
    link: ACCOUNTS_SETTINGS,
    icon: "/assets/icons/account_icon.svg",
    activeIcon: "/assets/icons/account_icon_active.svg",
  },
];

export const panelistDashboard = [
  {
    name: "Dashboard",
    link: DASHBOARD,
    icon: "/assets/icons/dashboard_icon.svg",
    activeIcon: "/assets/icons/dashboard_icon_active.svg",
  },
  {
    name: "Projects",
    link: PROJECTS,
    icon: "/assets/icons/projects_icon.svg",
    activeIcon: "/assets/icons/projects_icon_active.svg",
  },
  {
    name: "Messages",
    link: MESSAGES,
    icon: "/assets/icons/messages_icon.svg",
    activeIcon: "/assets/icons/messages_icon_active.svg",
  },
  {
    name: "Account & Settings",
    link: ACCOUNTS_SETTINGS,
    icon: "/assets/icons/account_icon.svg",
    activeIcon: "/assets/icons/account_icon_active.svg",
  },
];

export const mentorDashboard = [
  {
    name: "Dashboard",
    link: DASHBOARD,
    icon: "/assets/icons/dashboard_icon.svg",
    activeIcon: "/assets/icons/dashboard_icon_active.svg",
  },
  {
    name: "Projects",
    link: PROJECTS,
    icon: "/assets/icons/dashboard_icon.svg",
    activeIcon: "/assets/icons/dashboard_icon_active.svg",
  },
  {
    name: "My Mentees",
    link: MENTEES,
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

export const dashboardLinks = (role: RoleName): ILink[] => {
  switch (role) {
    case "Student":
      return studentDashboard;
    case "Panelist":
      return panelistDashboard;
    case "Mentor":
      return mentorDashboard;
    default:
      return studentDashboard;
  }
};

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
    name: "Guidlines",
    link: GUIDELINES,
    icon: "/assets/icons/support_icon.svg",
    activeIcon: "/assets/icons/support_icon_active.svg",
  },
  {
    name: "Compliance / Terms and Conditions",
    link: TERMS_AND_CONDITIONS,
    icon: "/assets/icons/support_icon.svg",
    activeIcon: "/assets/icons/support_icon_active.svg",
  },
  // {
  //   name: "Compliance",
  //   link: COMPLIANCE,
  //   icon: "/assets/icons/support_icon.svg",
  //   activeIcon: "/assets/icons/support_icon_active.svg",
  // },

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

export const adminBottomDashboardLinks: ILink[] = [
  {
    name: "Guidlines",
    link: GUIDELINES,
    icon: "/assets/icons/support_icon.svg",
    activeIcon: "/assets/icons/support_icon_active.svg",
  },
  {
    name: "Compliance / Terms and Conditions",
    link: TERMS_AND_CONDITIONS,
    icon: "/assets/icons/support_icon.svg",
    activeIcon: "/assets/icons/support_icon_active.svg",
  },
  // {
  //   name: "Compliance",
  //   link: COMPLIANCE,
  //   icon: "/assets/icons/support_icon.svg",
  //   activeIcon: "/assets/icons/support_icon_active.svg",
  // },

  {
    name: "Support",
    link: ADMIN_SUPPORT,
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

export const studentsTableColumns: readonly Column[] = [
  { id: "name", label: "NAME", minWidth: 100, align: "left" },
  { id: "dob", label: "DATE OF BIRTH", minWidth: 70, align: "left" },
  { id: "school", label: "SCHOOL", minWidth: 100, align: "left" },
  { id: "points", label: "LEADERSHIP POINTS", minWidth: 100, align: "left" },
];

export const mentorsTableColumns: readonly Column[] = [
  { id: "name", label: "NAME", minWidth: 100, align: "left" },
  { id: "dob", label: "DATE OF BIRTH", minWidth: 70, align: "left" },
  { id: "badges", label: "BADGES", minWidth: 70, align: "left" },
];

export const menteesTableColumns: readonly Column[] = [
  { id: "firstName", label: "FIRST NAME", minWidth: 100, align: "center" },
  { id: "lastName", label: "LAST NAME", minWidth: 100, align: "center" },
  { id: "email", label: "EMAIL", minWidth: 100, align: "center" },
  { id: "cohort", label: "COHORT", minWidth: 50, align: "center" },
  { id: "badges", label: "BADGES", minWidth: 50, align: "center" },
  {
    id: "leaderBoardPoints",
    label: "LEADERBOARD POINTS",
    minWidth: 70,
    align: "center",
  },
];

export const panelistsTableColumns: readonly Column[] = [
  { id: "name", label: "NAME", minWidth: 100, align: "left" },
  { id: "dob", label: "DATE OF BIRTH", minWidth: 70, align: "left" },
  { id: "badges", label: "BADGES", minWidth: 70, align: "left" },
];

export const submissionTableColumns: readonly Column[] = [
  { id: "week", label: "WEEK", minWidth: 70, align: "left" },
  { id: "Title", label: "TITLE", minWidth: 100, align: "left" },
  { id: "Attachment", label: "ATTACHMENT", minWidth: 100, align: "left" },
  {
    id: "Submission File",
    label: "SUBMISSION FILE",
    minWidth: 100,
    align: "left",
  },
  {
    id: "Comment",
    label: "COMMENT",
    minWidth: 120,
    align: "left",
  },
];

export const teamsTableColumns: readonly Column[] = [
  { id: "name", label: "NAME", minWidth: 70, align: "left" },
  {
    id: "description",
    label: "TEAM DESCRIPTION",
    minWidth: 100,
    align: "left",
  },
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

export const guidelines: { header: string; text: string }[] = [
  {
    header: "1.	Respectful Interaction",
    text: "Treat mentors, fellow participants, and organisers with respect and professionalism. Foster a supportive and inclusive environment that encourages constructive discussions and collaboration.",
  },
  {
    header: "2.	Intellectual Property",
    text: "Respect intellectual property rights. Do not plagiarise or infringe upon copyrights, patents, or any other protected materials. Ensure that your submissions are original and properly attribute external sources.",
  },
  {
    header: "3.	Compliance with Laws and Regulations",
    text: "Adhere to all applicable laws and regulations while participating in the Afrelib AI Challenge Hub. This includes but is not limited to data protection, privacy, and intellectual property laws.",
  },
  {
    header: "4.	Ethical Considerations",
    text: "Consider the ethical implications of your work. Design solutions that align with ethical principles, ensuring fairness, transparency, and accountability",
  },
  {
    header: "5.	Collaboration and Teamwork",
    text: "Embrace collaboration and teamwork. Engage in productive discussions, share knowledge, and support your fellow participants. Collaboration often leads to innovative solutions and a richer learning experience.",
  },
  {
    header: "6.	Responsible Use of Resources",
    text: "Utilise the provided resources, tools, and datasets responsibly. Avoid excessive or wasteful use of computing resources and respect any limitations or restrictions outlined by the Afrelib AI Challenge Hub.",
  },
  {
    header: "7.	Honesty and Integrity",
    text: "Uphold honesty and integrity in all aspects of your participation. Represent your work truthfully, accurately, and without deception. Plagiarism, cheating, or any form of dishonest behaviour will not be tolerated.",
  },
  {
    header: "8.	Safety and Security",
    text: "Prioritise your safety and the security of others. Report any potential security vulnerabilities or concerns promptly to the appropriate channels. Exercise caution when sharing personal information or engaging in online interactions.",
  },
  {
    header: "9.	Professional Conduct",
    text: "Demonstrate professionalism in all interactions. Uphold the values of professionalism, integrity, and ethical behaviour. Maintain a positive online presence and contribute positively to the reputation of the Afrelib AI Challenge Hub.",
  },
  {
    header: "10.	Adherence to Guidelines",
    text: "Familiarise yourself with and adhere to all guidelines, rules, and terms and conditions set forth by the Afrelib AI Challenge Hub. Failure to comply with these guidelines may result in consequences, including disqualification from the challenges.",
  },
  {
    header: "Remember, as participants of the Afrelib",
    text: "Remember, as participants of the Afrelib AI Challenge Hub, you have the opportunity to learn and grow under the guidance of mentors. Embrace their expertise, seek their advice, and make the most of their support to enhance your skills and achieve your full potential in the exciting field of AI.",
  },
];

export const termsAndConditions: { header: string; text: string }[] = [
  {
    header: "1.	Acceptance of Terms",
    text: "By using the Afrelib AI Challenge Hub, you agree to adhere to these Terms and Conditions. If you do not agree with any part of these terms, you should not use the platform.",
  },
  {
    header: "2.	Eligibility",
    text: "The Afrelib AI Challenge Hub is open to individuals who meet the specified age requirements and any other eligibility criteria set by the platform. Minors must obtain parental or guardian consent to participate.",
  },
  {
    header: "3.	Intellectual Property",
    text: "All intellectual property rights associated with the platform, including content, materials, software, and trademarks, are owned by Afrelib Academy or its licensors. Participants retain ownership of their submissions but grant Afrelib Academy a license to use, reproduce, distribute, and display their submissions for promotional and educational purposes.",
  },
  {
    header: "4.	Code of Conduct",
    text: "Participants must adhere to a code of conduct that promotes respectful and professional behaviour. Harassment, discrimination, or any offensive conduct towards others will not be tolerated. Violation of the code of conduct may result in disqualification or suspension from the platform.",
  },
  {
    header: "5.	Submission Guidelines",
    text: "Participants must follow the guidelines provided for each challenge, including submission deadlines, format requirements, and any specific rules or instructions. Failure to comply may result in disqualification from the challenge.",
  },
  {
    header: "6.	Privacy and Data Protection",
    text: "The collection and processing of personal data are governed by the platform's Privacy Policy (GDPR). By using the Afrelib AI Challenge Hub, you consent to the collection and processing of your personal data as described in the Privacy Policy.",
  },
  {
    header: "7.	Limitation of Liability",
    text: "Afrelib Academy and its affiliates are not liable for any damages arising from the use of the platform or participation in the challenges. Participants acknowledge that their participation is voluntary and at their own risk.",
  },
  {
    header: "8.	Indemnity",
    text: "Participants agree to indemnify and hold Afrelib Academy, its affiliates, mentors, and organizers harmless from any claims, damages, losses, or liabilities arising from their participation or any violation of the Terms and Conditions.",
  },
  {
    header: "9.	Modification and Termination",
    text: "Afrelib Academy reserves the right to modify, suspend, or terminate the Afrelib AI Challenge Hub or any part of it at any time and for any reason. Participants will be notified of any significant changes or termination through the provided communication channels.",
  },
  {
    header: "10.	Governing Law and Jurisdiction",
    text: "These Terms and Conditions are governed by the laws of the jurisdiction in which Afrelib Academy is located. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in that jurisdiction.",
  },
];

export const compliance: { header: string; text: string }[] = [
  {
    header: "1.	Lawful Basis for Processing",
    text: "We only collect and process personal data when there is a lawful basis to do so. This may include obtaining explicit consent, fulfilling contractual obligations, complying with legal requirements, or pursuing legitimate interests in a manner that respects your rights and freedoms.",
  },
  {
    header: "2.	Purpose Limitation",
    text: "We collect and process personal data for specific, legitimate purposes that are clearly communicated to you. We ensure that the data we collect is relevant, adequate, and necessary for the stated purposes, and we do not use it for any incompatible purposes without obtaining your consent",
  },
  {
    header: "3.	Data Minimisation",
    text: "We only collect and retain personal data that is necessary for the intended purpose. We strive to minimise the amount of personal information we collect and process, ensuring that it is accurate, up-to-date, and limited to what is required.",
  },
  {
    header: "4.	Data Security",
    text: "We implement appropriate technical and organizational measures to safeguard your personal data against unauthorized access, disclosure, alteration, or destruction. We regularly assess and update our security practices to maintain the confidentiality, integrity, and availability of your information.",
  },
  {
    header: "5.	Data Sharing and Transfers",
    text: " We do not sell, rent, or disclose your personal data to third parties without your consent, except where necessary for fulfilling our contractual obligations or as required by law. When transferring personal data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place to protect your rights and comply with GDPR requirements.",
  },
  {
    header: "6.	Individual Rights",
    text: "We respect your rights as outlined under GDPR. You have the right to access, rectify, and erase your personal data, as well as the right to restrict or object to its processing. We provide mechanisms to exercise these rights and promptly respond to your requests in accordance with applicable data protection laws.",
  },
  {
    header: "7.	Data Retention",
    text: "We retain personal data for no longer than necessary to fulfil the purposes for which it was collected, unless otherwise required by law. We have established retention periods that align with the nature of the data and the purposes for which it is processed.",
  },
  {
    header: "8.	Data Protection Officer:",
    text: "We have appointed a Data Protection Officer (DPO) who oversees our data protection practices and ensures compliance with GDPR. You can contact our DPO regarding any concerns or inquiries related to the processing of your personal data.",
  },
  {
    header: "9.	Compliance Monitoring and Review",
    text: "We regularly review and evaluate our data protection practices to ensure ongoing compliance with GDPR. We work proactively to identify and address any privacy risks and to continuously improve our data protection measures.",
  },
];

export const frequentlyAskedQuestions: { question: string; answer: string }[] =
  [
    {
      question: "How do I create an account on the Challenge Hub?",
      answer:
        "Getting started is easy! Simply click on the 'Sign Up' button located on the Challenge Hub homepage. Follow the prompts, provide the required information, and create a unique username and password. Before proceeding, make sure to review and accept thez terms and conditions",
    },
    {
      question: "What should I do if I forget my password?",
      answer:
        "No worries! If you forget your password, just click on the 'Forgot Password' link on the login page. Follow the instructions to reset your password. You may need to provide your registered email address or username for verification.",
    },
    {
      question: "How do I submit my entry for the challenge?",
      answer:
        "To submit your entry, log in to the Challenge Hub and go to the 'Submit Entry' section. Follow the instructions to upload your files, including any necessary documents, designs, or code. Before finalizing your submission, take a moment to review and confirm all the details.",
    },
    {
      question:
        "Can I make changes to my submission after it has been submitted?",
      answer:
        "Unfortunately, once a submission has been submitted, it cannot be edited or updated. We encourage you to carefully review your entry before finalizing your submission to ensure its accuracy and completeness.",
    },
    {
      question: "How can I view other participants' submissions?",
      answer:
        "Look out for a dedicated section on the Challenge Hub where you can explore and view other participants' submissions. Keep an eye on any guidelines or instructions provided on how to access and browse through these entries.",
    },
    {
      question:
        "What should I do if I encounter technical issues on the Challenge Hub?",
      answer:
        "If you experience any technical issues, such as errors, slow loading times, or difficulties accessing certain features, don't worry! Reach out to our support team for assistance. You can find their contact information on the Challenge Hub website or in the provided support documentation.",
    },
    {
      question:
        "Can I collaborate with other participants on the Challenge Hub?",
      answer:
        "Collaboration opportunities may vary based on the challenge guidelines. Please refer to the specific rules or contact our support team to clarify whether team collaborations are allowed and for guidance on initiating or joining a team.",
    },
    {
      question:
        "How will I receive updates and notifications about the challenge?",
      answer:
        "Stay informed! The Challenge Hub may have a notification system to keep you updated on important announcements, deadlines, and other relevant information. Regularly check your account and the designated communication channels provided by the challenge organizers to stay in the loop.",
    },
    {
      question:
        "Where can I seek additional support or clarification about the challenge?",
      answer:
        "We're here to help! If you need further assistance, clarification, or have specific questions related to the challenge, reach out to our support team. They are dedicated to providing guidance, answering your queries, and addressing any concerns you may have.",
    },
    // {
    //   question:
    //     "Can I collaborate with other participants on the Challenge Hub?",
    //   answer:
    //     "Collaboration opportunities may vary based on the challenge guidelines. Please refer to the specific rules or contact our support team to clarify whether team collaborations are allowed and for guidance on initiating or joining a team.",
    // },
  ];
