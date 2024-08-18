import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import MUICheckbox from "./MUI/MUICheckbox";
import MUISelect from "./MUI/MUISelect";
import MUIButton from "./MUI/MUIButton";


const TicketInputForm = () => {

    const [gender, setGender] = useState(null);



    return (
        <div>

            {/* Background bus image here  */}
            <div className="relative w-full h-21vh sm:h-41vh" >
                <img
                    src="https://images7.alphacoders.com/317/thumb-1920-317196.jpg"
                    alt="Bus4k Wallpaper"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Space Div */}
            <div className="hidden md:flex mt-32">

            </div>

            {/* input form here  */}
            <div className="relative md:absolute flex flex-col left-0 right-0 top-0 md:mt-80  md:mx-24  p-4 sm:p-6 justify-center  bg-white rounded-xl shadow-lg" >

                {/* Top Section */}
                <h1 className="text-2xl text-slate-800 p-3">En uygun fiyatlı otobüs bileti BusTicket 2.0'da!</h1>

                <div className="mb-2">

                    <MUICheckbox />
                </div>


                {/* Bottom section */}
                <div className="flex flex-col md:flex-row items-center w-full gap-3" >

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
                        <MUIButton label={"Seferleri Göster"} size={"large"} />
                    </div>
                </div>


            </div>
        </div>
    )
};


export default TicketInputForm;