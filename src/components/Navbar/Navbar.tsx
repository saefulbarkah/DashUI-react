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
      elevation={0}
      sx={{
        width: { sm: `calc(100% - ${sidebarWidth}px)` },
        ml: { sm: `${sidebarWidth}px` },
        bgcolor: 'white',
        color: 'gray',
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
