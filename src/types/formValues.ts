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
  dob: string;
};

export type AddCohortFormValues = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  mentors: number[];
  panelists: number[];
  teams: number[];
};

export type UpdateCohortFormValues = {
  name: string;
  description: string;
};

export type AddTeamFormValues = {
  name: string;
  description: string;
  students: number[];
  mentor: number;
  // cohort: string;
};

export type AddMentorFormValues = {
  mentorId: number;
};

export type AssignPanelistsFormValues = {
  panelist_ids: number[];
};

export type CreateSubmissionFormValues = {
  submission_title: string;
  submitted_file: string;
  submitted_url: string;
  week_number: string;
  submission_comment: string;
};
export type CreateGroupChatFormValues = {
  name: string;
  members: string[] | number[];
  description?: string;
};

export type WeeklyUpdatesFormValues = {
  week: string;
  title: string;
  body: string;
};
