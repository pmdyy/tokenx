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
      border: '#133153',
    },
    background: {
      paper: '#0b1d32',
      default: '#081422',
    },
  },
  typography: {
    fontFamily: ['Ubuntu', '-apple-system', 'BlinkMacSystemFont', 'monospace', 'sans-serif'].join(','), // -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif
  },
  // components: {
  //   MuiPaper: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: colors.darkBlue1,
  //       },
  //     },
  //   },
  // },
  colors,
})

declare module '@mui/material/styles' {
  interface Theme {
    colors: ColorsInterface
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: ColorsInterface
  }
}

export default theme
