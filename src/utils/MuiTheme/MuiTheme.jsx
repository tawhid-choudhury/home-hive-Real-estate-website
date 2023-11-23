import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#032e4b',
            contrastText: '#fff',
        },
        secondary: {
            main: '#b79537',
            contrastText: '#fff',
        },
    },
});

const SiteTheme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default SiteTheme;