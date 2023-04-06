interface AdminDetails {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
  updated_at: string;
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
  email_verified_at?: any;
  role_id: string;
  school_name: string;
  leadership_points: number;
  badges: number;
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
  role_name: string;
}
