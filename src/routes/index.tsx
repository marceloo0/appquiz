import React from 'react';
import { useAuth } from '@hooks/useAuth';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { data } = useAuth();

  return data.id ? <AuthRoutes /> : <AppRoutes />;
}
