import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const MyMap = () => {
  const position = [41.015137, 28.979530]; 

  return (
    <div className="bg-[#FEFAE0] h-[460px] w-[1000px] p-[30px] m-[15%] flex">
      <Box
        className="p-[20px] rounded-lg shadow-lg"
        sx={{ backgroundColor: "#fff", width: "250px", marginRight: "20px" }}
      >
        <Typography variant="h6" className="text-gray-800">
          Adres
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          istanbul/Türkiye
        </Typography>
        <Typography variant="h6" className="text-gray-800 mt-4">
          Telefon Numarası
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          +90 555 555 55 55
        </Typography>
        <Typography variant="h6" className="text-gray-800 mt-4">
          Email
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          busTicket@gmail.com
        </Typography>
      </Box>

      <MapContainer center={position} zoom={13} style={{ height: "400px", width: "700px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={position}>
          <Popup>
            BusTicket
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MyMap;
