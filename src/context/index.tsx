import React, { ReactNode } from 'react';

import { AuthContextProvider } from './authContext';
import { QuestionContextProvider } from './QuestionContext';

interface ContextProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: ContextProviderProps) => (
  <AuthContextProvider>
    <QuestionContextProvider>{children}</QuestionContextProvider>
  </AuthContextProvider>
);
