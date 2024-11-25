import { JobApplication } from "./job-application.type";

export interface JobApplicationState {
  jobApplications: JobApplication[]; 
  pending: {
    getJobApplications: boolean; 
    delete: boolean; 
    changeStatus: boolean;
    add: boolean;
    edit: boolean;
  };
  errors: {
    getJobApplications: string | null; 
    delete: string | null;
    changeStatus: string | null; 
    add: string | null; 
    edit: string | null; 
  };
}