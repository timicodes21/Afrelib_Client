interface AdminDetails {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
  updated_at: string;
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

interface UserDetails {
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
  role_name: string;
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

interface Datum {
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
  data: Datum[];
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
