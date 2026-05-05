import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking local storage for a session
    const savedUser = localStorage.getItem('pc-eco-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulate API call
    const mockUser = { email, name: email.split('@')[0], id: '123' };
    setUser(mockUser);
    localStorage.setItem('pc-eco-user', JSON.stringify(mockUser));
    return true;
  };

  const signup = (userData) => {
    // Simulate signup
    const mockUser = { ...userData, id: Date.now().toString() };
    setUser(mockUser);
    localStorage.setItem('pc-eco-user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pc-eco-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
