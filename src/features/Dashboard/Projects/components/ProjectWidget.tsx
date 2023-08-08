import { Widget } from '@/components/Widget/Widget';
import { WidgetContent } from '@/components/Widget/WidgetContent';
import { WidgetHeader } from '@/components/Widget/WidgetHeader';
import { WidgetTitle } from '@/components/Widget/WidgetTitle';
import { TwidgetIcon, WidgetIcon } from '@/components/Widget/widgetIcon';
import { theme } from '@/theme/theme';
import {
  PaletteColor,
  PaletteOptions,
  Stack,
  Typography,
  styled,
} from '@mui/material';

type TProjectWidget = Partial<TwidgetIcon> & {
  count: number | string;
  completed?: number | string;
  completedTextColor?: keyof PaletteOptions;
  name: string;
};

type TStrongtext = React.HTMLAttributes<HTMLSpanElement> & {
  textColor: string;
};

const StrongText = styled('span')<TStrongtext>(({ textColor }) => ({
  fontWeight: 700,
  fontSize: '14px',
  color: textColor,
}));

export const ProjectWidget = ({
  name,
  colorSchema = 'primary',
  icon,
  count = 0,
  completed = 0,
  completedTextColor = 'dark',
}: TProjectWidget) => {
  const completedText = theme.palette[completedTextColor] as PaletteColor;

  return (
    <Widget>
      <WidgetHeader
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <WidgetTitle name={name} />
        <WidgetIcon icon={icon} colorSchema={colorSchema} />
      </WidgetHeader>
      <WidgetContent>
        <Stack>
          <Typography fontWeight={'700'} fontSize={'42px'}>
            {count}
          </Typography>
          <Typography fontWeight={'400'} fontSize={'12px'}>
            <StrongText textColor={completedText.main}>{completed}</StrongText>
            <span> Completed</span>
          </Typography>
        </Stack>
      </WidgetContent>
    </Widget>
  );
};
