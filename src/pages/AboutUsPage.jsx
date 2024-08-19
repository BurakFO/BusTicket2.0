import React from "react";
import { Container, Box, Grid } from '@mui/material';
import AboutUsCard from '../components/AboutUsCard';

const AboutUsPage = () => {
    const stories = [
        { year: '1990', story: '1990 yılında kurulan firmamız, şehirlerarası taşımacılığa yeni bir soluk getirdi. İlk filosu ile yolcularına konforlu ve güvenli yolculuk deneyimi sunmayı hedefledi.', image: 'https://r.resimlink.com/bDNHsm.jpeg' },
        { year: '2000', story: '2000 yılında, filomuzu genişleterek modern otobüslerle hizmet vermeye başladık. Bu dönemde, teknolojiyi takip ederek müşteri memnuniyetini artıran yenilikçi özellikler ekledik.', image: 'https://r.resimlink.com/SUwK_qC4.jpeg' },
        { year: '2005', story: '2005 yılında, çevre dostu otobüslerimizi filosumuza kattık ve yakıt tasarrufu sağlayan sistemlerle çevresel etkilerimizi minimize ettik. Bu, sürdürülebilir ulaşım vizyonumuzun bir adımıydı.', image: 'https://r.resimlink.com/3KZF6h.jpeg' },
        { year: '2010', story: '2010 yılında, konforu ön planda tutan yeni nesil otobüslerimizi tanıttık. Gelişmiş iç mekan tasarımları ve genişletilmiş hizmet seçenekleri ile uzun yolculukları daha keyifli hale getirdik.', image: 'https://r.resimlink.com/ntoCAl.jpeg' },
        { year: '2015', story: '2015 yılında, dijitalleşme sürecine hız verdik. Ücretsiz Wi-Fi, mobil uygulama ile bilet alım ve otobüs takip sistemleri gibi teknolojik yeniliklerle yolculuk deneyimini modernleştirdik.', image: 'https://r.resimlink.com/ZMu2gs70.jpeg' },
        { year: '2020', story: '2020 yılında, elektrikli otobüsler ve diğer çevre dostu araçlarla filomuzu güçlendirdik. Covid-19 pandemisine karşı sağlık ve güvenlik önlemlerimizi artırarak, yolcularımızın sağlığını öncelikli hedefimiz haline getirdik.', image: 'https://r.resimlink.com/A8L9al6r.jpeg' }
    ];

    return (
        <>
            <div>
                <center>
                    <h1 className="text-4xl font-bold">About Us</h1>
                </center>
            </div>
            <Container className="flex justify-center items-center min-h-screen">
                <Box className="relative w-full flex justify-center items-center">
                    <Box className="w-1 bg-gray-300 h-full absolute left-1/2 transform -translate-x-1/2"></Box>
                    <Grid container spacing={2} className="relative z-10">
                        {stories.map((item, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <AboutUsCard year={item.year} story={item.story} image={item.image} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default AboutUsPage;
