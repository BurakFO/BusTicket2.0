import React, { useEffect, useState } from "react";


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import { Menu } from "@mui/material";


const MUISelect = () => {

    const [destinationCity, setDestinationCity] = useState("");
    const [cities, setCities] = useState([]);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setDestinationCity(e.target.value);
        alert("City has been changed => " + e.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://10.127.20.37:8080/api/cities');
                console.log(response)
                setCities(response.data);
                console.log(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData(); //Fetching Data

    }, [])

    return (
        <>
            <FormControl className="mx-9">
                <InputLabel >Nereden</InputLabel>
                <Select
                    value={destinationCity}
                    label="Nereden"
                    onChange={handleChange}
                >
                    {cities.map(item => (
                        <MenuItem value={item.name}>{item.name}</MenuItem>
                    ))}
                </Select>

            </FormControl>

        </>
    )
}

export default MUISelect;