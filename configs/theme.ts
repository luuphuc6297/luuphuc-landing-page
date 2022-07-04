import { createTheme } from '@mui/material/styles';

const AvenirNextLTProHeavyOTF = '/fonts/AvenirNextPro/AvenirNextLTPro-Heavy.otf';
const AvenirNextLTProMediumOTF = '/fonts/AvenirNextPro/AvenirNextLTPro-Medium.otf';
const AvenirNextLTProRegularOTF = '/fonts/AvenirNextPro/AvenirNextLTPro-Regular.otf';

declare module '@mui/material/styles/createTypography' {
    interface TypographyOptions {
        heavy?: string;
        medium?: string;
        regular?: string;
    }
    interface Typography {
        heavy?: string;
        medium?: string;
        regular?: string;
    }
}

const AvenirNextLTProHeavy = `@font-face {
    font-family: Avenir Next Pro Heavy;
    src: url(${AvenirNextLTProHeavyOTF}) format("opentype");
}`;

const AvenirNextLTProMedium = `@font-face {
    font-family: Avenir Next Pro Medium;
    src: url(${AvenirNextLTProMediumOTF}) format("opentype");
}`;

const AvenirNextLTProRegular = `@font-face {
    font-family: Avenir Next Pro;
    src: url(${AvenirNextLTProRegularOTF}) format("opentype");
}`;

const theme = createTheme({
    palette: {
        primary: {
            main: '#383B50',
        },
    },
    typography: {
        fontFamily: ['Avenir Next Pro'].join(','),
        heavy: 'Avenir Next Pro Heavy',
        medium: 'Avenir Next Pro Medium',
        regular: 'Avenir Next Pro Regular',
        h1: { fontSize: 48, fontWeight: 700, lineHeight: 1.2, fontFamily: 'Avenir Next Pro Heavy' },
        caption: {
            fontFamily: 'Avenir Next Pro',
            fontWeight: 400,
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontFamily: 'Avenir Next Pro',
                    fontSize: 14,
                    fontWeight: 400,
                    fontStyle: 'normal',
                    color: '#383B50',
                    borderColor: '#C5CEE0',
                    lineHeight: '20px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'Avenir Next Pro',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '20px',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
            ${AvenirNextLTProHeavy}
            ${AvenirNextLTProMedium}
            ${AvenirNextLTProRegular}
            `,
        },
    },
    shape: {
        borderRadius: 8,
    },
});

export default theme;
