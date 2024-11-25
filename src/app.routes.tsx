import SuspenseComponent from 'components/suspense';
import React, { FC, Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';



const PublicRoute: FC<{ element: any }> = ({ element: Element }) => (
  <Suspense fallback={<SuspenseComponent />}>
    <Element />
  </Suspense>
);


const JobApplicationsPage = React.lazy(() => import('app/job-applications'));


const AppRoutes = () => {
  return (
    <Routes>

      {/* PUBLIC */}

      <Route path={'/job-applications/*'} element={<PublicRoute element={JobApplicationsPage} />} />

      {/* DEFAULT */}

      <Route path="*" element={<Navigate to="/job-applications" />} />
    </Routes>
  );
};

export default AppRoutes;
