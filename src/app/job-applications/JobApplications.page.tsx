import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobApplications, deleteJobApplication, addJobApplication, editJobApplication } from './store/job-applications.actions';
import { jobApplicationsSelector } from './store/job-applications.selectors';
import { JobApplication } from './types/job-application.type';
import JobApplicationDialog from './components/job-application-dialog';
import JobApplicationList from './components/job-application-list';
import AddJobApplicationButton from './components/add-job-application-button';
import DeleteJobApplicationButton from './components/delete-job-application-button';
import { Box, Typography } from '@mui/material';

const JobApplicationsPage: React.FC = () => {
  const dispatch = useDispatch();
  const jobApplications = useSelector(jobApplicationsSelector);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [initialData, setInitialData] = useState<JobApplication | null>(null);

  useEffect(() => {
    dispatch<any>(getJobApplications());
  }, [dispatch]);

  const handleDelete = () => {
    if (selectedIds.length > 0) {
      dispatch<any>(deleteJobApplication(selectedIds)).then(() => {
        dispatch<any>(getJobApplications());
      });
    }
  };

  const handleRowClick = (rowData: JobApplication) => {
    setIsEditing(true);
    setInitialData({
      company: rowData.company || '',
      jobTitle: rowData.jobTitle || '',  
      salaryRange: rowData.salaryRange ?? '',  
      status: rowData.status ?? '', 
      note: rowData.note ?? ''  
    });
    setSelectedIds([rowData.id ?? '']);
    setOpenDialog(true);
  };

  const handleSelectionChange = (newSelection: string[]) => {
    setSelectedIds(newSelection);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setIsEditing(false);
    setInitialData(null);
  };

  const handleSubmit = (formData: JobApplication) => {
    if (isEditing) {
      dispatch<any>(editJobApplication({ id: selectedIds[0], applicationData: formData })).then(() => {
        dispatch<any>(getJobApplications());
        setOpenDialog(false);
      });
    } else {
      dispatch<any>(addJobApplication(formData)).then(() => {
        dispatch<any>(getJobApplications());
        setOpenDialog(false);
      });
    }
  };

  const handleAddNew = () => {
    setIsEditing(false);
    setInitialData({ company: '', jobTitle: '', salaryRange: '', status: '', note: '' });
    setOpenDialog(true);
  };

  return (
    <Box sx={{ height: 'auto', width: '95%', padding: '20px' }}>
      <Typography variant="h4" component="h1" sx={{ marginBottom: '20px' }}>
        Job Applications List
      </Typography>

      <Box sx={{ display: 'flex', marginBottom: '20px' }}>
        <AddJobApplicationButton onAddNew={handleAddNew} />
        <DeleteJobApplicationButton onDelete={handleDelete} />
      </Box>

      <JobApplicationList
        jobApplications={jobApplications}
        onRowClick={handleRowClick}
        onSelectionChange={handleSelectionChange}
      />

      <JobApplicationDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onSubmit={handleSubmit}
        initialData={initialData}
        isEditing={isEditing}
      />
    </Box>
  );
};

export default JobApplicationsPage;
