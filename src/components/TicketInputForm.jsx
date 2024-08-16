import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import MUICheckbox from "./MUI/MUICheckbox";
import MUISelect from "./MUI/MUISelect";


const TicketInputForm = () => {

    const [gender, setGender] = useState(null);



    return (
        <div>

            {/* Background bus image here  */}
            <div className="relative w-full" style={{ height: '41vh' }}>
                <img
                    src="https://images7.alphacoders.com/317/thumb-1920-317196.jpg"
                    alt="Bus4k Wallpaper"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* input form here  */}
            <div className="absolute flex flex-col left-0 right-0 top-0 mt-80 mx-10 sm:mx-80  px-2 sm:p-10 justify-center  bg-white" >
                <h1 className="text-2xl text-slate-800 p-3">En uygun fiyatlı otobüs bileti BusTicket 2.0'da!</h1>
                
                <MUICheckbox />

                <MUISelect />


                <div>
                    <div>nerden nereyte</div>
                    <div>gidis tarihi</div>
                    <div>Yolcu sayisi</div>
                    <div>butotn seferleri goster fiyat bilgisiyle</div>
                </div>
                <form action="submit">

                    <label htmlFor="">Name</label>
                    <input type="text" />
                </form>
            </div>
        </div>
    )
};


export default TicketInputForm;