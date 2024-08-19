import React from "react";


const TicketCard = () => {

    return (
        <>
            <div className="border p-2 w-full">
                <div className="flex">

                    {/* Departure, Arrival, Location Info Section */}
                    <div className="grid grid-cols-3 w-full font-bold">

                        {/* Departure Time */}
                        <div>14:20</div>
                        <div>6:25 saat</div>

                        {/* Arrival Time */}
                        <div>20:45</div>

                        {/* Departure Location */}
                        <div className="col-span-2 font-normal">İstanbul-Alibeyköy</div>

                        {/* Arrival Location */}
                        <div className="font-normal">Ankara-Otogar</div>

                    </div>

                    {/* Ticket Price Here */}
                    <div className="font-bold text-xl">632TL</div>
                </div>
            </div>

        </>
    )
}


export default TicketCard; 