import { JobApplication } from "./job-application.type";

export interface JobApplicationDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (formData: JobApplication) => void;
    initialData: JobApplication | null;
    isEditing: boolean;
  }
  