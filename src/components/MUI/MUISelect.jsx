import React, { useEffect, useState } from "react";


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";



const MUISelect = ({ typeOfSelect }) => {

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
            {(() => {
                switch (typeOfSelect) {
                    case 'city':
                        return (
                            <FormControl className="w-full h-full">
                                <InputLabel >Nereden</InputLabel>
                                <Select
                                    value={destinationCity}
                                    label="Nereden"
                                    onChange={handleChange}
                                >
                                    {/* //for ekle  */}
                                    {cities.map(item => (
                                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                    ))}
                                </Select>

                            </FormControl>
                        );

                    case 'person':
                        return (
                            <FormControl className="w-full h-full">
                                <InputLabel >Person</InputLabel>
                                <Select
                                    value={destinationCity}
                                    label="Person"
                                    onChange={handleChange}
                                >
                                    {/* //for ekle  */}
                                    {cities.map(item => (
                                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                    ))}
                                </Select>

                            </FormControl>
                        );
                    
                }
            })()}


        </>
    )
}

export default MUISelect;