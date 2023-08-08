import { Typography } from '@mui/material';

type TWidgetTitle = {
  name: string;
};

export const WidgetTitle = ({ name }: TWidgetTitle) => {
  return (
    <Typography
      fontWeight={'500'}
      fontSize={'16px'}
      color={'gray[800]'}
      sx={{ textTransform: 'capitalize' }}
    >
      {name}
    </Typography>
  );
};
