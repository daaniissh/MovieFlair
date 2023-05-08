import { useEffect, useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Alert from './comp/Alert';

function App() {
  
  const currentUser = localStorage.getItem('login')

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  console.log(!currentUser);


  return (
    <div className="min-h-screen flex flex-col">
        {/* <Alert/> */}
        
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
