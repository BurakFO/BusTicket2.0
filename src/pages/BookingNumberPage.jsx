import React from "react";
import BackgroundImageBus from "../components/BackgroundImageBus";
import { styled } from "@mui/material/styles";
import { Input, Button, Box } from "@mui/material";

const CustomInput = styled(Input)(({ theme }) => ({
  padding: "10px 15px",
  border: "1px solid #c5c5c5",
  borderRadius: "8px 0 0 8px",
  backgroundColor: "#fff",
  flex: 1,
  fontSize: "16px",
  color: "#333",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: "0 8px 8px 0",
  padding: "10px 20px",
  backgroundColor: "#002f87",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#002070",
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  backgroundColor: "#f7f7f7",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  overflow: "auto",
  maxHeight: "100%",
  "& h3": {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "10px 0",
  },
  "& p": {
    fontSize: "1rem",
    lineHeight: "1.5",
    margin: "10px 0",
    textAlign: "center",
  },
}));

const BookingNumberPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "90vh" }}>
      <Box sx={{ flexGrow: 1, position: "relative", marginBottom: 0 }}>
        <BackgroundImageBus />
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            maxWidth: "800px",
            height: "150px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            border: "1px solid #c5c5c5",
          }}
        >
          <label>PNR Numarası</label>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              backgroundColor: "white",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CustomInput disableUnderline placeholder="PNR" />
            <CustomButton variant="contained">Sorgula</CustomButton>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "600px",
          height: "300px",
          margin: "0 auto",
          marginTop: "20px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          overflow: "hidden",
        }}
      >
        <ContentBox>
          <br/><br/><br/>
          <h3>PNR numarası nedir?</h3>
          <p>Kısaca PNR olarak adlandırılan bu numara Passenger Name Record / Yolcu İsmi Kaydı anlamına gelir ve daha önce rezervasyon yaptırdığınız veya satın aldığınız uçuşunuzla ilgili işlemleri kolayca gerçekleştirmenizi sağlar.</p>
          <h3>PNR numarası ile nasıl işlem yapabilirim?</h3>
          <p>Üstte yer alan PNR Numarası ve Soyadınız alanlarını doldurarak daha önce rezervasyon yaptırdığınız veya satın almış olduğunuz uçuşun detaylarını görüntüleyebilir, rezervasyonu tamamlanmış uçuşlarınızı satışa çevirebilirsiniz.</p>
        </ContentBox>
      </Box>
    </Box>
  );
};

export default BookingNumberPage;