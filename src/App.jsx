import { useEffect, useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Alert from './comp/Alert';
import ProtectedRoute from './ProtectRouter';

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
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
         
        </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
