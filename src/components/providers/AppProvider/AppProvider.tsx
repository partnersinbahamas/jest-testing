import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from "react";
import { CssBaseline } from '@mui/material';
import { ITheme } from '../../../helpers/theme';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

type Props = {
  children: ReactNode,
};

export const AppProvider: React.FC<Props> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}