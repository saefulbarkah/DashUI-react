import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  alpha,
} from '@mui/material';
import React from 'react';

type TWidget = {
  name: string;
  icon: React.ReactNode;
};

export const Widget = ({ icon, name }: TWidget) => {
  return (
    <div>
      <Card sx={{ width: '251px', height: '157px' }}>
        <CardContent sx={{ padding: '24px' }}>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography
              fontWeight={'500'}
              fontSize={'16px'}
              color={'gray[800]'}
            >
              {name}
            </Typography>
            <Box
              sx={{
                bgcolor: 'cyan',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '6px',
              }}
            >
              {icon}
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};
