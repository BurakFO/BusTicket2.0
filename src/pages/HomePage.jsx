import { Button } from "@mui/material";
import React from "react";
import TicketInputForm from "../components/TicketInputForm"
import MUIButton from "../components/MUI/MUIButton";
import TouchableCardWithIcon from "../components/TouchableCardWithIcon";
import BackgroundImageBus from "../components/BackgroundImageBus";
import BannerTitle from "../components/BannerTitle";

const HomePage = () => {

    return (
        <>
            <BackgroundImageBus />

            <div className="relative 
            ml-4 mt-2
            md:absolute md:-top-2  md:ml-28  md:mt-72  
            md:text-white text-2xl md:text-3xl font-bold">
                <BannerTitle />
            </div>

            <div className="relative md:absolute flex flex-col left-0 right-0 top-0 md:mt-80  md:mx-24  p-4 sm:p-6 justify-center  bg-white rounded-xl shadow-lg">
                {/* Top Section */}
                <TicketInputForm />
            </div>

            {/* Space Div */}
            <h1 className="hidden md:flex mt-24 "></h1>

            <div className=" mt-5">
                <TouchableCardWithIcon />
            </div>
        </>
    )
}

export default HomePage;