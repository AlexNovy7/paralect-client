import React from 'react';
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { DeleteJobApplicationButtonProps } from '../types/delete-job-application-button.props';

const DeleteJobApplicationButton: React.FC<DeleteJobApplicationButtonProps> = ({ onDelete }) => {
  return (
    <Button
      variant="outlined"
      color="error"
      onClick={onDelete}
      startIcon={<Delete />}
    >
      Delete
    </Button>
  );
};

export default DeleteJobApplicationButton;
