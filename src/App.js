import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listing from "./Pages/Listing";
import AddTodo from "./Pages/AddTodo";
import VerifyEnv from "./Pages/VerifyEnv";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { auth } from "./Components/Firebase";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const fetchUserdata = async () => {
    auth.onAuthStateChanged(async (user) => console.log(user));
  };

  useEffect(() => {
    fetchUserdata();
  }, []);


  
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Listing /></ProtectedRoute>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-todo" element={<ProtectedRoute><AddTodo /></ProtectedRoute>} />
        <Route path="/verify-env" element={<ProtectedRoute><VerifyEnv /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
