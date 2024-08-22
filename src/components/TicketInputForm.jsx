import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box, Button } from "@mui/material";
import MUICheckbox from "./MUI/MUICheckbox";
import MUIButton from "./MUI/MUIButton";
import { useNavigate } from "react-router-dom";
import MUIDatePicker from "./MUI/MUIDatePicker";
import dayjs from "dayjs";
import axios from "axios";
import { useSelector } from "react-redux";

const TicketInputForm = ({ children }) => {
    const [date, setDate] = useState(dayjs());
    const [passengerCount, setPassengerCount] = useState(1);
    const [cities, setCities] = useState([]);
    const [error, setError] = useState();

    const [departureCity, setDepartureCity] = useState("");
    const [arrivalCity, setArrivalCity] = useState("");

    const navigate = useNavigate();
    const { selectedDepartureCityID, selectedArrivalCityID } = useSelector((state) => state.ticketDetailSlice);

    const incrementPassengerCount = (event) => {
        event.stopPropagation();
        setPassengerCount((prevCount) => Math.min(prevCount + 1, 10));
    };

    const decrementPassengerCount = (event) => {
        event.stopPropagation();
        setPassengerCount((prevCount) => Math.max(prevCount - 1, 1));
    };

    const handleDateChange = (formattedDate) => {
        setDate(formattedDate);
    };

    const onSubmit = () => {
        const formattedDate = date.format('YYYY-MM-DD');
        alert(`The date is ${formattedDate}`);
        alert(`The Arrival City is: ${arrivalCity}`);
        alert(`The Departure City is: ${departureCity}`);
        navigate(`/search?date=${formattedDate}&departureCity=${departureCity}&arrivalCity=${arrivalCity}&passengers=${passengerCount}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://10.127.20.37:8080/api/cities');
                setCities(response.data);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setDepartureCity(selectedDepartureCityID);
        setArrivalCity(selectedArrivalCityID);
    }, [selectedDepartureCityID, selectedArrivalCityID]);

    return (
        <>
            <div className="mb-2">
                <MUICheckbox />
            </div>

            <div className="flex flex-col md:flex-row items-center w-full gap-2 md:gap-0">
                <FormControl className="w-full md:w-3/12 md:ml-3">
                    <InputLabel>Nereden</InputLabel>
                    <Select
                        value={departureCity}
                        label="Nereden"
                        onChange={(e) => setDepartureCity(e.target.value)}
                    >
                        {cities.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl className="w-full md:w-3/12 md:ml-3">
                    <InputLabel>Nereye</InputLabel>
                    <Select
                        value={arrivalCity}
                        label="Nereye"
                        onChange={(e) => setArrivalCity(e.target.value)}
                    >
                        {cities.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <MUIDatePicker date={date} onDateChange={handleDateChange}>Gidis Tarihi</MUIDatePicker>

                <FormControl sx={{ minWidth: "170px", marginLeft: "10px" }}>
                    <InputLabel id="passenger-select-label">Yolcu</InputLabel>
                    <Select
                        labelId="passenger-select-label"
                        id="passenger-select"
                        value={passengerCount}
                        renderValue={() => `Yolcu Sayısı: ${passengerCount}`}
                    >
                        <MenuItem>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                                <Button onClick={decrementPassengerCount}>-</Button>
                                <span>{passengerCount}</span>
                                <Button onClick={incrementPassengerCount}>+</Button>
                            </Box>
                        </MenuItem>
                    </Select>
                </FormControl>

                <div className="w-full md:w-3/12 md:ml-3">
                    <MUIButton label={"Seferleri Göster"} size={"large"} onMUIButton={onSubmit} />
                </div>
            </div>
        </>
    );
};

export default TicketInputForm;
