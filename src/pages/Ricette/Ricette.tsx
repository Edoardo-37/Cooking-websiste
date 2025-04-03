import { createTheme, ThemeProvider } from '@mui/material';
import { Box, Typography } from '@mui/material';
import FlatwareIcon from '@mui/icons-material/Flatware';

// components and sheets
import { Navbar } from '../../Components/Navbar/Navbar';
import { typographyStyles } from '../../Components/common/typography/typographyStyles';
import { RecipeCard } from '../../Components/Recipe-Card/RecipeCard';
import { Footer } from '../../Components/Footer/Footer';
import { recipeCardContent } from '../../Components/Recipe-Card/recipeCardContent';
import './ricette.css'

export const Ricette = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />

        <Box className='header'>
          <div className='content'>
            <FlatwareIcon sx={{ fontSize: '50px', color: '#ffffff' }} />
            <Typography sx={typographyStyles.heroheading}>Lista ricette</Typography>
            <Typography sx={typographyStyles.pHero}>Scopri la lista delle ricette divise per categorie di apparteneza; dai primi ai secondi.</Typography>
          </div>
        </Box>
        <Box className='recipes-list'>
          <Typography sx={typographyStyles.subHeading}>Primi piatti </Typography>
          <Typography sx={typographyStyles.pBody}>Un primo piatto è in genere a base di pasta o minestra che viene consumato all'inizio del pasto, ma che può essere, a volte, preceduto da uno o più antipasti.</Typography>
          <hr />
          <section className='list' aria-label='recipes list'>
            <RecipeCard recipe={recipeCardContent.zuppaDiPiselli} />
            <RecipeCard recipe={recipeCardContent.pastaAlPomodoro} />
            <RecipeCard recipe={recipeCardContent.risoZafferano} />
            <RecipeCard recipe={recipeCardContent.pastaFunghiPanna} />
          </section>
          <Typography sx={typographyStyles.subHeading}>Secondi piatti </Typography>
          <Typography sx={typographyStyles.pBody}>Un secondo piatto è in genere a base di <b>carne, pesce, formaggio o uova</b>, consumato dopo che, nel corso di un pasto, è stato servito un primo. <br /> Alcuni piatti possono fungere da antipasto come molti salumi; a seconda della quantità servita o usanze locali.</Typography>
          <hr />
          <section className='list' aria-label='recipes list'>
            <RecipeCard recipe={recipeCardContent.bocconciniPolloAlLimone} />
            <RecipeCard recipe={recipeCardContent.involtiniDiZucchine} />
          </section>
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
};

