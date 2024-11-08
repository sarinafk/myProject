import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Timeline from './pages/Timeline';
import UserProfile from './pages/UserProfile';
import UserSearch from './pages/UserSearch';
import NewPost from './pages/NewPost';
import Navbar from './components/Navbar';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Timeline />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/:username"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <UserSearch />
              </ProtectedRoute>
            }
          />
          <Route
            path="/newpost"
            element={
              <ProtectedRoute>
                <NewPost />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
