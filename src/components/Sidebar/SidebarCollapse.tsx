import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import { SidebarItem, TSidebarItem } from './SidebarItem';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import { BsDot } from 'react-icons/bs';

type TSidebarCollapse = TSidebarItem & {};

export const SidebarCollapse = ({ route, isActive }: TSidebarCollapse) => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <>
      <SidebarItem
        route={route}
        onClick={() => setOpen((state) => !state)}
        isActive={open}
      >
        {open ? <FiChevronDown /> : <FiChevronUp />}
      </SidebarItem>
      <Collapse in={open} timeout={'auto'} unmountOnExit>
        <List component={'div'} disablePadding>
          {route.child?.map((item, i) => (
            <ListItemButton
              LinkComponent={'a'}
              sx={{
                pl: '30px',
                color: item.path === path ? 'white' : '#919EAB',
                transition: 'color 0.2s',
                '&:hover': { color: 'white' },
              }}
              key={i}
            >
              <ListItemIcon sx={{ mr: -4, color: '#919EAB' }}>
                <BsDot size={25} />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};
