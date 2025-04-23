import { Navbar } from './Components/Navbar/Navbar';
import { createTheme, ThemeProvider, Typography, Box, Button, } from '@mui/material';
import Link from '@mui/material/Link';
import { typographyStyles } from './Components/common/typography/typographyStyles';
import { useNavigate } from 'react-router';

// components and sheets
import { linkStyles } from './Components/common/link/linkStyles';
import { RecipeCard } from './Components/Recipe-Card/RecipeCard';
import { Footer } from './Components/Footer/Footer';
import { recipeCardContent } from './Components/Recipe-Card/recipeCardContent';
import './App.css';


export function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
  });
  const navigate = useNavigate()


  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box className='hero'>
          <div className='hero-content'>
            <Typography sx={typographyStyles.heroheading}>Ricette di tendenza</Typography>
            <hr />
            <Typography sx={typographyStyles.pHero}>Scopri le ricette più popolari del periodo. Non conosci il procedimento? <br /> Non preoccuparti, troverai tutte le informazioni per le loro preparazioni.</Typography>
            <Typography sx={typographyStyles.pHero}>Iscriviti ora per non perderti nuove ricette!</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Link sx={linkStyles.CTA} onClick={() => navigate('/form-iscrizione')}>Iscriviti</Link>
            </Box>
          </div>
        </Box>
        <section className='recipes' aria-label='Recipes'>
          <RecipeCard recipe={recipeCardContent.zuppaDiPiselli} />
          <RecipeCard recipe={recipeCardContent.pastaAlPomodoro} />
          <RecipeCard recipe={recipeCardContent.risoZafferano} />
          <RecipeCard recipe={recipeCardContent.bocconciniPolloAlLimone} />
          <RecipeCard recipe={recipeCardContent.involtiniDiZucchine} />
          <RecipeCard recipe={recipeCardContent.pastaFunghiPanna} />
        </section>
        <section className='moreInfo' aria-label='more-information'>
          <Typography sx={typographyStyles.pBody}>Queste erano solo le ricette in tendenza, per vedere l'elenco ricette diviso per categorie di piatto, scopri la <Link href="/ricette" sx={linkStyles.inPageLink}>pagina delle ricette.</Link> Per non perderti nuove ricette, <Link href="/form-iscrizione" sx={linkStyles.inPageLink}> iscriviti alla newsletter.</Link></Typography>
        </section>
        <Footer/>
      </ThemeProvider>
    </>
  );
}
