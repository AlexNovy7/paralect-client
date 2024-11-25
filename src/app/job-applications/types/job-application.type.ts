export interface JobApplication {
  id?: string; 
  company: string; 
  jobTitle: string; 
  salaryRange?: string; 
  status?: string; 
  note?: string;
  createdAt?: Date; 
  updatedAt?: Date;
}
