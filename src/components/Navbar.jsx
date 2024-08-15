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
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className="hidden md:flex">
                            <MenuIcon sx={{ color: '#fff' }} />
                        </IconButton>

                        {/* <Typography className=" text-6xl"

                            > BusTicket 2.0 </Typography> */}
                        <button className="text-xl">BusTicket 2.0</button>

                        <Stack direction="row" spacing={2} >
                            <Button sx={{ color: 'inherit' }}>Ana Sayfa</Button>
                            <Button sx={{ color: 'inherit' }}>Hakkımızda</Button>
                            <Button sx={{ color: 'inherit' }}>Biletler</Button>
                            <Button sx={{ color: 'inherit' }}>Seferler</Button>
                            <Button sx={{ color: 'inherit' }}>İletişim</Button>
                        </Stack>
                         
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;