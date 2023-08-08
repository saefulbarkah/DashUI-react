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
          mt: '90px',
          pt: '40px',
          minHeight: 'calc(100vh - 90px)',
          width: { sm: `calc(100% - ${sidebarWidth}px)` },
          backgroundColor: '#F4F6F8',
          position: 'relative',
        }}
        component={'main'}
      >
        {children}
      </Box>
    </Box>
  );
}
