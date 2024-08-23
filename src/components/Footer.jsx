import React from 'react';
import { Button } from '@mui/material';
import { Facebook, Twitter, Instagram, Apple, Shop } from '@mui/icons-material';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-10 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Bize Katılmak İster Misin ?</h2>
          <p className="mb-6">Bize katılmak istiyorsan aşağıdaki butona tıklayarak daha fazla bilgi alabilirsin.</p>
          <Link to={"/join-us"}><Button variant="contained" color="primary" className="bg-blue-500 hover:bg-blue-600">
            Bize Katıl
          </Button></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 text-center">
          <div>
            <h3 className="font-semibold mb-2">BusTicket</h3>
            <p className="text-xs">© 2024 copyright</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Sponsorlarımız</h3>
            <ul className="space-y-1 text-sm">
              <a href='https://ibb.istanbul/'><li>İstanbul Büyükşehir Belediyesi</li></a>
              <a href='https://g.co/kgs/8Mjn5cy'><li>Alibeyköy Otogarı</li></a>
              <a href='https://bilisimvadisi.com.tr/'><li>Bilişim Vadisi</li></a>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">BusTicket</h3>
            <ul className="space-y-1 text-sm">
              <Link to={"/about-us"}><li>Hakkımızda</li></Link>
              <Link to={"/contact"}><li>İletişim</li></Link>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Mobil Uygulamalar</h3>
            <ul className="space-y-1 text-sm flex flex-col items-center">
              <a href='https://www.apple.com/tr/app-store/'><li className="flex items-center"><Apple className="mr-2" /> App Store</li></a>
              <a href='https://play.google.com/store/games?gl=TR'><li className="flex items-center"><Shop className="mr-2" /> Google Play</li></a>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex justify-center space-x-4">
          <a href="#" aria-label="Facebook"><Facebook /></a>
          <a href="#" aria-label="Twitter"><Twitter /></a>
          <a href="#" aria-label="Instagram"><Instagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
