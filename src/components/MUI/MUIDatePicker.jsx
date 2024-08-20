import React from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const MUIDatePicker = ({children, value}) => {

    return (
        <>
            <div className="w-full md:w-2/12 h-1/2  md:ml-3">
                <DatePicker label={children} value={value} />
            </div>
        </>
    )
}


export default MUIDatePicker;