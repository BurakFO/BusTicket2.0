import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className="bg-slate-800 xl:px-6 2xl:px-64">
                    <Toolbar>
                        <Link to={"/"}> <Typography className=" text-2xl " > BusTicket 2.0 </Typography> </Link>

                        <Stack direction="row" spacing={2} className="hidden md:flex ml-auto" >
                            <Link to={"/home"}>  <Button sx={{ color: 'inherit' }}>Ana Sayfa</Button> </Link>
                            <Link to={"/about-us"}> <Button sx={{ color: 'inherit' }}>Hakkımızda</Button> </Link>
                            <Button sx={{ color: 'inherit' }}>Biletler</Button>
                            <Link to={"/search"}><Button sx={{ color: 'inherit' }}>Seferler</Button></Link>
                            <Link to={"/contact"}> <Button sx={{ color: 'inherit' }}>İletişim</Button> </Link>

                        </Stack>

                        <IconButton className=" ml-auto sm:hidden">
                            <MenuIcon sx={{ color: '#fff' }} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
}

export default Navbar;