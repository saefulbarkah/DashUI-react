import {
  Badge,
  BadgeProps,
  Box,
  BoxProps,
  IconButton,
  Menu,
  MenuItem,
  MenuProps,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import React from 'react';
import { FiBell } from 'react-icons/fi';
import { useNotificationStore } from './store';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

type TNotif = BadgeProps & {
  counter?: string | number | null;
  icon?: React.ReactNode;
};

export const Notification = ({ children, ...props }: BoxProps) => {
  return <Box {...props}>{children}</Box>;
};

export const NotificationButon = ({
  counter = '0',
  color = 'primary',
  icon,
  children,
  ...props
}: TNotif) => {
  const open = useNotificationStore((state) => state.anchorEl);
  const setElement = useNotificationStore((state) => state.setAnchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setElement(event.currentTarget);
  };

  return (
    <Box>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <StyledBadge badgeContent={counter} color={color} {...props}>
          {icon ? icon : <FiBell />}
        </StyledBadge>
      </IconButton>
      {children}
    </Box>
  );
};

export const NotificationContent = ({
  children,
  ...props
}: Omit<MenuProps, 'open'>) => {
  const open = useNotificationStore((state) => state.anchorEl);
  const setElement = useNotificationStore((state) => state.setAnchorEl);

  const handleClose = () => {
    setElement(null);
  };
  return (
    <Menu
      id="basic-menu"
      anchorEl={open}
      open={Boolean(open)}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      sx={{
        '& .MuiPaper-root': {
          width: 300,
          height: 300,
          borderRadius: '10px',
          px: '20px',
        },
      }}
      {...props}
    >
      {children}
    </Menu>
  );
};
