import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

export const Pagetitle = ({ children, color = 'white' }: TypographyProps) => {
  return (
    <Typography variant="h5" fontWeight={700} color={color}>
      {children}
    </Typography>
  );
};
