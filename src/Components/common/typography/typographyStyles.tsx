import { fontWeight, letterSpacing } from "@mui/system";

export const typographyStyles = {
    heroheading: {
        fontSize: '4rem',
        width: '100%',
        margin: '0 auto',
        color: '#ffffff',
        fontFamily: 'PT Sans, sans-serif',
        fontWeight: 'bolder',
        textAlign: 'center',
        lineHeight: 1.1,
    },
    heroRecipeHeading: {
        fontSize: '3.5rem',
        width: '90%',
        margin: '0 auto',
        color: '#ffffff',
        fontFamily: 'PT Sans, sans-serif',
        fontWeight: 'bold',
        padding: '1rem 1.5rem',
        fontStyle: 'oblique',
    },

    heading: {
        width: '100%',
        fontFamily: 'PT Sans, sans-serif',
        fontSize: 'min(2rem, 3rem)',
        fontWeight: 'bold',
        lineHeight: 1.3
    },
    subHeading: {
        width: '100%',
        fontFamily: 'PT Sans, sans-serif',
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: '2rem 0'
    },
    pHero: {
        width: '100%',
        textAlign: 'center',
        padding: '1rem 1.25rem',
        color: '#ffffff',
        fontFamily: 'Nunito, sans-serif',
        fontSize: '18px',
        lineHeight: 1.6,
    },
    pBody: {
        fontSize: '18px',
        fontWeight: 500,
        margin: '1rem 0',
        fontFamily: 'Nunito, sans-serif',
        lineHeight: 1.8,
    },

    // recipe card
    recipesDescription:{
        color: '#3A3B3C',
        fontSize: '1rem',
        fontFamily: 'Nunito, sans-serif',
        lineHeight: 1.6,
    },

    recipesLink: {
        textDecoration: 'none',
        color: 'black',
        fontSize: '1.5rem',
        letterSpacing: '0.5px',
        fontWeight: 'bold',
        fontFamily: 'PT Sans, sans-serif',
        transition: 'all 0.3s ease',
        '&:hover':{
            textDecoration: 'underline',
            color: '#AE150D'
        }
    },
}

