'use client';
import { AppBar, Box, TextField, Toolbar } from '@mui/material';
import React from 'react';
import { sidebarWidth } from '../Sidebar';
import UserMenu from './UserMenu';
import NotificationMenu from './NotificationMenu';

export const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { sm: `calc(100% - ${sidebarWidth}px)` },
        ml: { sm: `${sidebarWidth}px` },
        bgcolor: 'white',
        color: 'gray',
        py: '12px',
        boxShadow:
          '0px 1px 2px 0px rgba(21, 30, 40, 0.08), 0px 2px 4px 0px rgba(13, 23, 33, 0.08);',
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <TextField label="Search" size="small" id="search" />
          <Box display={'flex'} alignItems={'center'} gap={'10px'}>
            <NotificationMenu />
            <UserMenu />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
