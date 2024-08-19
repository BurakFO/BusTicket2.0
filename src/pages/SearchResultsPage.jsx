import React from "react";
import TicketInputForm from "../components/TicketInputForm";
import MUITabs from "../components/MUI/MUITabs";



const SearchResultsPage = () => {

    return (
        <>
            <div className="p-8">
                <TicketInputForm />
                <MUITabs/>
            </div>
        </>
    )
}

export default SearchResultsPage;