import React, { useState } from "react";


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MUISelect = () => {

    const [destinationCity, setDestinationCity] = useState(null);

    const handleChange = (e) => {
        setDestinationCity(e.target.value);
        alert("City has been changed => " + e.target.value)
    }

    return(
        <>
            <FormControl className="mx-9">
                <InputLabel >Nereden</InputLabel>
                <Select
                value={destinationCity}
                label="Nereden"
                onChange={handleChange}
                >
                    <MenuItem value={"İstanbul"}>İstanbul</MenuItem>
                    <MenuItem value={"Ankara"}>Ankara</MenuItem>
                    <MenuItem value={"Bursa"}>Bursa</MenuItem>
                    <MenuItem value={"Antalya :) "}>Antalya :D </MenuItem>
                </Select>

            </FormControl>
        
        </>
    )
}

export default MUISelect;