import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';

const CustomTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  width: '100%',
}));

const JoinUsPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (data) => {
    if (!data.tckn || !data.email || !data.phone || !data.name || !data.surname || !data.position) {
      setErrorMessage('Lütfen tüm alanları doldurun.');
      return;
    }

    setSuccessMessage('Başvurunuz başarıyla gönderildi. İlginiz için teşekkür ederiz.');
    setErrorMessage('');
  };

  return (
    <div>
      <Box className="p-4 mx-auto max-w-4xl mt-16">
        <Box className="bg-white p-4 rounded-lg shadow-md mb-4">
          <Typography variant="h6" className="text-gray-800 mb-2">
            İş Başvuru Formu
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
                label="İsim"
                {...register('name', { required: 'İsminizi girin.' })}
                error={!!errors.name}
                helperText={errors.name?.message}
                variant="outlined"
                placeholder="İsim"
                />
                <CustomTextField
                    label="Soyisim"
                    {...register('surname', { required: 'Soyisminizi girin.' })}
                    error={!!errors.surname}
                    helperText={errors.surname?.message}
                    variant="outlined"
                    placeholder="Soyisim"
                />
                <CustomTextField
                    label="TC Kimlik No"
                    {...register('tckn', { required: 'TC Kimlik Numaranızı girin.' })}
                    error={!!errors.tckn}
                    helperText={errors.tckn?.message}
                    variant="outlined"
                    placeholder="TC Kimlik No"
                />
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
                    {...register('position', { required: 'Pozisyon seçiniz.' })}
                    error={!!errors.position}
                    helperText={errors.position?.message}
                    variant="outlined"
                    select
                    SelectProps={{ native: true }}
                >
                    <option value="">Pozisyon Seçin</option>
                    <option>Kabin memuru (Host)</option>
                    <option>Servis şoförü</option>
                    <option>Bilet satış görevlisi</option>
                    <option>Muhasebe</option>
                    <option>İnsan Kaynakları</option>
                    <option>Finans</option>
                    <option>Ön Muhasebe</option>
                    <option>Çağrı Merkezi Personeli</option>
                    <option>Peron Kontrol Görevlisi</option>
                </CustomTextField>
                <CustomTextField
                    label="Mesajınız (isteğe bağlı)"
                    {...register('message')}
                    variant="outlined"
                    placeholder="Mesajınız"
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
    </div>
  );
};

export default JoinUsPage;
