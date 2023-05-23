import { RoleName } from ".";

interface AdminDetails {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
  updated_at: string;
  about_me?: string;
  dob?: string;
}

export interface IResponseMessageWithData<TData> {
  message: string;
  responseData: TData;
}

export interface IStatusWithData<TData> {
  status: number;
  data: TData;
}

export interface IAdminLoginResponse {
  access_token: string;
  token_type: string;
  expires_at: string;
  adminDetails: AdminDetails;
}

export interface UserDetails {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at?: any;
  role_id: string;
  school_name: string;
  leadership_points: number;
  badges: number;
  status: string;
  created_at: string;
  updated_at: string;
  role_name: RoleName;
  about_me?: string;
  dob?: string;
  team: {
    id: number;
  };
  cohort: {
    cohort_id: string;
  };
}

export interface IUserLoginResponse {
  access_token: string;
  token_type: string;
  expires_at: string;
  UserDetails: UserDetails;
}

export interface IRole {
  id: number;
  role_id: string;
  role_name: string;
  created_at: string;
  updated_at: string;
}

export interface ICreateUserResponse {
  first_name: string;
  last_name: string;
  email: string;
  role_id: string;
  school_name: string;
  updated_at: string;
  created_at: string;
  id: number;
  role_name: string;
}

export interface IGetAllUsersResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  email_verified_at?: any;
  role_id: string;
  school_name: string;
  leadership_points: number;
  badges: number;
  status: string;
  created_at: string;
  updated_at: string;
  role_name: string;
  is_disabled: number;
  role: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth?: any;
  email_verified_at?: any;
  role_id: string;
  school_name?: any;
  leadership_points: number;
  badges: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface ICreateCohortResponse {
  cohort_id: string;
  cohort_name: string;
  cohort_description: string;
  start_date: string;
  end_date: string;
  updated_at: string;
  created_at: string;
  id: number;
  mentors: User[];
  panelists: User[];
  students: User[];
}

export interface ICreateGroupChatResponse {
  [key: string]: any;
}

export interface IGetGroupChatResponse {
  [key: string]: any;
}

export interface IGetChatMessagesResponse {
  [key: string]: any;
  ["Unread Messages"]: number;
}

export interface IGetUnreadMessagesResponse {
  [key: string]: any;
}

export interface IGetChatMembersResponse {
  [key: string]: any;
  id: string | number;
  chatId: string | number;
  chatName: string;
  chatDescription: string;
  userId: string | number;
  chatType: string;
  firstName: string;
  lastName: string;
  email: string;
  created_at: string;
  updated_at: string;
  avatar: string;
}

export interface ISendChatMessageResponse {
  [key: string]: any;
}

export interface IRemoveChatMemberResponse {
  [key: string]: any;
}

export interface IGetCohortsResponse {
  id: number;
  cohort_id: string;
  cohort_name: string;
  cohort_description: string;
  start_date: string;
  end_date: string;
  status: string;
  created_at: string;
  updated_at: string;
  mentors: number;
  panelists: number;
  teams: number;
  students: number;
}

export interface IGetTeamsResponse {
  id: number;
  team_id: string;
  team_name: string;
  team_description: string;
  is_deleted: number;
  created_at: string;
  updated_at: string;
  students: number;
  mentor: User;
}

export interface ITeamRespons {
  team_id: string;
  team_name: string;
  team_description: string;
  updated_at: string;
  created_at: string;
  id: number;
  students: User[];
  mentor: User;
}

export interface IGetSingleTeamResponse {
  id: number;
  team_id: string;
  team_name: string;
  team_description: string;
  created_at: string;
  updated_at: string;
  students: User[];
  mentor: User;
}

export interface IUpdateMentorResponse {
  id: number;
  team_id: string;
  team_name: string;
  team_description: string;
  created_at: string;
  updated_at: string;
  mentor: User;
}

export interface IGetSingleCohortResponse {
  id: number;
  cohort_id: string;
  cohort_name: string;
  cohort_description: string;
  start_date: string;
  end_date: string;
  status: string;
  created_at: string;
  updated_at: string;
  panelists: {
    data: User[];
    count: number;
  };
  mentors: {
    data: User[];
    count: number;
  };
  teams: {
    data: ITeamRespons[];
    count: number;
  };
  students: {
    data: User[];
    count: number;
  };
}

interface DatumProject {
  id: number;
  project_title: string;
  project_description: string;
  status: string;
  created_at: string;
  updated_at: string;
  submissions: any[];
  team: IGetTeamsResponse;
}

