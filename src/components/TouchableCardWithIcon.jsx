import React from "react";
import { IoTicketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const TouchableCardWithIcon = ({ Icon }) => {
    //Icon degiskeni tanimla component props olarak kullansin.
    // text degiskeni tanimla component props olarak kullansin.


    return (
        <div className="grid grid-cols-3 border text-center">

            <button>
                <div className="my-2 hover:bg-slate-100">
                    <div className="flex flex-col items-center">

                        <div className="text-3xl my-2"><IoTicketOutline /></div>
                        <div className="">Ask your PNR</div>
                    </div>
                </div>
            </button>


            <button>
            <Link to={"/booking-number"}><div className="my-2 hover:bg-slate-100">
                    <div className="flex flex-col items-center border-x">

                        <div className="text-3xl my-2"><IoTicketOutline /></div>
                        <div className="">PNR code here</div>
                    </div>
                </div></Link>
            </button>

            <button>
                <div className="my-2 hover:bg-slate-100">
                    <div className="flex flex-col items-center ">

                        <div className="text-3xl my-2"><IoTicketOutline /></div>
                        <div className="">PN</div>
                    </div>
                </div>
            </button>
        </div>
    )
}


export default TouchableCardWithIcon;