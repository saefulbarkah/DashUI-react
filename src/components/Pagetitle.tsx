import { Typography } from '@mui/material';
import React from 'react';

export const Pagetitle = ({ children }: React.PropsWithChildren) => {
  return (
    <Typography variant="h5" fontWeight={700} color={'white'}>
      {children}
    </Typography>
  );
};
