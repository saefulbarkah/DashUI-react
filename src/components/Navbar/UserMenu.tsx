'use client';
import { theme } from '@/theme/theme';
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { FiActivity, FiLogOut, FiUser } from 'react-icons/fi';

const menus = [
  { name: 'Profile', path: '/', icon: <FiUser /> },
  { name: 'Activity Log', path: '/', icon: <FiActivity /> },
];

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar>
          <Image fill alt="none" src={'/assets/img/avatar/eful.jpg'} priority />
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          translate: '0 10px',
          '& .MuiPaper-root': {
            width: 184,
          },
        }}
      >
        <MenuItem>
          <Stack>
            <Typography
              fontSize={14}
              fontWeight={500}
              color={theme.palette.grey[900]}
            >
              Saeful Barkah
            </Typography>
            <Typography
              fontSize={13}
              fontWeight={500}
              color={theme.palette.grey[500]}
            >
              View my profile
            </Typography>
          </Stack>
        </MenuItem>
        <Divider />
        {menus.map((item, i) => (
          <MenuItem key={i} sx={{ color: theme.palette.grey[700] }}>
            <ListItemIcon sx={{ mr: -1 }}>{item.icon}</ListItemIcon>
            {item.name}
          </MenuItem>
        ))}
        <Divider />
        <MenuItem>
          <ListItemIcon sx={{ mr: -1 }}>
            <FiLogOut />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
