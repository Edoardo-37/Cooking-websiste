export const navStyles = {
    appBar: {
        background: '#ffffff',
        color: '#000000',
        borderBottom: '5px solid #4974a5',
        position: 'sticky',
        top: 0,
    },
    
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'space-between',
    },

    brandName: {
        fontSize: '1.75rem',
        fontWeight: 'bold',
        fontFamily: 'PT Sans, sans-serif'
    },
        
    navLinks: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',
        display:{
            xs: 'none',
            sm: 'none',
            md: 'inline',
            lg: 'inline'
        },
        '&:hover': {
            textDecoration: 'underline',
            backgroundColor: 'transparent'
        },
    },
    navburgerLinks: {
        color: '#000000',
        fontWeight: 'bold',
        borderRadius: '20px',
        fontSize: '1rem',
        '&:hover': {
            backgroundColor: 'darkred',
            color: '#ffffff',
        },
    },
};
