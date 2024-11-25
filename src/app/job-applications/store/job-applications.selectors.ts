import { RootState } from 'store';

export const jobApplicationsSelector = (state: RootState) => state.jobApplications.jobApplications;
export const jobApplicationsLoadingSelector = (state: RootState) => state.jobApplications.pending;
export const jobApplicationsErrorSelector = (state: RootState) => state.jobApplications.errors;
