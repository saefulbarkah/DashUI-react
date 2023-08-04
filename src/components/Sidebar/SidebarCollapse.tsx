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
import { useSidebarCollapse } from './store';
import { sidebarRoute } from '@/lib/route';

type TSidebarCollapse = TSidebarItem & {};

export const SidebarCollapse = ({ route }: TSidebarCollapse) => {
  const isOpen = useSidebarCollapse((state) => state.open);
  const toggleOpen = useSidebarCollapse((state) => state.toggleOpen);
  const path = usePathname();

  const statusOpen = isOpen[route.name] ? false : true;

  React.useEffect(() => {
    sidebarRoute.map((menu) => {
      const find = menu.child.find((item) => item.path === path);
      if (find) {
        toggleOpen(menu.name, true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SidebarItem
        route={route}
        onClick={() => toggleOpen(route.name, statusOpen)}
        isActive={isOpen[route.name]}
      >
        {isOpen[route.name] ? <FiChevronDown /> : <FiChevronUp />}
      </SidebarItem>
      <Collapse in={isOpen[route.name]} timeout={'auto'} unmountOnExit>
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
