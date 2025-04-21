import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TimerIcon from '@mui/icons-material/Timer';
import { typographyStyles } from '../common/typography/typographyStyles';
import Link from '@mui/material/Link';


export const RecipeCard = ({ recipe }: any) => {
    const { label, description, dishType, prepTime, portions, img, alt, route, difficulty } = recipe;
    return (
        <Card sx={{
            borderRadius: '14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            cursor: 'pointer'
        }}>
            <CardMedia
                component="img"
                height="300px"
                object-fit= 'contain'
                image={img}
                alt={alt}
                loading='lazy'
            />
            <CardContent>
                <Link href={route} sx={typographyStyles.recipesLink}>{label}</Link>
            </CardContent>
            <CardContent>
                <Typography sx={typographyStyles.recipesDescription}>
                    {description}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body1" sx={{
                    backgroundColor: '#3D5926',
                    color: '#ffffff',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    width: 'fit-content'
                }}>
                    {dishType}
                </Typography>
            </CardContent>
            <CardContent sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
            }}>
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                <TimerIcon  />
                <Typography sx={typographyStyles.recipesDescription}>{prepTime}</Typography>
            </div>
            <Typography sx={[typographyStyles.recipesDescription, {marginLeft: 'auto'}]}>Porzioni: <b style={{color: '#AE150D'}}>{portions}</b></Typography>
            <Typography sx={typographyStyles.recipesDescription}>Difficoltà: <b style={{color: '#AE150D'}}>{difficulty}</b></Typography>
            </CardContent>
        </Card>
    );
};

