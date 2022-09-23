import { createTheme } from '@mui/material/styles'
import { colors, ColorsInterface } from './thems/color'
const theme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    neutral: {
      main: '#778899',
    },
    background: {
      paper: '#0b1d32',
      default: '#081422',
    },
    text: {
      primary: '#fff',
    },
    border: {
      main: '#133153',
    },
  },
  typography: {
    fontFamily: ['Ubuntu', '-apple-system', 'BlinkMacSystemFont', 'monospace', 'sans-serif'].join(','), // -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif
  },
  colors,
})

declare module '@mui/material/styles' {
  interface Theme {
    colors: ColorsInterface
  }
  interface Palette {
    neutral: Palette['primary']
    border: Palette['primary']
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary']
    border: PaletteOptions['primary']
  }
  interface ThemeOptions {
    colors?: ColorsInterface
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    neutral: true
  }
}

export default theme
