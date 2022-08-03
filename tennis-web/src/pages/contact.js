import React from 'react';
import { Typography } from '@mui/material';
import ContactForm from '../components/ContactForm/Contact';
import GoogleMap from '../components/GoogleMap/GoogleMap';

import './styles/contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-section">
        <div></div>
        <div className="left-content">
          <Typography variant="h4">Liên hệ</Typography>
          <img src={process.env.PUBLIC_URL + "/images/IMG_0229_avatar.jpg"} className="contact-us" alt="avatar" />
          <Typography variant="caption">Zalo: 0123456789</Typography>
          <Typography variant="caption">FB: fb.com/example</Typography>
          <Typography variant="caption">YT: youtube.com/example</Typography>
        </div>
        <div className="right-content">
          <ContactForm />
        </div>
        <div></div>
      </div>
      <div className="map-section">
        <div></div>
        <div className="left-content">
          <div className="description">
            <Typography variant='h4'>Địa điểm</Typography>
            <Typography variant='caption'>Khu đô thị Royal City
              Thuong Dinh
              Thanh Xuân
              Hanoi</Typography>
          </div>
        </div>
        <div className="right-content">
          <GoogleMap />
        </div>
        <div></div>

      </div>
    </div>
  )

}

export default Contact;
