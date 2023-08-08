import { Stack, StackProps } from '@mui/material';

type TWidgetHeader = StackProps & {};

export const WidgetHeader = ({ children, ...props }: TWidgetHeader) => {
  return <Stack {...props}>{children}</Stack>;
};
