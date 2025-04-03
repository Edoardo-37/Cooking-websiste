import { Typography } from '@mui/material';
import { typographyStyles } from '../common/typography/typographyStyles';
import './footer.css'

export const Footer = () => {
    return (
        <footer>
            <Typography sx={typographyStyles.pHero}> Copyright &copy;2025 -  Edoardo Massimetti </Typography>
        </footer>
    )
}

