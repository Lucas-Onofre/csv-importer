/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { createContext, useState } from 'react';

const AppContext = createContext({
  csvFile: null as File | null,
  updateCsvFile: (file: File | null) => {},
});

const AppProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [csvFile, setCsvFile] = useState<File | null>(null);

  const updateCsvFile = (file: File | null) => {
    setCsvFile(file);
  }

  return (
    <AppContext.Provider value={{ csvFile, updateCsvFile }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };