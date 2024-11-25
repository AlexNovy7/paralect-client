import { JobApplication } from "./job-application.type";

export interface JobApplicationListProps {
    jobApplications: JobApplication[];
    onRowClick: (rowData: JobApplication) => void;
    onSelectionChange: (newSelection: string[]) => void;
  }