// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from './store';

import Dashboard from './Dashboard'; 
import Forgotpassword from './Forgotpassword';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import Footer from './Footer';



function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Provider store={store}>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
       
        </Routes>
      </BrowserRouter>
      <Footer/>
    </Provider>
  );
}

export default App;
