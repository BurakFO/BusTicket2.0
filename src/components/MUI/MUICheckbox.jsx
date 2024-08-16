import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const MUICheckbox = () => {

    const [tripType, setTripType] = useState("one-way");

    const handleChange = (e) => {    
        setTripType(e.target.value);
        alert(e.target.value + " Basariyla degisti!");
    };

    return (
        <>
            <FormControl>
                <RadioGroup
                    defaultValue="true"
                    value={tripType}
                    row
                    onChange={(e) => handleChange(e)}
                >
                    <FormControlLabel
                        control={<Radio />}
                        label="Tek Yön"
                        value="one-way"
                    />

                    <FormControlLabel
                        control={<Radio />}
                        label="GidişDönüş"
                        value="round-trip"
                    />

                </RadioGroup>
            </FormControl>
        </>
    )
}

export default MUICheckbox;