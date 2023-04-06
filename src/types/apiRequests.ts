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

export interface IUserLoginRequest extends IAdminLoginRequest {}
