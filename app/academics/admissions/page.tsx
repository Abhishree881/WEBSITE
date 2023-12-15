'use client'
import '../../../styles/admissions/admissions.css'
import React from 'react';
import NavBar from '../../sections/appbar/appbar'

import Footer from '../../sections/footer/footer';
import Sidebar from '../../designSystem/sidebar';
import { useEffect } from "react";


const array = [
  {
    headings: [
      { label: "B.Tech Admissions", id: 1 },
      { label: "M.Tech Admissions", id: 2 },
      { label: "Ph.D Admissions", id: 3 },
    ],
  },
  {
    subheadings: [
      {
        label: "Admission details",
        link: "",
      },
      {
        label: "Admission form",
        link: "",
      },
      {
        label: "Annexure 7",
        link: "",
      },
    ],
  },
  {
    subheadings: [
      {
        label: "Executive M.Tech Admission - 2023",
        link: "",
      },
      {
        label: "CEP Admission 2023",
        link: "",
      },
      {
        label: "Application Form",
        link: "",
      },
    ],
  },
  {
    subheadings: [
      {
        label: "Year: 2021",
        link: "",
      },
      {
        label: "Admission details",
        link: "/academics/admissions/pages/phd",
      },
    ],
  },

];

const Admissions = () => {
  useEffect(() => {
    document.title =
      "Admissions | Indian Institute of Information Technology, Kalyani";
  }, []);

  function AdmissionCard(props: { data: any[]; heading: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    return (
      <>

        <div className="card-container">
          <div className="card-body">
            {props.data.map((element, i) => {
              return (
                <>
                  <div>
                    <ul style={{ listStyleType: "square" }}>
                      <li>
                        <div className="data-item">
                          <a href={element[1]} target="_blank" rel="noreferrer">{element[0]}</a>
                          {element[2] ? <div className='new-announcement'>New</div> : <div />}
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
          <div className="card-header">
            <div>
              {props.heading} Admissions
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
        <NavBar isHomepage={false} />
      </div>
      <div className='why-main-heading'>
        <h1>Admissions</h1>
      </div>
      <div className="admissions-container">
        {/* <Sidebar location="" page="Admissions" array={array} /> */}
        <div className="admission-channels">

          <div className="admission-card">
            <AdmissionCard heading="B.Tech" data={[["B.Tech Admission", "/academics/admissions/pages/btech", false], ["Admission details", "/admissions/pdfs/btech/admission_brochure_2023.pdf", true], ["Admission Form", "/admissions/pdfs/btech/Admission%20Form%202023.pdf", true], ["Annexure 7", "/admissions/pdfs/btech/Annexure7.pdf", true]]} />
          </div>

          <div className="admission-card">
            <AdmissionCard heading="M.Tech" data={[["Executive M.Tech Admission - 2023", "admissions/pages/mtech", false], ["CEP Admission 2023 - List of Eligible and Not Eligible Candidates", "/admissions/pdfs/mtech/CEP%20Admission%202023%20-%20List%20of%20Eligible%20and%20Not%20Eligible%20Candidates.pdf", true], ["Admission to Executive M.Tech (Artificial Intelligence and Data Science) Program - July 2023 Session", "/admissions/pdfs/mtech/Advertisement-MTech-2023-IIITKalyani.pdf", true], ["Executive M.Tech Program - 2023: Application Form (PDF)", "/admissions/pdfs/mtech/Executive-MTech-Application-Form-2023.pdf", true], ["Executive M.Tech Program - 2023: Application Form (DOCX)", "/admissions/pdfs/mtech/Executive-MTech-Application-Form-2023.pdf", true]]} />
          </div>

          <div className="admission-card">
            <AdmissionCard heading="PhD" data={[["PhD Admission", "/academics/admissions/pages/phd", false], ["Year: 2021", "", false], ["Admission details", "", false]]} />
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admissions;