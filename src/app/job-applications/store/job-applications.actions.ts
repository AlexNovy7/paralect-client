import { createAsyncThunk } from '@reduxjs/toolkit';
import repository from 'repository';
import { ErrorResponse } from 'types/error.type';
import { JobApplication } from '../types/job-application.type';

export const getJobApplications = createAsyncThunk(
  'jobApplications/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await repository.get('job-applications');
      return response.data;
    } catch (error) {
      const errorMessage = (error as ErrorResponse)?.response?.data.message;
      return rejectWithValue({ error: errorMessage });
    }
  }
);

export const deleteJobApplication = createAsyncThunk(
  'jobApplications/delete',
  async (ids: string| string[], { rejectWithValue }) => {
    try {
      const response = await repository.post('job-applications/delete', { ids });
      return response.data;
    } catch (error) {
      const errorMessage = (error as ErrorResponse)?.response?.data.message;
      return rejectWithValue({ error: errorMessage });
    }
  }
);

export const changeJobApplicationStatus = createAsyncThunk(
  'jobApplications/changeStatus',
  async ({ ids, status }: { ids: string| string[]; status: string }, { rejectWithValue }) => {
    try {
      const response = await repository.post('job-applications/change-status', { ids, status });
      return response.data;
    } catch (error) {
      const errorMessage = (error as ErrorResponse)?.response?.data.message;
      return rejectWithValue({ error: errorMessage });
    }
  }
);
  
export const addJobApplication = createAsyncThunk(
  'jobApplications/add',
  async (applicationData: JobApplication , { rejectWithValue }) => {
    try {
      const response = await repository.post('job-applications/add', applicationData);
      return response.data;
    } catch (error) {
      const errorMessage = (error as ErrorResponse)?.response?.data.message;
      return rejectWithValue({ error: errorMessage });
    }
  }
);

export const editJobApplication = createAsyncThunk(
  'jobApplications/edit',
  async ({ id, applicationData }: { id: string; applicationData: JobApplication}, { rejectWithValue }) => {
    try {
      const response = await repository.post(`/job-applications/${id}/edit`, applicationData);
      return response.data;
    } catch (error) {
      const errorMessage = (error as Error).message;
      return rejectWithValue({ error: errorMessage });
    }
  }
);