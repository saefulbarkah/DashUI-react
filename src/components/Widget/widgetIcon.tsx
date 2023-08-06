import { theme } from '@/theme/theme';
import {
  Box,
  BoxProps,
  PaletteColor,
  PaletteOptions,
  alpha,
  styled,
} from '@mui/material';

export type TwidgetIcon = BoxProps & {
  color: string;
  icon?: React.ReactNode;
  colorSchema?: keyof PaletteOptions;
};

const Icon = styled(Box)<TwidgetIcon>(({ color, theme }) => ({
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '6px',
  backgroundColor: alpha(color, 0.2),
  color: `${color}`,
}));

export const WidgetIcon = ({
  colorSchema = 'primary',
  icon,
  ...props
}: Partial<TwidgetIcon>) => {
  const color = theme.palette[colorSchema] as PaletteColor;
  return (
    <Icon color={color.main} {...props}>
      {icon}
    </Icon>
  );
};
