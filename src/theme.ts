import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// `extendTheme` is a new API
const theme = extendTheme({
    colorSchemes: {
        light: {
            // palette for light mode
            palette: {
                primary: {
                    main: '#002CC4',
                },
            },
        },
        dark: {
            // palette for dark mode
            palette: {
                primary: {
                    main: '#007FFF',
                },
            },
        },
    },
});

export default theme;
