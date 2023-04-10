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
