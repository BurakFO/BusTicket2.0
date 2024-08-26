import React, { useEffect, useState } from "react";
import MUIButton from "./MUI/MUIButton";
import { Link } from "react-router-dom";



const TicketCardDetail = ({ departureTime, tripTime, arrivalTime, departureLocation, arrivalLocation, ticketPrice }) => {

    return (
        <>

            <div className="flex">

                {/* Departure, Arrival, Location Info Section */}
                <div className="grid grid-cols-3 w-full font-bold">

                    {/* Departure Time */}
                    <div>{departureTime}</div>
                    <div>{tripTime}</div>

                    {/* Arrival Time */}
                    <div>{arrivalTime}</div>

                    {/* Departure Location */}
                    <div className="col-span-2 font-normal">{departureLocation}</div>

                    {/* Arrival Location */}
                    <div className="font-normal">{arrivalLocation}</div>

                </div>

                {/* Ticket Price Here */}
                <div className="font-bold text-xl">{ticketPrice}</div>
            </div>

            {/* Bus info and Checkout Button */}
            <div className="flex justify-between mt-6">


                <div className="flex bg-gray-300">
                    bus information and wifi, food, drink, etc.
                </div>

                <div className="flex">
                    <Link to={"/checkout"}> 
                    <MUIButton label={"Devam Et"} />
                    </Link>
                </div>

            </div>

        </>
    )
}

export default TicketCardDetail;