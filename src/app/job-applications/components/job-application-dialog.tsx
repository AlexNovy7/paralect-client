import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { JobApplication } from '../types/job-application.type';
import { JobApplicationDialogProps } from '../types/job-application-dialog.props';


const JobApplicationDialog: React.FC<JobApplicationDialogProps> = ({ open, onClose, onSubmit, initialData, isEditing }) => {
  const [formData, setFormData] = useState<JobApplication>({
    id: '',
    company: '',
    jobTitle: '',
    salaryRange: '',
    status: '',
    note: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ id: '', company: '', jobTitle: '', salaryRange: '', status: '', note: '' });
    }
  }, [initialData]);

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{isEditing ? 'Edit Application' : 'Add Application'}</DialogTitle>
      <DialogContent>
        <TextField
          label="Компания"
          fullWidth
          margin="normal"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
        <TextField
          label="Вакансия"
          fullWidth
          margin="normal"
          value={formData.jobTitle}
          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
        />
        <TextField
          label="Зарплатная вилка"
          fullWidth
          margin="normal"
          value={formData.salaryRange}
          onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
        />
        <TextField
          label="Статус"
          fullWidth
          margin="normal"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        />
        <TextField
          label="Заметка"
          fullWidth
          margin="normal"
          value={formData.note}
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">{isEditing ? 'Save' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default JobApplicationDialog;
