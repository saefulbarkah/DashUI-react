'use client';
import { Pagetitle } from '@/components/Pagetitle';
import { Box, Button, Stack } from '@mui/material';
import React from 'react';
import ProjectLists from './components/ProjectLists';
import ActiveProject from './components/ActiveProject';

export const Projects = () => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: 191,
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      />
      <Stack sx={{ position: 'relative' }} spacing={'36px'}>
        <Stack sx={{ position: 'relative' }} gap={4}>
          <Stack
            direction={'row'}
            width={'100%'}
            justifyContent={'space-between'}
          >
            <Pagetitle>Projects</Pagetitle>
            <Button variant="contained" color="light">
              Create new project
            </Button>
          </Stack>
        </Stack>
        <Stack spacing={'26px'}>
          <ProjectLists />
          <ActiveProject />
        </Stack>
      </Stack>
    </>
  );
};
