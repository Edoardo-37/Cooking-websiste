import { createTheme, Box, ThemeProvider, Typography} from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// components and sheets
import { Navbar } from '../../../Components/Navbar/Navbar';
import { Footer } from '../../../Components/Footer/Footer';
import { typographyStyles } from '../../../Components/common/typography/typographyStyles';
import { linkStyles } from '../../../Components/common/link/linkStyles';
import '../../../Components/common/recipePageContent/recipePageStyles.css';

const RisoZafferazno = ({recipePageContent}: any) => {
    const {heroBg, recipeTitle, recipeDescription, ingredienti, steps, dishType, prepTime, difficulty, portions, addInfoImg, addInfoImgAltText} = recipePageContent
    const theme = createTheme({
    typography: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
    },
    });
  return (
    <>
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box className='intro' sx={heroBg}>
                    <Typography sx={typographyStyles.heroRecipeHeading}>Le ricette</Typography>
            </Box>
            <Box className='recipe'>
                <article aria-label='Recipe-instructions'>
                    <section className='reviews'>
                        <Typography><b>Valutazione</b>:</Typography>
                        <StarRateIcon sx={{color: '#ae150d'}}/>
                        <StarRateIcon sx={{color: '#ae150d'}}/>
                        <StarRateIcon sx={{color: '#ae150d'}}/>
                        <StarRateIcon sx={{color: '#ae150d'}}/>
                        <StarOutlineIcon sx={{color: '#ae150d'}}/>
                        <Typography>4/5</Typography>
                    </section>
                    <Typography sx={typographyStyles.subHeading}>{recipeTitle}</Typography>
                    <Typography sx={typographyStyles.pBody}>{recipeDescription}</Typography>

                    <section className='ingredients'>
                        <Typography sx={[typographyStyles.pBody, {fontSize: '1.5rem', textAlign:'center', marginBottom:'1rem', fontFamily: 'PT Sans, sans-serif', letterSpacing: '1px'} ]}><b>Ingredienti</b></Typography>
                        <hr />
                        <ul>
                            {ingredienti.map((ingrediente: any, i:number) => (
                                <li key={i}><Typography sx={[typographyStyles.pBody, {marginTop: '0'}]}>{ingrediente}</Typography></li>
                            ))}
                        </ul>
                    </section>

                    <section className='steps'>
                        <Typography sx={[typographyStyles.pBody, {fontSize: '1.5rem',  fontFamily: 'PT Sans, sans-serif', letterSpacing: '1px'}]}><b>Preparazione</b></Typography>
                        <ol>
                        {steps.map((step: any, i:number) => (
                            <li key={i}><Typography sx={typographyStyles.pBody}>{step}</Typography></li>
                            ))}
                        </ol>
                    </section>
                    <Link href="/ricette" sx={[linkStyles.inPageLink, {display: 'flex', alignItems:'center', justifyContent:'center', padding: '1rem 1.5rem'}]}> <ArrowBackIcon/> Torna alla lista delle ricette </Link>
                </article>
                
                <aside className="additionalInfo">
                    <div className="additionalInfo-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/3565/3565418.png" alt="recipe icon for additional info section"/>
                    </div>
                    <div className="additionalInfo-content">
                        <ul>
                            <li>
                                <Typography variant="body1" sx={{
                                    backgroundColor: '#3D5926',
                                    color: '#ffffff',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '0.25rem',
                                    width: 'fit-content'
                                }}>{dishType}</Typography>
                            </li>
                            <li>
                                <Typography sx={typographyStyles.pBody}>Tempo di preparazione: <b>{prepTime}</b></Typography>
                            </li>
                            <li>
                                <Typography sx={typographyStyles.pBody}>Difficoltà: <b>{difficulty}</b></Typography>
                            </li>
                            <li>
                                <Typography sx={typographyStyles.pBody}>Porzioni: <b>{portions} Persone</b></Typography>
                            </li>
                        </ul>
                        <img width='200px' src={addInfoImg} alt={addInfoImgAltText} title={addInfoImgAltText} />
                        <Link href="/form-iscrizione" sx={[linkStyles.inPageLink, { color:'#3d5926', display: 'flex', alignItems:'center', justifyContent:'center', padding: '1rem 1.5rem'}]}> Iscriviti alla Newsletter! <ArrowForwardIcon/> </Link>

                    </div>
                </aside>
            </Box>
            <Footer />
        </ThemeProvider>
    </>
  );
};
export default RisoZafferazno
