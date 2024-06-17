import React, { createContext, useState } from 'react';

export const UserPreferencesContext = createContext();

export const UserPreferencesProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    theme: 'light',
    fontSize: '16px',

  });


  const changeBaseFontSize = (size) => {
    setPreferences(prevPreferences => ({
      ...prevPreferences,
      fontSize: size,
    }));
    document.documentElement.style.setProperty('--font-size-base', size);
  };

  return (
    <UserPreferencesContext.Provider value={{ preferences, setPreferences, changeBaseFontSize }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};
