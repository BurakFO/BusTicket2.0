import React, { useEffect, useState } from "react";
import TicketInputForm from "../components/TicketInputForm";
import MUITabs from "../components/MUI/MUITabs";
import { Button } from "@mui/material";
import MUIButton from "../components/MUI/MUIButton";
import TicketCard from "../components/TicketCard";
import axios from "axios";
import TicketCardDetail from "../components/TicketCardDetail";
import { BASE_URL } from "../lib/constants";

import { ticketData } from "../lib/constants";

const SearchResultsPage = () => {

    const [tickets, setTickets] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/trips`);
                setTickets(response.data);
                //console.log(response.data);
                console.log(tickets[0].route.startCity.name)
            } catch (error) {
                setError(error.message);
                setTickets(ticketData);
                console.log(tickets);
            }
        };

        fetchData(); //Fetching Data

    }, [])

    return (
        <div className="flex flex-col bg-[#F7F7F7]">

            <div className="p-8 2xl:px-96 bg-white mb-6">
                <TicketInputForm />
            </div>

            <div className="flex flex-col justify-center items-center mb-3">

                <div className="bg-white">
                    <MUITabs />
                </div>

                <div className="flex justify-around w-9/12 mt-5">
                    <button className="border rounded-xl p-0.5 px-2  bg-white hover:bg-gray-200 tracking-wider">Filtreler</button>
                    <div>{tickets.length} Sonuc</div>
                </div>
            </div>


            {/* Ticket Cards Here */}

            {tickets.map(item => (

                <div className="flex justify-center mb-4">
                    <div className="flex flex-col items-center border min-w-[768px] px-5 py-3 bg-white rounded-md">
                        <TicketCard>
                            <TicketCardDetail
                            departureTime={item.departureTime}
                            tripTime={item.tripTime}
                            arrivalTime={item.arrivalTime}
                            departureLocation={item.departureLocation}
                           // departureLocation={item.route.startCity.name}
                            arrivalLocation={item.arrivalLocation}
                            // arrivalLocation={item.route.endCity.name}
                            ticketPrice={item.ticketPrice}
                            //ticketPrice={item.price}
                            />
                        </TicketCard>
                    </div>
                </div>


            ))}


        </div>
    )
}

export default SearchResultsPage;