import { useState } from 'react'
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import { Box, TextField, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio, Checkbox, Button } from '@mui/material';

// components and sheets
import { Navbar } from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer/Footer';
import { typographyStyles } from '../../Components/common/typography/typographyStyles';
const INITIAL_FORM_STATE = { // mettendo il valore iniziale dello state nello scope globale lo psossiamo suare per le funzioni al meglio
    name: "",
    surname: '',
    email: "",
    newsletter: false,
    device: '',
};

export const Newsletter = () => {
    const theme = createTheme({
        typography: {
            fontFamily: ["Nunito", "sans-serif"].join(","),
        },
    });

    // Form input control 
    const [formData, setFormData] = useState(INITIAL_FORM_STATE)
    const handleChange = (e: any) => {
        const { name, value, checked, type } = e.target;
        setFormData((prevstate) => {
            return {
                ...prevstate,
                [name]: type === 'checkbox' ? checked : value
            };
        });
    };
    const checkSubmit = (): boolean => { 
        const { name, surname, email, device } = formData;
        return !name || !surname || !email || !device 
    }; // se non c'è uno di questi valori ritorna true, se ci sono tutti false.
    const handleSubmit = () => {
        setFormData(INITIAL_FORM_STATE);
    }

    return (
        <>
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box className='form-container'>
                <form>
                    <Typography sx={[typographyStyles.heading, { textAlign: 'center' }]}>Tieniti aggiornato!</Typography>
                    <Typography sx={[typographyStyles.pBody, { textAlign: 'center' }]}>Compila questo breve form per iscriverti alla nostra Newsletter e ricevere notifiche ogni volta che vengono pubblicati nuovi contenuti.</Typography>
                    <hr />
                    <div className='input-container'>
                        <TextField size="small" fullWidth label="Nome" placeholder="Mario" name="name" required value={formData.name} onChange={handleChange} variant="outlined" />
                        <TextField size="small" fullWidth label="Cognome" placeholder="Rossi" name="surname" required value={formData.surname} onChange={handleChange} />
                        <TextField size="small" fullWidth label="E-mail" placeholder="MarioRossi76@gmail.com" helperText="Obbligatorio *" name='email' required value={formData.email} onChange={handleChange} />

                            {/* checkbox */}
                            <FormControlLabel control={
                                <Checkbox
                                    name='newsletter'
                                    checked={formData.newsletter}
                                    onChange={handleChange}
                                />} label="Accetto le normative Privacy sul trattemento dei dati."
                            />
                            {/* radio button */}
                            <FormControl>
                                <FormLabel component="legend">Device</FormLabel>
                                <RadioGroup row aria-label="Device" value={formData.device} name="device" onChange={handleChange}>
                                    <FormControlLabel value="Smartphone" control={<Radio />} label="Smartphone" />
                                    <FormControlLabel value="Tablet" control={<Radio />} label="Tablet" />
                                    <FormControlLabel value="PC" control={<Radio />} label="PC" />
                                </RadioGroup>
                            </FormControl>
                        <Button sx={{backgroundColor: '#150DAE'}} onClick={handleSubmit} disabled={checkSubmit()} variant="contained"> Submit </Button>
                    </div>
                </form>
            </Box>
            <Footer />
        </ThemeProvider >
        </>
    );
};