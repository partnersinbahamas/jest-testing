import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from "react";
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

type Props = {
  children: ReactNode,
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}