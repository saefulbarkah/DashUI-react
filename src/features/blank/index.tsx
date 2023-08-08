'use client';
import { Pagetitle } from '@/components/Pagetitle';
import { Box } from '@mui/material';
import React from 'react';

export default function BlankPage() {
  return (
    <Box>
      <Pagetitle color={'dark.main'}>Blank page</Pagetitle>
    </Box>
  );
}
