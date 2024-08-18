import { Button } from "@mui/material";
import React from "react";
import TicketInputForm from "../components/TicketInputForm"
import MUIButton from "../components/MUI/MUIButton";
import TouchableCardWithIcon from "../components/TouchableCardWithIcon";

const HomePage = () => {

    return (
        <>

            <div className="">
                <TicketInputForm />
                <TouchableCardWithIcon/>
            </div>

        </>
    )
}

export default HomePage;