import { PaletteColorOptions, createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

declare module '@mui/material/styles' {
  interface Palette {
    dark: PaletteColorOptions;
  }

  interface PaletteOptions {
    dark?: PaletteColorOptions;
  }
}

const inter = Inter({ subsets: ['latin'] });

export const theme = createTheme({
  palette: {
    mode: 'light',
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
    error: {
      main: '#DC3545',
    },
    warning: {
      main: '#FFC107',
    },
    dark: {
      main: '#212529',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});
