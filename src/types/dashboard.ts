export interface INotification {
  src?: string;
  title: string;
  time: string;
  date: string;
}

export interface IResources {
  title: string;
  type: string;
  resource: string;
  sharedBy: string;
}

export interface IStudents {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  school_name: string;
  leadership_points: string;
}
