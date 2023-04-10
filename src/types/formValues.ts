export type LoginFormValues = {
  email: string;
  password: string;
};

export type AddUserFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  school: string;
  userType: string;
};

export type AddCohortFormValues = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  mentors: number[];
  panelists: number[];
  teams: [];
};
