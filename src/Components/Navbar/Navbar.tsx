import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
import { navStyles } from './navStyles'
import { navbarLinks } from './navbarLinks'
import { useNavigate } from 'react-router';
import './burgerMenu.css';


export const Navbar = () => {
    const [burgerBarClasses, setburgerBarClasses] = useState("burger-bar unclicked");
    const [menuWindow, setmenuWindow] = useState("menu hidden");
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const showMenu = () =>{
        if(!isMenuOpen){
            setburgerBarClasses("burger-bar clicked")
            setmenuWindow("menu visible")
        } else {
            setburgerBarClasses("burger-bar unclicked")
            setmenuWindow("menu hidden")
        }
        setisMenuOpen(!isMenuOpen)
    }
    const navigate = useNavigate()
    return (
        <>
            <AppBar sx={navStyles.appBar}>
                <Toolbar sx={navStyles.toolbar}>
                <Typography sx={navStyles.brandName}>Sapori e Profumi</Typography>
                    <Box>
                        {navbarLinks.map((item) =>(
                            <Button sx={navStyles.navLinks} key={item.id} onClick={() => navigate(item.route)}>{item.label}</Button>
                        ))}
                    </Box>
                    <div className='burger-menu' onClick={showMenu}>
                        <div className={burgerBarClasses}></div>
                        <div className={burgerBarClasses}></div>
                        <div className={burgerBarClasses}></div>
                    </div>
                    <div className={menuWindow}>
                        {navbarLinks.map((item) =>(
                            <Button sx={[navStyles.navburgerLinks, {width: '100%'}]} key={item.id} onClick={() => navigate(item.route)}>{item.label}</Button>
                        ))}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};
