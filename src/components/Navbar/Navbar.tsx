'use client';
import {
  AppBar,
  Avatar,
  Badge,
  BadgeProps,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  styled,
} from '@mui/material';
import React, { useState } from 'react';
import { sidebarWidth } from '../Sidebar';
import { FiBell } from 'react-icons/fi';
import UserMenu from './UserMenu';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${sidebarWidth}px)` },
        ml: { sm: `${sidebarWidth}px` },
        bgcolor: 'white',
        color: 'gray',
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
          <TextField label="Search" size="small" />
          <Box display={'flex'} alignItems={'center'} gap={'10px'}>
            <IconButton>
              <StyledBadge badgeContent={4} color="error">
                <FiBell />
              </StyledBadge>
            </IconButton>
            <UserMenu />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
