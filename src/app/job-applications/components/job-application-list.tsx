import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { JobApplicationListProps } from '../types/job-application-list.props';

const JobApplicationList: React.FC<JobApplicationListProps> = ({
  jobApplications,
  onRowClick,
  onSelectionChange
}) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'company', headerName: 'Компания', width: 250 },
    { field: 'jobTitle', headerName: 'Вакансия', width: 250 },
    { field: 'salaryRange', headerName: 'Зарплатная вилка', width: 150 },
    { field: 'status', headerName: 'Статус отклика', width: 150 },
    { field: 'note', headerName: 'Заметка', width: 300 }
  ];

  return (
    <DataGrid
      rows={jobApplications}
      columns={columns}
      autoHeight
      pageSize={jobApplications.length}
      rowsPerPageOptions={[jobApplications.length]}
      disableSelectionOnClick
      checkboxSelection
      onSelectionModelChange={(newSelection) => {
        onSelectionChange(newSelection as string[]);
      }}
      onRowClick={({ row }) => onRowClick(row)}
      sx={{
        '& .MuiDataGrid-row': {
          cursor: 'pointer',
        },
        '& .MuiDataGrid-columnHeader': {
          cursor: 'default',
        },
        '& .Mui-selected': {
          backgroundColor: 'transparent',
        }
      }}
    />
  );
};

export default JobApplicationList;
