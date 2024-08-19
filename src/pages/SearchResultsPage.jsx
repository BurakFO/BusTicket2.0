import React from "react";
import TicketInputForm from "../components/TicketInputForm";
import MUITabs from "../components/MUI/MUITabs";
import { Button } from "@mui/material";
import MUIButton from "../components/MUI/MUIButton";
import TicketCard from "../components/TicketCard";



const SearchResultsPage = () => {

    return (
        <>

            <div className="p-8">
                <TicketInputForm />
            </div>

            {/* Ticket Cards Here */}
            <div className="flex justify-center">
                <div className="flex flex-col items-center border min-w-[768px] p-4">
                        <MUITabs />

                    <div className="flex items-center justify-between w-full">
                        <button className="border rounded-xl px-2 mb-2">FILTRELER</button>
                        <div>36 Sonuc</div>
                    </div>

                    <TicketCard />
                </div>
            </div>
        </>
    )
}

export default SearchResultsPage;