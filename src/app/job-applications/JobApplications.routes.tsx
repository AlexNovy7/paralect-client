import React, { FC, PropsWithChildren, Suspense } from 'react';
import {  Routes, Route } from 'react-router-dom';

const Suspended: FC<PropsWithChildren & { element: any }> = ({ element: Element }) => {
  return (
    <Suspense fallback={<div />}>
      <Element />
    </Suspense>
  );
};


const JobApplicationsPage = React.lazy(() => import('app/job-applications/JobApplications.page'));

const JobApplicationsRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspended element={JobApplicationsPage} />} />
    </Routes>
  );
};

export default JobApplicationsRoutes;
