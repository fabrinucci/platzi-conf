import React from 'react';
import { AppProvider } from './context';
import { MainRouter } from './routes/MainRouter';

export const App = () => {
  return (
    <AppProvider>
      <MainRouter />
    </AppProvider>
  )
}
