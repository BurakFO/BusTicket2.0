import React, { useEffect, useState } from "react";
import MUIButton from "./MUI/MUIButton";
import axios from "axios";


const TicketCard = ({ children }) => {

    return (
        <>
            <div className="w-full">
                {children}
            </div>

        </>
    )
}


export default TicketCard; 