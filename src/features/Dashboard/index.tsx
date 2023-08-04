'use client';
import { Pagetitle } from '@/components/Pagetitle';
import { Widget } from '@/components/Widget/Widget';
import { Box, Button, Stack, Typography } from '@mui/material';

import { FiBriefcase } from 'react-icons/fi';
import React from 'react';
export const Dashboard = () => {
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

        <Stack direction={'row'} gap={10}>
          <Widget name="Project" icon={<FiBriefcase />} />
        </Stack>
      </Stack>
    </>
  );
};
