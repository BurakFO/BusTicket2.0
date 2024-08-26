import { Box, Button, FormControlLabel, TextField } from "@mui/material";
import React from "react";
import MUIButton from "../components/MUI/MUIButton";
import { Link } from "react-router-dom";
import {
    GoBackButtonLabel,
    SeatSelectionTitle,
    PassengerInformationTitle,
    ContactInformationTitle,
    PaymentInformationTitle,
    SelectSeatTitle
} from "../lib/constants";
import Checkbox from '@mui/material/Checkbox';

{/* Information Card */ }
const InformationCard = ({ cardNumber, cardTitle, children }) => {

    return (
        <section className="border  rounded mb-6 mr-8 p-4 bg-white">

            {/* Header Section */}
            <header className="flex flex-row items-center mb-4">
                {/* number section */}
                <div className="p-2">
                    <div className="bg-blue-700 text-white font-bold rounded text-2xl  w-8 h-8 flex items-center justify-center">{cardNumber}</div>
                </div>
                <h1 className="text-2xl font-bold ml-3">{cardTitle}</h1>
            </header>

            {children}
        </section>
    )
}



const CheckoutPage = () => {

    return (
        <div className="flex flex-row justify-center bg-[#F7F7F7]">
            <div className="w-6/12 h-full">

                <Link to={"/search"} className="inline-block w-7/12 mt-6 mb-2 ">{GoBackButtonLabel}</Link>

                <InformationCard cardNumber={1} cardTitle={SeatSelectionTitle}>

                    {/* Content Section */}
                    <div className="flex border rounded p-4 justify-between">

                        <div className="flex flex-row">

                            <div className="text-3xl"></div>
                            <div className="ml-6">
                                <div>Koltugunuzu secin </div>
                                <div>fiyat 0,00 TL</div>

                            </div>
                        </div>

                        <div>
                            <MUIButton label={SelectSeatTitle} />
                        </div>
                    </div>
                </InformationCard>

                <InformationCard cardNumber={2} cardTitle={PassengerInformationTitle} >
                    <div className="ml-8">
                        <div>cinsiyet</div>
                        <div> Erkek - Kadın</div>
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

                <InformationCard cardNumber={3} cardTitle={ContactInformationTitle} >
                    <div className="ml-8">
                        <div> Cinsiyet</div>
                        <div> Erkek - Kadın</div>
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

                <InformationCard cardNumber={4} cardTitle={PaymentInformationTitle} >
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

            {/* Ticket and Payment Information dockright */}
            <div className="sticky top-8 w-3/12 h-full rounded mt-8">
                <div className="flex flex-row justify-between">

                    <div>
                        <h1 className="text-xl font-semibold"> Bilet ve Ödeme Bilgileri </h1>
                    </div>

                    <div className="border rounded">
                        <Button size="medium" className="bg-white">counter</Button>
                    </div>
                </div>

                <div className="flex bg-white rounded  font-semibold mt-6 px-2 pt-3 justify-between">
                    <div>
                        26 Agu Pzt
                    </div>

                    <div>
                        Direkt Yolculuk
                    </div>
                </div>

                <div className="p-4 bg-white">

                    <div className="flex justify-between">
                        <div>
                             Istanbul-Esenler Otogar
                        </div>
                        <div>
                            10:00
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div>
                             Ankara Otogar
                        </div>
                        <div>
                            17:00
                        </div>
                    </div>
                </div>

                <div className="flex justify-between p-3 font-semibold border-b ">
                    <div>
                        1 Yetiskin
                    </div>
                    <div className="text-lg">
                        699 TL
                    </div>
                </div>

                <div className="flex justify-between p-3 font-semibold text-xl">
                    <div>
                        Toplam (KDV Dahil)
                    </div>
                    <div>
                        699 TL
                    </div>
                </div>

                <div className="flex pt-4 mb-4 hover:">

                    <div>
                        <Checkbox size="large" />
                    </div>
                    <div className="pt-2">
                        Gizlilik Politikasını okuduğumu beyan etmekle birlikte, Bilet Satın Alma Şart ve Koşulları ile Taşıma Şart ve Koşullarını kabul ederim.
                    </div>
                </div>

                <MUIButton label={"Hemen Al"}/>
            </div>

        </div>
    )
}

export default CheckoutPage;