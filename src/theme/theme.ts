import { PaletteColorOptions, createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

declare module '@mui/material/styles' {
  interface CustomPalette {
    dark: PaletteColorOptions;
    danger: PaletteColorOptions;
    light: PaletteColorOptions;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    light: true;
  }
}

const inter = Inter({ subsets: ['latin'] });

export const theme = createTheme({
  palette: {
    primary: {
      main: '#624BFF',
    },
    secondary: {
      main: '#868E96',
    },
    success: {
      main: '#28A745',
    },
    info: {
      main: '#0DCAF0',
    },
    danger: {
      main: '#DC3545',
    },
    warning: {
      main: '#FFC107',
    },
    dark: {
      main: '#212529',
    },
    light: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#F2F2F2',
      contrastText: '#624BFF',
    },
  },

  typography: {
    fontFamily: inter.style.fontFamily,
    button: {
      textTransform: 'capitalize',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});
