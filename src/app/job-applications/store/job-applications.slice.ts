import { createSlice } from '@reduxjs/toolkit';
import { changeJobApplicationStatus, deleteJobApplication, getJobApplications, addJobApplication, editJobApplication } from './job-applications.actions';
import { JobApplicationState } from '../types/job-application-state';

const initialState: JobApplicationState = {
  jobApplications: [],
  pending: {
    getJobApplications: false,
    delete: false,
    changeStatus: false,
    add: false,
    edit: false,
  },
  errors: {
    getJobApplications: null,
    delete: null,
    changeStatus: null,
    add: null,
    edit: null,
  },
};

export const jobApplicationsSlice = createSlice({
  name: 'jobApplications',
  initialState,
  reducers: {
    resetJobApplications: (state) => {
      state.jobApplications = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJobApplications.pending, (state) => {
        state.pending.getJobApplications = true;
        state.errors.getJobApplications = null;
      })
      .addCase(getJobApplications.fulfilled, (state, { payload }) => {
        state.pending.getJobApplications = false;
        state.jobApplications = payload;
      })
      .addCase(getJobApplications.rejected, (state, action: any & { payload: any }) => {
        state.pending.getJobApplications = false;
        state.errors.getJobApplications = action.payload.error;
      })
      .addCase(deleteJobApplication.pending, (state) => {
        state.pending.delete = true;
        state.errors.delete = null;
      })
      .addCase(deleteJobApplication.fulfilled, (state, { payload }) => {
        state.pending.delete = false;
        state.jobApplications = state.jobApplications.filter(app => app.id !== payload.id);
      })
      .addCase(deleteJobApplication.rejected, (state, action: any & { payload: any }) => {
        state.pending.delete = false;
        state.errors.delete = action.payload.error;
      })
      .addCase(changeJobApplicationStatus.pending, (state) => {
        state.pending.changeStatus = true;
        state.errors.changeStatus = null;
      })
      .addCase(changeJobApplicationStatus.fulfilled, (state, { payload }) => {
        state.pending.changeStatus = false;
        const app = state.jobApplications.find(app => app.id === payload.id);
        if (app) {
          app.status = payload.status;
        }
      })
      .addCase(changeJobApplicationStatus.rejected, (state, action: any & { payload: any }) => {
        state.pending.changeStatus = false;
        state.errors.changeStatus = action.payload.error;
      })
      .addCase(addJobApplication.pending, (state) => {
        state.pending.add = true;
        state.errors.add = null;
      })
      .addCase(addJobApplication.fulfilled, (state, { payload }) => {
        state.pending.add = false;
        state.jobApplications.push(payload);
      })
      .addCase(addJobApplication.rejected, (state, action: any & { payload: any }) => {
        state.pending.add = false;
        state.errors.add = action.payload.error;
      })
      .addCase(editJobApplication.pending, (state) => {
        state.pending.edit = true;
        state.errors.edit = null;
      })
      .addCase(editJobApplication.fulfilled, (state, { payload }) => {
        state.pending.edit = false;
        const appIndex = state.jobApplications.findIndex(app => app.id === payload.id);
        if (appIndex > -1) {
          state.jobApplications[appIndex] = payload;
        }
      })
      .addCase(editJobApplication.rejected, (state, action: any & { payload: any }) => {
        state.pending.edit = false;
        state.errors.edit = action.payload.error;
      });
  },
});

export const { resetJobApplications } = jobApplicationsSlice.actions;
export default jobApplicationsSlice.reducer;
