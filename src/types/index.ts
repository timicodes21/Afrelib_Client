export interface IData {
  name: string;
  id: number;
}

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
  role: string | null;
}
