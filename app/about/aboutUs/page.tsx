/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect } from 'react';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import './page.css';

const App: React.FC = () => {
  useEffect(() => {
    const updateViewLength = () => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
        let startLength = window.scrollY;
        startLength = startLength - 50;
        sidebar.style.top = `${startLength}px`;
      }
    };

    updateViewLength();
    window.addEventListener('scroll', updateViewLength);

    return () => {
      window.removeEventListener('scroll', updateViewLength);
    };
  }, []);

  return (
    <>
      <div className="page-container">
        <nav className="page-navbar">
          <NavBar />
        </nav>
        <div className="page-body">
          <div className="sidebar1">
            <div className="sidebar2" id="sidebar">
              <img className="image" src="https://iiitkalyani.ac.in/images/facilities/Facilities_Images/Webel-IT-Park/webel.jpg" alt="IIIT Kalyani" />
              <div className="mottoSection">
                <hr className="complete" />
                <h1 className="mottoSlogan">विद्याधनं सर्वधनप्रधानम्</h1>
                <p className="mottoSloganMeaning">It means <span className="highlight">Knowledge is Supreme of all Wealth</span></p>
              </div>
              <hr className="complete" />
              <div style={{ height: "200px", backgroundColor: "brown" }}></div>
              <p className="reach">Indian Institute of Information Technology Kalyani,<br /> Webel IT Park,<br />
                (Near Buddha Park), Kalyani – 741235. Nadia, WB.
              </p>
              <hr className="complete" />
              <p className="reach">Email: <a href="mailto:office@iiitkalyani.ac.in" target="_blank" rel="noreferrer">office@iiitkalyani.ac.in</a></p>
            </div>
          </div>
          <div className="content" id="content">
            <h1 className="aboutheading">About IIIT Kalyani</h1>
            <hr />
            <div>
              <p className="aboutparagraph">IIIT Kalyani strives to evolve into a world-class academic institution with the highest quality
                of education and research facilities and produce industry ready IT graduates to meet the industry demands.
              </p>
              <p className="aboutparagraph"> The institute will act as a catalyst in fostering an
                innovative entrepreneur-focused ecosystem to ensure that new products, solutions and IP are created in the State taking advantage of the intellectual capital of the State.
              </p>
              <p className="aboutparagraph">IIIT Kalyani has been set up at Kalyani, West Bengal by Government of India (Ministry of Education), Government of West Bengal and industry partners on
                a Not-for-profit Public Private Partnership (N-PPP) basis, being funded in the ratio of 50:35:15 respectively by the above three parties. Additionally, the Government of West Bengal
                has lent support to the institute by granting 50 acres of land for setting up the Campus. The industry partners of IIIT Kalyani are Coal India Ltd. and Rolta Foundation for the present.
              </p>
              <p className="aboutparagraph">The institute is run by the Board of Governors of IIIT Kalyani whose members include the representatives of Government of India (MHRD), Government of West Bengal,
                industry partners and eminent people from academia, industry and civil society.
              </p>
              <p className="aboutparagraph">
                IIIT Kalyani has been attributed the status of Institute of National Importance (INI) by the cabinet in March 2017.
              </p>
              <p className="aboutparagraph">
                While construction has been started in the land provided, the institute is presently running from the temporary campus at Webel IT Park, Kalyani.
              </p>
            </div>
            <h1 className="aboutheading">How to Reach?</h1>
            <hr />
            <p className="aboutparagraph">The most preferred route to reach kalyani if you can make up to
              Howrah / Shalimar / Santragachi / Netaji Subhash Chandra Bose International Airport(Dum Dum).</p>
            <p className="aboutparagraph">All possible routes are mentioned below:</p>
            <div>
              <div className="travel">
                <h4>From Howrah Railway Station</h4>
                <ul>
                  <li>HOWRAH TO SEALDAH<br />
                    <p>From Howrah get a prepaid taxi from the taxi stand to Sealdah railway station (you may book an ola or uber cab). Buses can also be preferred.</p>
                  </li>
                  <li>SEALDAH TO KALYANI<br />
                    <p>From Sealdah Railway station you will get many local trains towards Kalyani.</p>
                  </li>
                  <li>KALYANI TO IIIT KALYANI<br />
                    <p>As you will leave the premise of Kalyani Railway Station, you should be able to find public transports (mostly TATA Magic, beware usually e-rickshaws would not take you to Webel IT Park), towards your right. They will drop you right in front of the gate of Webel IT Park.</p>
                  </li>
                </ul>
              </div>
              <div className="travel">
                <h4>From Howrah Railway Station</h4>
                <ul>
                  <li>HOWRAH TO BANDEL<br />
                    <p>You will get a lot of locals and trains available towards Bandel from the Howrah Junction. </p>
                  </li>
                  <li>BANDEL TO NAIHATI<br />
                    <p>After reaching Bandel Jn. You have to get a train to Naihati Jn. There are a lot of trains to Naihati.</p>
                  </li>
                  <li>NAIHATI TO KALYANI<br />
                    <p>Naihati is just 3 stops away from Kalyani. This is an intermediate stop for local trains which run between Sealdah and Kalyani mention in the Sealdah To Kalyani route above.</p>
                  </li>
                  <li>KALYANI TO IIIT KALYANI<br />
                    <p>As you will leave the premise of Kalyani Railway Station, you should be able to find public transports (mostly TATA Magic, beware usually e-rickshaws would not take you to Webel IT Park), towards your right. They will drop you right in front of the gate of Webel IT Park.</p>
                  </li>
                </ul>
              </div>
              <div className="travel">
                <h4>From Shalimar Railway Station</h4>
                <ul>
                  <li>SHALIMAR TO SEALDAH<br />
                    <p>From Shalimar get a prepaid taxi from the taxi stand to Sealdah railway station (you may book an ola or uber cab). Buses can also be preferred.</p>
                  </li>
                  <li>SEALDAH TO KALYANI<br />
                    <p>From Sealdah Railway station you will get many local trains towards Kalyani.</p>
                  </li>
                  <li>KALYANI TO IIIT KALYANI<br />
                    <p>As you will leave the premise of Kalyani Railway Station, you should be able to find public transports (mostly TATA Magic, beware usually e-rickshaws would not take you to Webel IT Park), towards your right. They will drop you right in front of the gate of Webel IT Park.</p>
                  </li>
                </ul>
              </div>
              <div className="travel">
                <h4>From Dum Dum Airport(Netaji Subhash Chandra Bose Airport)</h4>
                <ul>
                  <li>If you opt for the bus route: You can get a lot of buses to Dum Dum junction from the Airport Gate No. 1 Bus Stop, Jessore Rd.</li>
                  <li>If you opt for the rail route: The nearest station at the airport is the Biman Bandar(550m) and the next nearest station to it is Durganagar(2.7km)</li>
                  <li>From Durganagar there are 72 locals running towards Dum Dum. All the locals to Sealdah pass through Dum Dum.</li>
                  <li>After coming to Dum Dum Jn you will get many locals running towards Kalyani.</li>
                  <li>KALYANI TO IIIT KALYANI<br />
                    <p>As you will leave the premise of Kalyani Railway Station, you should be able to find public transports (mostly TATA Magic, beware usually e-rickshaws would not take you to Webel IT Park), towards your right. They will drop you right in front of the gate of Webel IT Park.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="historyBody">
          <h1 className="aboutheading">History</h1>
          <hr className="complete" />
          <p className="aboutparagraph">The classes started from the first week of July 2014 under the mentorship of IIEST Shibpur, from the temporary campus located at the campus of JIS College
            of Engineering. On 19 August 2014, the official inauguration of the institute was done by the former mentor director Ajoy Kumar Ray, the director of IIEST Shibpur.
            The mentorship was passed on to IIT Kharagpur in 2017 and the institute has since been operating from a transit campus at Webel IT Park.
          </p>
        </div>
        <div className="historyBody">
          <h1 className="aboutheading">About Campus</h1>
          <hr className="complete" />
          <p className="aboutparagraph">
            On Jun 30, 2015 Hon\'ble Chief Minister, Mamata Banerjee laid the foundation stone of the Indian Institute of Information Technology (IIIT)
            campus in Kalyani.The campus will be built on 50 acres on Kalyani Expressway on the outskirts of Kalyani town.
          </p>
        </div>
        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
