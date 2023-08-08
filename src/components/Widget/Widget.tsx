import { Card, CardContent, CardProps } from '@mui/material';
import React from 'react';

export type Twidget = CardProps & {};

const Widget = ({ children }: Twidget) => {
  return (
    <Card
      sx={{
        height: '157px',
        boxShadow:
          '0px 1px 2px 0px rgba(21, 30, 40, 0.08), 0px 2px 4px 0px rgba(13, 23, 33, 0.08);',
      }}
      elevation={0}
    >
      <CardContent sx={{ padding: '24px' }}>{children}</CardContent>
    </Card>
  );
};

export { Widget };
