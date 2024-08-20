import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import MUICheckbox from "./MUI/MUICheckbox";
import MUISelect from "./MUI/MUISelect";
import MUIButton from "./MUI/MUIButton";
import { useNavigate } from "react-router-dom";



const TicketInputForm = () => {

    const [gender, setGender] = useState(null);
    const navigate = useNavigate();


    return (
            <>

               

                <div className="mb-2">
                    <MUICheckbox />
                </div>


                {/* Bottom section */}
                <div className="flex flex-col md:flex-row items-center w-full gap-2 md:gap-0" >

                    <div className="w-full md:w-3/12 ">
                        <MUISelect typeOfSelect={'city'} label={"Nereden"} />
                    </div>

                    <div className="w-full md:w-3/12  md:ml-3">
                        <MUISelect typeOfSelect={'city'} label={"Nereye"} />
                    </div>

                    <div className="w-full md:w-2/12 h-1/2  md:ml-3">
                        <MUISelect typeOfSelect={'date'} label={"Gidis Tarihi"} />
                    </div>

                    <div className="w-full md:w-2/12 h-1/2  md:ml-3">
                        <MUISelect typeOfSelect={'person'} label={"Yolcular"} />
                    </div>



                    <div className="w-full md:w-3/12  md:ml-3">
                        <MUIButton label={"Seferleri Göster"} size={"large"} onMUIButton={()=>navigate("/search")} />
                    </div>
                </div>
            </>
    )
};


export default TicketInputForm;