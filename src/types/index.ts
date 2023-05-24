export interface IData {
  name: string;
  id: number;
}

export type RoleName = "Panelist" | "Student" | "Mentor" | "admin" | "";

export interface GetInfinitePagesInterface<T> {
  nextId?: number;
  previousId?: number;
  data: T;
  count: number;
}

export interface IUSer {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  points: number;
  badges: number;
  status: string;
  school: string;
}

export interface ISelect {
  label: string;
  value: string | number;
}

export interface IUserDetails {
  access_token: string | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  id: number | string | null;
  role: RoleName | null;
  teamId?: number | null;
  cohortId?: string | null;
  userId: number | null;
  about_me: string | null;
  dob: string | null;
}
