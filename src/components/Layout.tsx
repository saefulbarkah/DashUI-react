'use client';
import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { Sidebar, sidebarWidth } from './Sidebar';
import { Navbar } from './Navbar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          px: 3,
          py: 8,
          width: { sm: `calc(100% - ${sidebarWidth}px)` },
          minHeight: `calc(100vh)`,
        }}
        component={'main'}
      >
        {children}
      </Box>
    </Box>
  );
}
