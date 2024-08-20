import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { mapData } from '../lib/constants';

const CustomTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  width: '100%',
}));

const MyMap = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const defaultPosition = [41.015137, 28.979530]; 

  const onSubmit = (data) => {
    if (!data.email || !data.phone || !data.subject || !data.message) {
      setErrorMessage('Lütfen tüm alanları doldurun.');
      return;
    }

    setSuccessMessage('Mesajınız başarıyla iletildi. Vakit ayırdığınız için teşekkür ederiz.');
    setErrorMessage('');
  };

  return (
    <div>
      <Box className="p-4 mx-auto max-w-4xl mt-16">
        <Box className="bg-white p-4 rounded-lg shadow-md mb-4">
          <Typography variant="h6" className="text-gray-800 mb-2">
            İletişim Formu
          </Typography>

          {successMessage && (
            <Alert severity="success" className="mb-2">
              {successMessage}
            </Alert>
          )}

          {errorMessage && (
            <Alert severity="error" className="mb-2">
              {errorMessage}
            </Alert>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomTextField
              label="E-posta Adresim"
              {...register('email', { required: 'E-posta adresinizi girin.' })}
              error={!!errors.email}
              helperText={errors.email?.message}
              variant="outlined"
              placeholder="E-posta Adresim"
            />
            <CustomTextField
              label="Telefon Numaram"
              {...register('phone', { required: 'Telefon numaranızı girin.' })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              variant="outlined"
              placeholder="Telefon Numaram"
            />
            <CustomTextField
              label="Konu"
              {...register('subject', { required: 'Konu belirtiniz.' })}
              error={!!errors.subject}
              helperText={errors.subject?.message}
              variant="outlined"
              placeholder="Konu"
            />
            <CustomTextField
              label="PNR Numaram"
              {...register('pnr')}
              variant="outlined"
              placeholder="PNR Numaram"
            />
            <CustomTextField
              label="Mesajım"
              {...register('message', { required: 'Mesaj alanını boş bırakmayın.' })}
              error={!!errors.message}
              helperText={errors.message?.message}
              variant="outlined"
              placeholder="Mesajım"
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-full mt-2"
            >
              Gönder
            </Button>
          </form>
        </Box>
      </Box>

      <div className="bg-white rounded-lg shadow-md mb-4 p-4 mx-auto max-w-6xl flex mt-24">
        <Box
          className="p-4 rounded-lg shadow-md"
          sx={{ backgroundColor: "#fff", width: "300px", marginRight: "20px" }}
        >
          <Typography variant="h6" className="text-gray-800">
            Adres
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            İstanbul, Türkiye
          </Typography>
          <Typography variant="h6" className="text-gray-800 mt-2">
            Telefon Numarası
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            +90 555 555 55 55
          </Typography>
          <Typography variant="h6" className="text-gray-800 mt-2">
            Email
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            busTicket@gmail.com
          </Typography>
        </Box>

        <MapContainer center={defaultPosition} zoom={13} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {mapData.map(location => ( 
            
            <Marker key={location.id} position={location.coords}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MyMap;
