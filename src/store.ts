import { configureStore } from "@reduxjs/toolkit";
import { jobApplicationsSlice }  from "app/job-applications/store/job-applications.slice";




const store = configureStore({
  reducer: {
   
    
    jobApplications: jobApplicationsSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
