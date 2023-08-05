import { theme } from '@/theme/theme';
import {
  Box,
  BoxProps,
  Card,
  CardContent,
  PaletteColor,
  PaletteColorOptions,
  PaletteOptions,
  Stack,
  Typography,
  alpha,
  styled,
} from '@mui/material';
import React from 'react';

type Twidget = {
  name: string;
  icon?: React.ReactNode;
  colorSchema?: keyof PaletteOptions;
};

type TwidgetIcon = Pick<Twidget, 'icon'> &
  BoxProps & {
    color: string;
  };

const WidgetIcon = styled(Box)<TwidgetIcon>(({ color, theme }) => ({
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '6px',
  backgroundColor: alpha(color, 0.2),
  color: `${color}`,
}));

export const Widget = ({ icon, name, colorSchema = 'primary' }: Twidget) => {
  const color = theme.palette[colorSchema] as PaletteColor;

  return (
    <div>
      <Card
        sx={{
          height: '157px',
          boxShadow:
            '0px 1px 2px 0px rgba(21, 30, 40, 0.08), 0px 2px 4px 0px rgba(13, 23, 33, 0.08);',
        }}
        elevation={0}
      >
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
            <WidgetIcon color={color.main}>{icon}</WidgetIcon>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};
