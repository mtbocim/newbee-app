import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffbe0b',
            light: '#ffbe0b',
            contrastText: '#304d4a',
        },
        secondary: {
            main: '#00796b',
        },
        background: {
            // Table head, page background color
            default: '#ffffff', //"#ffedd5"<=== I really think (and so does MUI) the white is better
            paper: '#bab6b6',
        },
        info: {
            main: '#009688',
            dark: '#10776f',
        },
    },
    typography: {
        fontFamily: '"Montserrat", sans-serif',
    },
});

export default theme;
