import { createTheme } from '@mui/material/styles'
import { colors, ColorsInterface } from './thems/color'
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['Ubuntu', '-apple-system', 'BlinkMacSystemFont', 'monospace', 'sans-serif'].join(','), // -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.darkBlue1,
        },
      },
    },
  },
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
