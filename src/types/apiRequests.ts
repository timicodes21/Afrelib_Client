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

export interface IUpdateMentorRequest {
  mentorId: number;
}

export interface IAssignPanelistsRequest {
  panelist_ids: number[];
}

export interface IUpdateCohorRequest {
  cohort_name: string;
  cohort_description: string;
}
export interface ICreateSubmissionRequest {
  project_id: number;
  submitted_by: number;
  submission_title: string;
  submitted_file: string;
  submitted_url: string;
  week_number: number;
  submission_comment: string;
}

export interface IScoreSubmissionRequest {
  score: number;
}

export interface ICommentSubmissionRequest {
  comment: string;
}
export interface ICreateGroupChatRequest {
  chatName: string;
  chatDescription: string;
  chatType: "group";
  userIds: string[] | number[];
}

export interface ISendMessageRequest {
  content: string;
  mediaType: "text" | "image" | "audio" | "video" | "document";
  mediaUrl?: string;
  senderId: string | number;
  timestamp: string;
  senderName: string;
}

export interface IRemoveChatMemberRequest {
  userId: string | number;
  chatId: string | number;
}

export interface ICreateUpdateRequest {
  week: number;
  title: string;
  body: string;
}

export interface ICreateTeamGroupChatRequest {
  teamId: number;
  participants: Array<string>;
}

export interface ICreateProjectRequest {
  cohort_id: string;
  team_id: number;
  project_title: string;
  project_description: string;
}

export interface IEditProjectRequest
  extends Omit<ICreateProjectRequest, "cohort_id" | "team_id"> {}
