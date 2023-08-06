import {
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

type sidebarChild = {
  name: string;
  path: string;
};

export type TSidebarItem = ListItemButtonProps &
  React.PropsWithChildren & {
    isActive?: boolean;
    route: {
      icon: React.ReactNode;
      name: string;
      path: string | null;
      child?: sidebarChild[];
    };
  };

export const SidebarItem = ({
  route,
  children,
  isActive = false,
  ...props
}: TSidebarItem) => {
  if (route.path === null) {
    return (
      <ListItemButton
        sx={{
          color: isActive ? 'white' : '#919EAB',
          transition: 'color 0.2s',
          '&:hover': { color: 'white' },
        }}
        {...props}
      >
        <ListItemIcon sx={{ mr: -4 }}>{route.icon}</ListItemIcon>
        <ListItemText primary={route.name} />
        {children}
      </ListItemButton>
    );
  }
  return (
    <Link href={`${route.path}`} passHref style={{ textDecoration: 'none' }}>
      <ListItemButton
        sx={{
          color: isActive ? 'white' : '#919EAB',
          transition: 'color 0.2s',
          '&:hover': { color: 'white' },
        }}
        {...props}
      >
        <ListItemIcon sx={{ mr: -4 }}>{route.icon}</ListItemIcon>
        <ListItemText primary={route.name} />
        {children}
      </ListItemButton>
    </Link>
  );
};
