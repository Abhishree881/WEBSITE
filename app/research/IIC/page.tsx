'use client'
import '../../../styles/IIC/iic.css'
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';

const PHDStudents = () => {

  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <div className='container'>
        <div className="certificate-container">
          <div className="certificate-subcontainer">
            <a href="https://i.ibb.co/X5H8FXS/IIC-certificate.png" download={'https://i.ibb.co/X5H8FXS/IIC-certificate.png'}>
              <h2 className='certificate-header'>Certificate-IIC</h2>
            </a>
            <a href="https://i.ibb.co/X5H8FXS/IIC-certificate.png" download>
              <div className='certificate'></div>
            </a>
          </div>
        </div>
        <div className="link-container">
          <div className="link-subcontainer">
            <h2 className="link-header">Links</h2>
            <div className="links-row">
              <a href="docs/IIC Committee_2022.pdf">
                <div className="link">
                  <p>Annual Report IIC 3.0 compressed</p>
                </div>
              </a>
              <a href="docs/Expert Committee_webpage.pdf" download>
                <div className="link">
                  <p>Expert Committee webpage</p>
                </div>
              </a>
            </div>
            <div className="links-row">
              <a href="docs/IIC4.0 Annual Report_IIIT Kalyani_2021-22.pdf" download>
                <div className="link">
                  <p>IIC 4.0 Annual Report IIIT_Kalyani 2021-22</p>
                </div>
              </a>
              <a href="docs/IIC Committee_2022.pdf" download>
                <div className="link">
                  <p>IIC Committee 2022</p>
                </div>
              </a>
            </div>
            <div className="links-row">
              <a href="docs/Innovation and Startup _IIITK_V1.0 (1).pdf" download>
                <div className="link">
                  <p>Innovation and Startup _IIITK_V1.0 (1)</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PHDStudents;