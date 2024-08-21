import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import MUICheckbox from "./MUI/MUICheckbox";
import MUISelect from "./MUI/MUISelect";
import MUIButton from "./MUI/MUIButton";
import { useNavigate } from "react-router-dom";
import MUIDatePicker from "./MUI/MUIDatePicker";



const TicketInputForm = ({children}) => {


    const [gender, setGender] = useState(null);
    const navigate = useNavigate();


    return (
            <>

               
                
                <div className="mb-2">
                    <MUICheckbox />
                </div>


                {/* Bottom section */}
                <div className="flex flex-col md:flex-row items-center w-full gap-2 md:gap-0" >

                        <MUISelect typeOfSelect={'city'} label={"Nereden"} />

                        <MUISelect typeOfSelect={'city'} label={"Nereye"} />
                        
                        <MUIDatePicker>Gidis Tarihi</MUIDatePicker>

                        <MUISelect typeOfSelect={'person'} label={"Yolcular"}/>




                    <div className="w-full md:w-3/12  md:ml-3">
                        <MUIButton label={"Seferleri Göster"} size={"large"} onMUIButton={()=>navigate("/search")} />
                    </div>
                </div>
            </>
    )
};


export default TicketInputForm;