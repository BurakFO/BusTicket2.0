import { Button, TextField } from "@mui/material";
import React from "react";
import MUIButton from "../components/MUI/MUIButton";

{/* Information Card */ }
const InformationCard = ({ cardNumber, cardTitle, children }) => {

    return (
        <section className="border rounded m-6 w-1/2 mx-auto">

            {/* Header Section */}
            <header className="flex flex-row items-center">
                {/* number section */}
                <div className="p-2">
                    <div className="bg-blue-700 text-white font-bold rounded text-2xl  w-8 h-8 flex items-center justify-center">{cardNumber}</div>
                </div>
                <h2 className="text-2xl font-bold ml-3">{cardTitle}</h2>
            </header>

            {children}
        </section>
    )
}



const CheckoutPage = () => {

    return (
        <div className="flex flex-row">
            <div className="w-full h-full ">
            <InformationCard cardNumber={1} cardTitle={"Koltuk secimi"}>

                {/* Content Section */}
                <div className="flex border rounded m-4 p-4 justify-between">

                    <div className="flex flex-row">

                        <div className="text-3xl"></div>
                        <div className="ml-6">
                            <div>Koltugunuzu secin </div>
                            <div>fiyat 0,00 TL</div>

                        </div>
                    </div>

                    <div>
                        <MUIButton label={"Koltuk Sec"} />
                    </div>
                </div>
            </InformationCard>

            <InformationCard cardNumber={2} cardTitle={"Yolcu Bilgileri"} >
                <div className="ml-8">
                    <div>cinsiyet</div>
                    <div> Erkek- Kadnin</div>
                </div>

                {/* Input Form */}

                <div className="flex flex-row gap-4 m-4 mt-12">

                    <TextField id="outlined-basic" label="Adı" variant="outlined" className="w-full rounded " size="small" required />
                    <TextField id="outlined-basic" label="Soyadı" variant="outlined" className="w-full rounded " size="small" required />

                </div>
                <div className="flex flex-row gap-4 m-4 mt-12">
                    <TextField id="outlined-basic" label="TC Kimlik NO" variant="outlined" className="w-1/2 rounded " size="small" required />

                </div>

            </InformationCard>


            <InformationCard cardNumber={3} cardTitle={"İletişim"} >
                <div className="ml-8">
                    <div>cinsiyet</div>
                    <div> Erkek- Kadnin</div>
                </div>

                {/* Input Form */}

                <div className="flex flex-row gap-4 m-4 mt-12">

                    <TextField
                        id="outlined-basic"
                        label="E-mail"
                        variant="outlined"
                        className="rounded "
                        fullWidth
                        size="small"
                        required />

                    <TextField
                        label="Telefon Numarası"
                        variant="outlined"
                        type="tel"
                        placeholder="+90 555 555 55 55"
                        size="small"
                        fullWidth
                        inputProps={{
                            maxLength: 15, // max karakter sayısı
                            pattern: "[0-9]*", // Sadece rakamlara izin ver
                        }}
                    />
                </div>

            </InformationCard>


            <InformationCard cardNumber={4} cardTitle={"Ödeme Bilgileri"} >
                {/* Content Section */}
                <div className="flex flex-col border rounded m-4 p-4 justify-between">

                    <div className="flex flex-row">

                        <div className="text-3xl"></div>
                        <div className="ml-6">
                            <div>Kredi Karti / Banka Karti</div>
                        </div>
                    </div>

                    <div className="mt-8">
                        
                        <TextField
                            id="outlined-basic"
                            label="Kart Numarası"
                            variant="outlined"
                            className="w-1/2 rounded "
                            size="small"
                            required />


                        <div className="flex flex-row w-1/2 gap-4">
                            <TextField
                                id="outlined-basic"
                                label="Son Kullanma Tarihi"
                                variant="outlined"
                                className="w-1/2 rounded my-8 "
                                size="small"
                                required />
                                
                            <TextField
                                id="outlined-basic"
                                label="CVC / CVV"
                                variant="outlined"
                                className="w-1/2 rounded my-8 "
                                size="small"
                                required />
                        </div>

                        <TextField
                                id="outlined-basic"
                                label="Kart Sahibinin Adı"
                                variant="outlined"
                                className="w-1/2 rounded "
                                size="small"
                                required />

                    </div>
                </div>

            </InformationCard>
            </div>

            <div className="w-1/3 h-full border rounded bg-red-600">
                selam
            </div>

        </div>
    )
}

export default CheckoutPage;