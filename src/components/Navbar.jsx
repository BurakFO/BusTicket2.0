import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from "@mui/material";

const Navbar = () => {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className="bg-slate-800 xl:px-6 2xl:px-64">
                    <Toolbar>
                        <Typography className=" text-2xl " > BusTicket 2.0 </Typography>

                        <Stack direction="row" spacing={2} className="hidden md:flex ml-auto" >
                            <Button sx={{ color: 'inherit' }}>Ana Sayfa</Button>
                            <Button sx={{ color: 'inherit' }}>Hakkımızda</Button>
                            <Button sx={{ color: 'inherit' }}>Biletler</Button>
                            <Button sx={{ color: 'inherit' }}>Seferler</Button>
                            <Button sx={{ color: 'inherit' }}>İletişim</Button>

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