import { Typography } from '@mui/material';
import { typographyStyles } from '../common/typography/typographyStyles';

export const Footer = () => {
    return (
        <footer style={{background: '#4974a5', width: '100%'}}>
            <Typography sx={typographyStyles.pHero}> Copyright &copy;2025 -  Edoardo Massimetti </Typography>
        </footer>
    )
}

