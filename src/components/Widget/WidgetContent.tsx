import { Box, BoxProps } from '@mui/material';

export const WidgetContent = ({ children, ...props }: BoxProps) => {
  return <Box {...props}>{children}</Box>;
};
