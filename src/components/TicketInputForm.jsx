import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box, Button } from "@mui/material";
import MUICheckbox from "./MUI/MUICheckbox";
import MUISelect from "./MUI/MUISelect";
import MUIButton from "./MUI/MUIButton";
import { useNavigate } from "react-router-dom";
import MUIDatePicker from "./MUI/MUIDatePicker";
import dayjs from "dayjs";



const TicketInputForm = ({children}) => {

    const [date, setDate] = useState(dayjs());
    const [gender, setGender] = useState(null);
    const navigate = useNavigate();

    const handleDateChange = (formattedDate) => {

        const day = formattedDate.$D || formattedDate.date(); // Day of the month
        const month = formattedDate.$M || formattedDate.month(); // Month (0-based, 0 = January, 7 = August)
        const year = formattedDate.$y || formattedDate.year(); // Year
        const fullDate = formattedDate.toDate(); // Native JavaScript Date object

          // Logging the extracted values
          //console.log("dayjs:", datee);
          //console.log("Day:", day);
          //console.log("Month (0-based):", month);
          //console.log("Year:", year);
          console.log("Full Date (JS Date object):", fullDate);

        setDate(formattedDate);
    }

    const onSubmit = () => {
        //navigate(`/search?date=${date}`);
        alert(`The date is ${date}`);
    }

    return (
        <>
            <div className="mb-2">
                <MUICheckbox />
            </div>

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row items-center w-full gap-2 md:gap-0" >

                        <MUISelect typeOfSelect={'city'} label={"Nereden"} />

                        <MUISelect typeOfSelect={'city'} label={"Nereye"} />
                        
                        <MUIDatePicker date={date} onDateChange={handleDateChange}>Gidis Tarihi</MUIDatePicker>

                        <MUISelect typeOfSelect={'person'} label={"Yolcular"}/>




                    <div className="w-full md:w-3/12  md:ml-3">
                        <MUIButton label={"Seferleri Göster"} size={"large"} onMUIButton={onSubmit} />
                    </div>
                </div>
            </>
    )
};

export default TicketInputForm;
