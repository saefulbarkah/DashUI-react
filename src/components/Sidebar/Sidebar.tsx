'use client';
import { sidebarRoute } from '@/lib/route';
import { Drawer, List, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { SidebarItem } from './SidebarItem';
import { SidebarCollapse } from './SidebarCollapse';
import { usePathname } from 'next/navigation';

export const sidebarWidth = 256;

export const Sidebar = () => {
  const path = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sidebarWidth,
          boxSizing: 'border-box',
        },
      }}
      PaperProps={{
        sx: { bgcolor: '#212B36' },
      }}
      anchor="left"
    >
      <Toolbar>
        <Typography fontSize={26} fontWeight={900} color={'white'}>
          Dash UI
        </Typography>
      </Toolbar>
      <List component={'nav'} disablePadding sx={{ color: '#919EAB' }}>
        {sidebarRoute.map((item, index) =>
          item.child ? (
            <SidebarCollapse route={item} key={index} />
          ) : (
            <SidebarItem key={index} route={item} />
          )
        )}
      </List>
    </Drawer>
  );
};
