import React from 'react';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { AddJobApplicationButtonProps } from '../types/add-job-application-button.props';

const AddJobApplicationButton: React.FC<AddJobApplicationButtonProps> = ({ onAddNew }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onAddNew}
      startIcon={<Add />}
      sx={{ marginRight: '5px' }}
    >
      Add New
    </Button>
  );
};

export default AddJobApplicationButton;
