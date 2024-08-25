import React, { useState } from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

const MUIDatePicker = ({children, date, onDateChange}) => {



    const handleChange = (newValue) => {
        const formattedDate = newValue; // kaldirilabilir
        onDateChange(formattedDate);  
    };

    return (
        <>
            <div className="w-full md:w-2/12 h-1/2  md:ml-3">
                <DatePicker label={children} value={date} onChange={handleChange}  />
            </div>
        </>
    )
}


export default MUIDatePicker;