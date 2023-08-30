import React from "react";
// Import required components and hooks from react-router-dom and other files
import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Footer, Navbar } from "./components";
import {
  About,
  AuthPage,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetail,
  UploadJob,
  UserProfile,
} from "./pages";
import { useSelector } from "react-redux";
// Layout component to control user access to routes based on authentication
function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  // If the user has a token (authenticated), allow access to child routes
  // Otherwise, navigate to the user authentication page with the current location state
  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to='/user-auth' state={{ from: location }} replace />
  );
}
// Main App component
function App() {
  // Access user information from Redux store
  const { user } = useSelector((state) => state?.user);
  return (
    <main className='bg-[#f7fdfd]'>
      <Navbar />

      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={<Navigate to='/find-jobs' replace={true} />}
          />
          <Route path='/find-jobs' element={<FindJobs />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/user-profile/:id?' element={<UserProfile />} />

          <Route path={"/company-profile/:id?"} element={<CompanyProfile />} />
          <Route path={"/upload-job"} element={<UploadJob />} />
          <Route path={"/job-detail/:id"} element={<JobDetail />} />
        </Route>

        <Route path='/about-us' element={<About />} />
        <Route path='/user-auth' element={<AuthPage />} />
      </Routes>
      {user && <Footer />}
    </main>
  );
}
// Export the App component as the default export
export default App;
