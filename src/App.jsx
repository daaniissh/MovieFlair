import { useEffect, useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Alert from './comp/Alert';
import ProtectedRoute from './ProtectRouter';
import SignUp from './pages/Signup';
// import ForPass from './pages/ForgotPassword';
import ForgotPassword from './pages/ForgotPassword';
import ProtectedRouterAfterLogIn from './ProtuctRouterLogin';

function App() {

  const currentUser = localStorage.getItem('login')

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />
  //   }
  //   return children
  // }

  console.log(!currentUser);


  return (
    <div className="min-h-screen flex flex-col">
      {/* <Alert/> */}

      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRouterAfterLogIn />}>
            {/* <Route path="/" element={<LoginPage />} /> */}
            <Route path="/login" element={<LoginPage />} />

          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} exact />

          </Route>

          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