export interface IGetAllProjectsResponse {
  current_page: number;
  data: DatumProject[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url?: any;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}

interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface IGetCohortProjectResponse {
  id: number;
  cohort_id: string;
  cohort_name: string;
  cohort_description: string;
  start_date: string;
  end_date: string;
  status: string;
  created_at: string;
  updated_at: string;
  teams: Team[];
}

export interface ICreateProjectResponse {
  project_title: string;
  project_description: string;
  updated_at: string;
  created_at: string;
  id: number;
}

interface Team {
  id: number;
  team_id: string;
  team_name: string;
  team_description: string;
  created_at: string;
  updated_at: string;
  students: User[];
  mentor: User;
  projects: any[];
}

export interface Submission {
  id: number;
  project_id: number;
  submitter_id: number;
  submission_title: string;
  submission_url: string;
  submission_comment: string;
  submission_attachments: string;
  submission_week: number;
  panelist_feedback: string;
  is_deleted: number;
  created_at: string;
  updated_at: string;
}

interface PanelistCohortProject {
  id: number;
  project_title: string;
  project_description: string;
  status: string;
  created_at: string;
  updated_at: string;
  submissions: Submission[];
}

export interface IGetProjectsUnderPanelistsResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth?: any;
  email_verified_at?: any;
  role_id: string;
  school_name?: any;
  leadership_points: number;
  badges: number;
  status: string;
  is_disabled: number;
  created_at: string;
  updated_at: string;
  cohort_projects: PanelistCohortProject[][];
}

interface Project {
  id: number;
  project_title: string;
  project_description: string;
  status: string;
  created_at: string;
  updated_at: string;
  submissions: any[];
}

interface Team {
  id: number;
  team_id: string;
  team_name: string;
  team_description: string;
  created_at: string;
  updated_at: string;
  students: User[];
  mentor: User;
}

export interface IGetTeamProjectsResponse {
  team: Team;
  projects: Project[];
}

export interface IGetFileResponse {
  url: string;
}

export interface ICreateSubmissionResponse {
  project_id: number;
  submitter_id: number;
  submission_title: string;
  submission_url: string;
  submission_comment: string;
  submission_attachments: string;
  submission_week: number;
  panelist_feedback: string;
  updated_at: string;
  created_at: string;
  id: number;
}

export interface EvaluatedSubmission {
  id: number;
  project_id: number;
  submitter_id: number;
  submission_title: string;
  submission_url: string;
  submission_comment: string;
  submission_attachments: string;
  submission_week: number;
  panelist_feedback: string;
  is_deleted: number;
  created_at: string;
  updated_at: string;
}

interface Panelist {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth?: any;
  email_verified_at?: any;
  role_id: string;
  school_name?: any;
  leadership_points: number;
  badges: number;
  status: string;
  is_disabled: number;
  created_at: string;
  updated_at: string;
}
export interface IGetProjectPanelistSubmission {
  panelist: Panelist;
  evaluatedSubmissions: EvaluatedSubmission[];
  nonEvaluatedSubmissions: EvaluatedSubmission[];
}

interface Panelistfeedback {
  panelist_id: number;
  comment: string;
  score: number;
  evaluated: boolean;
  panelist: Panelist;
}

interface Panelist {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth?: any;
  email_verified_at?: any;
  role_id: string;
  school_name?: any;
  leadership_points: number;
  badges: number;
  status: string;
  is_disabled: number;
  created_at: string;
  updated_at: string;
}

export interface IGetSingleSubmissionResponse {
  id: number;
  project_id: number;
  submitter_id: number;
  submission_title: string;
  submission_url: string;
  submission_comment: string;
  submission_attachments: string;
  submission_week: number;
  panelist_feedback: Panelistfeedback[];
  is_deleted: number;
  created_at: string;
  updated_at: string;
  average_score: number;
}

interface Link {
  url?: string;
  label: string;
  active: boolean;
}

interface Update {
  id: number;
  update_week: number;
  update_title: string;
  update_description: string;
  created_at: string;
  updated_at: string;
}

export interface IGetWeeklyUpdatesResponse {
  current_page: number;
  data: Update[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url?: any;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
  total: number;
}

export interface ICreateWeeklyUpdatesResponse {
  update_week: number;
  update_title: string;
  update_description: string;
  updated_at: string;
  created_at: string;
  id: number;
}

interface MentorTeam {
  id: number;
  team_id: string;
  team_name: string;
  team_description: string;
  created_at: string;
  updated_at: string;
}

export interface IGetMentorMenteesResponse {
  mentor: User;
  mentorTeams: MentorTeam[];
  mentees: User[];
}
