import React, { useEffect, useState } from "react";


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";


const MUISelect = ({ typeOfSelect, label, value, children }) => {


    const [destinationCity, setDestinationCity] = useState("");
    const [cities, setCities] = useState([]);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setDestinationCity(e.target.value);
        alert("City has been changed => " + e.target.value)
    }

   

    return (
        <>

            {children}

        </>
    )
}

export default MUISelect;