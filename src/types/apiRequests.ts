export interface IAdminLoginRequest {
  email: string;
  password: string;
}

export interface ICreateUserRequest {
  first_name: string;
  last_name: string;
  email: string;
  role_id: string;
  school_name: string;
  date_of_birth: string;
}

export interface ICreateCohortRequest {
  cohort_name: string;
  cohort_description: string;
  start_date: string;
  end_date: string;
  mentorIds: number[];
  panelistIds: number[];
  teamIds: any[];
}

export interface IUserLoginRequest extends IAdminLoginRequest {}

export interface ICreateTeamRequest {
  team_name: string;
  team_description: string;
  studentIds: number[];
  mentorId: number;
}
