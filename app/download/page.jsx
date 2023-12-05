"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import NavBar from "../sections/appbar/appbar";
import Footer from "../sections/footer/footer";

const page = () => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay((display) => !display);
  };
  useEffect(() => {
    document.title =
      "Downloads | Indian Institute of Information Technology, Kalyani";
  }, []);
  return (
    <>
      <div className="h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile">
        <NavBar isHomepage={false} />
      </div>
      <div className="downloads">
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n.a {\n  border-left: 6px solid red;\n  background-color: lightblue;\n}\n",
          }}
        />
        {/* <?php include 'headersub.php';?> */}
        <div className="downloads-container">
          <h2>Downloads</h2>
          <br />
          <p>
            Download New National Education Policy-2020 (English)
            <a href="/downloads/downloads/NEP-English.pdf" target="_blank">
              {" "}
              Click here{" "}
            </a>
          </p>
          <p>
            Download New National Education Policy-2020 (Hindi)
            <a href="/downloads/downloads/NEP-Hindi.pdf" target="_blank">
              {" "}
              Click here{" "}
            </a>
          </p>
          <hr />
          &nbsp;
          {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"> */}
          <div className="downloads-container">
            <h2>Minutes of the Building and Works Committee</h2>
            <table className="table">
              <tbody>
                <tr className="danger">
                  <td>Resolutions of the Building and Works Committee</td>
                  <td>
                    <a
                      href="/downloads/downloads/Minutes_BWC_1_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Minutes BWC 1 IIIT Kalyani
                    </a>
                    <br />
                    <a
                      href="/downloads/downloads/Minutes_BWC_2_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Minutes BWC 2 IIIT Kalyani
                    </a>
                    <br />
                    <a
                      href="/downloads/downloads/Minutes-BWC_3_ Annexure-I.pdf"
                      target="_blank"
                    >
                      Minutes BWC 3 Annexure-I{" "}
                    </a>
                    <br />
                    <a
                      href="/downloads/downloads/Minutes_BWC_3_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Minutes BWC 3 IIIT Kalyani
                    </a>
                    <br />
                    <a
                      href="/downloads/downloads/MinutesBWC4IIITKalyani.pdf"
                      target="_blank"
                    >
                      Minutes BWC 4 IIIT Kalyani
                    </a>
                    <br />
                    <a
                      href="/downloads/downloads/Minutes_BWC_5_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Minutes BWC 5 IIIT Kalyani
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="downloads-container">
            <h2>Finance Committee minutes</h2>
            <table className="table">
              <tbody>
                <tr className="warning">
                  <td>
                    Resolutions of the 1st Meeting of the Finance Committee 2021
                  </td>
                  <td>
                    <a
                      href="/downloads/downloads/Minutes_FC_1_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Minutes FC 1 IIIT Kalyani
                    </a>
                  </td>
                  <td>
                    <a
                      href="/downloads/downloads/Annexure - I.pdf"
                      target="_blank"
                    >
                      Annexure - I
                    </a>
                    <br />
                    <a
                      href="/downloads/downloads/Annexure - II.pdf"
                      target="_blank"
                    >
                      Annexure - II
                    </a>
                  </td>
                </tr>
                <tr className="warning">
                  <td>
                    Resolutions of the 2nd Meeting of the Finance Committee
                  </td>
                  <td />
                  <td>
                    <a
                      href="/downloads/downloads/Minutes_FC_2_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Downoad
                    </a>
                    <br />
                  </td>
                </tr>
                <tr className="warning">
                  <td>
                    Resolutions of the 3rd Meeting of the Finance Committee
                  </td>
                  <td />
                  <td>
                    <a
                      href="/downloads/downloads/Minutes_FC_3_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Download
                    </a>
                    <br />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="downloads-container">
            <h2>Audit &amp; Annual Reports</h2>
            <table className="table">
              <tbody>
                <tr className="warning">
                  <td>2014-2015</td>
                  <td>
                    <a
                      href="/downloads/reports/1. Annual Accounts_2014-15.pdf"
                      target="_blank"
                    >
                      {" "}
                      Audit Report
                    </a>
                  </td>
                  <td>
                    <a
                      href="/downloads/reports/1. Annual Report- 2014-2017 English.pdf"
                      target="_blank"
                    >
                      Annual Report (2014-2017)
                    </a>
                  </td>
                </tr>
                <tr className="warning">
                  <td>2015-2016</td>
                  <td>
                    <a
                      href="/downloads/reports/2. Annual Accounts_2015-16.pdf"
                      target="_blank"
                    >
                      {" "}
                      Audit Report
                    </a>
                  </td>
                  <td>
                    <a
                      href="/downloads/reports/1. Annual Report- 2014-2017 English.pdf"
                      target="_blank"
                    >
                      Annual Report (2014-2017)
                    </a>
                  </td>
                </tr>
                <tr className="warning">
                  <td>2016-2017</td>
                  <td>
                    <a
                      href="/downloads/reports/3. Annual Accounts_2016-17.pdf"
                      target="_blank"
                    >
                      {" "}
                      Audit Report
                    </a>
                  </td>
                  <td>
                    <a
                      href="/downloads/reports/1. Annual Report- 2014-2017 English.pdf"
                      target="_blank"
                    >
                      Annual Report (2014-2017)
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>2017-2018</td>
                  <td>
                    <a
                      href="/downloads/reports/4. English Audited Accounts 2017-18.pdf"
                      target="_blank"
                    >
                      {" "}
                      Audit Report
                    </a>
                  </td>
                  <td>
                    <a
                      href="/downloads/reports/2. Annual Report- 2017-18 English.pdf"
                      target="_blank"
                    >
                      Annual Report
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>2018-2019</td>
                  <td>
                    <a
                      href="/downloads/reports/5. English Audited Accounts 2018-19.pdf"
                      target="_blank"
                    >
                      {" "}
                      Audit Report
                    </a>
                  </td>
                  <td>
                    <a
                      href="/downloads/reports/3. Annual Report- 2018-19 English.pdf"
                      target="_blank"
                    >
                      Annual Report
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>2019-2020</td>
                  <td>
                    <a
                      href="/downloads/reports/6. English Audited Accounts 2019-20.pdf"
                      target="_blank"
                    >
                      {" "}
                      Audit Report
                    </a>
                  </td>
                  <td>
                    <a
                      href="/downloads/reports/4. Annual Report- 2019-20 English.pdf"
                      target="_blank"
                    >
                      Annual Report
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>2020-2021</td>
                  <td>
                    <a
                      href="/downloads/reports/7. Annual Accounts_2020-21.pdf"
                      target="_blank"
                    >
                      {" "}
                      Audit Report
                    </a>
                  </td>
                  <td>
                    <a
                      href="/downloads/reports/5. Annual Report - 2020-21 English.pdf"
                      target="_blank"
                    >
                      Annual Report
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>2021-2022</td>
                  <td>
                    <a
                      href="/downloads/reports/Audit Report 2021-22.pdf"
                      target="_blank"
                    >
                      {" "}
                      Audit Report
                    </a>
                  </td>
                  <td>
                    <a
                      href="/downloads/reports/Annual Report 2021-22.pdf"
                      target="_blank"
                    >
                      Annual Report
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="downloads-container">
            <h2>BoG and GB minutes</h2>
            <table className="table">
              <tbody>
                <tr className="success">
                  <td>BOG 1</td>
                  <td>
                    <a
                      href="/downloads/downloads/bog_mom/Minutes_BoG_1_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Click here to download{" "}
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>BOG 2</td>
                  <td>
                    <a
                      href="/downloads/downloads/bog_mom/Minutes_BoG_2_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Click here to download{" "}
                    </a>
                    <br />
                    <a
                      href="/downloads/downloads/bog_mom/Annexure.zip"
                      target="_blank"
                    >
                      Click here to download [Part 2]
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>BOG 3</td>
                  <td>
                    <a
                      href="/downloads/downloads/bog_mom/approved_minutes_3rd_BoG.pdf"
                      target="_blank"
                    >
                      Click here to download{" "}
                    </a>
                    <br />
                  </td>
                </tr>
                <tr className="success">
                  <td>BOG 4</td>
                  <td>
                    <a
                      href="/downloads/downloads/bog_mom/Minutes_BoG_4_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Click here to download{" "}
                    </a>
                    <br />
                  </td>
                </tr>
                <tr className="success">
                  <td>GB 1</td>
                  <td>
                    <a
                      href="/downloads/downloads/bog_mom/Minutes_GB_1_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Click here to download{" "}
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>GB 2</td>
                  <td>
                    <a
                      href="/downloads/downloads/bog_mom/Minutes_GB_2_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Click here to download{" "}
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>GB 3</td>
                  <td>
                    <a
                      href="/downloads/downloads/bog_mom/Minutes_GB_3_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Click here to download{" "}
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>GB 4</td>
                  <td>
                    <a
                      href="/downloads/downloads/bog_mom/Minutes_GB_4_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Click here to download{" "}
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>GB 5</td>
                  <td>
                    <a
                      href="/downloads/downloads/bog_mom/Minutes_GB_5_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Click here to download
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>GB 6</td>
                  <td>
                    <a
                      href="/downloads/downloads/bog_mom/Minutes_GB_6_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Click here to download
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>GB 7</td>
                  <td>
                    <a
                      href="/downloads/downloads/bog_mom/Minutes_GB_7_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Click here to download
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>GB 8</td>
                  <td>
                    <a
                      href="/downloads/downloads/bog_mom/Minutes_GB_8_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Click here to download
                    </a>
                  </td>
                </tr>
                <tr className="warning">
                  <td>GB 9</td>
                  <td>
                    <a
                      href="/downloads/downloads/bog_mom/Minutes_GB_9_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Click here to download
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>GB 10</td>
                  <td>
                    <a
                      href="/downloads/downloads/bog_mom/Minutes_GB_10_IIIT_Kalyani.pdf"
                      target="_blank"
                    >
                      Click here to download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="downloads-container">
            <h2>Minutes of Senate Meeting</h2>
            <table className="table">
              <tbody>
                <tr className="success">
                  <td>Minutes of 1st Senate Meeting</td>
                  <td>
                    <a
                      href="/downloads/downloads/MinutesofSenateMeetings/Minutes_of_1st_Senate_Meeting.pdf"
                      target="_blank"
                    >
                      Click here to download{" "}
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>Minutes of 2nd Senate Meeting</td>
                  <td>
                    <a
                      href="/downloads/downloads/MinutesofSenateMeetings/Minutes_of_2nd_Senate_Meeting.pdf"
                      target="_blank"
                    >
                      Click here to download{" "}
                    </a>
                  </td>
                </tr>
                <tr className="warning">
                  <td>Minutes of 3rd Senate Meeting</td>
                  <td>
                    <a
                      href="/downloads/downloads/MinutesofSenateMeetings/Minutes_of_3rd_Senate_Meeting.pdf"
                      target="_blank"
                    >
                      Click here to download{" "}
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>Minutes of 4th Senate Meeting</td>
                  <td>
                    <a
                      href="/downloads/downloads/MinutesofSenateMeetings/Minutes_of_4th_Senate_Meeting.pdf"
                      target="_blank"
                    >
                      Click here to download{" "}
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>Minutes of 5th Senate Meeting</td>
                  <td>
                    <a
                      href="/downloads/downloads/MinutesofSenateMeetings/Minutes_of_5th_Senate_Meeting.pdf"
                      target="_blank"
                    >
                      Click here to download{" "}
                    </a>
                  </td>
                </tr>
                <tr className="success">
                  <td>Minutes of 6th Senate Meeting</td>
                  <td>
                    <a
                      href="/downloads/downloads/MinutesofSenateMeetings/Minutes_of_6th_Senate_Meeting.pdf"
                      target="_blank"
                    >
                      Click here to download{" "}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <h2>Forms</h2>
          <br />
          <div className="downloads-row">
            <div className="col-sm-4">
              <ul>
                <li>
                  <a
                    href="/downloads/images/notification2021/TA Bill_Claim Form.docx"
                    target="_blank"
                  >
                    TA Bill_Claim
                  </a>
                </li>
                <li>
                  <a
                    href="/downloads/images/notification2021/IIITK LTC Advance Claim Form.docx"
                    target="_blank"
                  >
                    IIITK LTC Advance Claim Form
                  </a>
                </li>
                <li>
                  <a
                    href="/downloads/images/notification2021/IIITK LTC Claim Form .docx"
                    target="_blank"
                  >
                    IIITK LTC Claim Form
                  </a>
                </li>
                <li>
                  <a
                    href="/downloads/images/downloads/CPDA_Bill (1).pdf"
                    target="_blank"
                  >
                    CPDA Bill
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    Examination Rules and Ordinance for B.tech
                  </a>
                </li>
                <li>
                  <a
                    href="/downloads/images/downloads/CAUTION MONEY WITHDRAWAL FORM.pdf"
                    target="_blank"
                  >
                    Caution Money Withdrawal Form
                  </a>
                </li>
                <li>
                  <a
                    href="/downloads/images/downloads/NameWITHDRAWAL.pdf"
                    target="_blank"
                  >
                    Name Withdrawal Form
                  </a>
                </li>
                <li>
                  <a
                    href="/downloads/images/downloads/Internship app. form.pdf"
                    target="_blank"
                  >
                    {" "}
                    Internship application form
                  </a>
                </li>
                <li>
                  <a
                    href="/downloads/images/form/Application for transcript.pdf"
                    target="_blank"
                  >
                    Application form for Transcript
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="/downloads/images/form/transcript and form details.pdf"
                    target="_blank"
                  >
                    Rules
                  </a>
                </li>
                <li>
                  <a
                    href="/downloads/images/form/MIgrationCERTIFICATE_form.pdf"
                    target="_blank"
                  >
                    Migration Certificate Form
                  </a>
                  &nbsp;&nbsp;
                  <a
                    href="/downloads/images/form/transcript and form details.pdf"
                    target="_blank"
                  >
                    Rules
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <li>
                <a
                  href="/downloads/images/4. Inpatient Form (1).pdf"
                  target="_blank"
                >
                  Inpatient Form (1)
                </a>
              </li>
              <li>
                <a
                  href="/downloads/images/5. Outpatient Form (1).pdf"
                  target="_blank"
                >
                  Outpatient Form (1)
                </a>
              </li>
              <li>
                <a
                  href="/downloads/images/Telephone & Internet Claim form.pdf"
                  target="_blank"
                >
                  Telephone &amp; Internet Claim form
                </a>
              </li>
              <li>
                <a
                  href="/downloads/images/downloads/CPDA_1_requisitionApproval.pdf"
                  target="_blank"
                >
                  CPDA requisition form
                </a>
              </li>
              <li>
                <a
                  href="/downloads/images/downloads/Leave Application Format.pdf"
                  target="_blank"
                >
                  Leave Application Format
                </a>
              </li>
              <li>
                <a
                  href="/downloads/images/notification2021/Ref. DoPT OM No. A-27012022017-Estt. (AL) dated 17th July 2018 f3dc688b5389c30558236e39b75307b7 (1).pdf"
                  target="_blank"
                >
                  Office Memorandum of Children Education Allowance (CEA)
                </a>
              </li>
              <li>
                <a
                  href="/downloads/images/notification2021/Children Education Allowance Claim Form (1).pdf"
                  target="_blank"
                >
                  Children Education Allowance Form(CEA) [pdf]
                </a>
              </li>
              <li>
                <a
                  href="/downloads/images/notification2021/Children Education Allowance Claim Form (1).docx"
                  target="_blank"
                >
                  Children Education Allowance Form(CEA) [doc]
                </a>
              </li>
            </div>
            <div className="col-sm-4">
              <h5>Service Book Forms</h5>
              <li>
                <a
                  href="/downloads/images/downloads/servicebook/001_medical certificate.pdf"
                  target="_blank"
                >
                  Medical Certificate
                </a>
              </li>
              <li>
                <a
                  href="/downloads/images/downloads/servicebook/002_character.pdf"
                  target="_blank"
                >
                  Character Certificate
                </a>
              </li>
              <li>
                <a
                  href="/downloads/images/downloads/servicebook/003_oath.pdf"
                  target="_blank"
                >
                  Oath of allegiance
                </a>
              </li>
              <li>
                <a
                  href="/downloads/images/downloads/servicebook/004_Affidavit.pdf"
                  target="_blank"
                >
                  Affidavit
                </a>
              </li>
              <li>
                <a
                  href="/downloads/images/downloads/servicebook/005_Declaration of Marital Status.pdf"
                  target="_blank"
                >
                  Declaration of Marital Status
                </a>
              </li>
              <li>
                <a
                  href="/downloads/images/downloads/servicebook/006_Home_Town.pdf
"
                  target="_blank"
                >
                  Home Town Declaration Form
                </a>
              </li>
              <li>
                <a
                  href="/downloads/images/downloads/family detils-form 3 new.pdf
"
                  target="_blank"
                >
                  Family Declaration Form
                </a>
              </li>
              <li>
                <a
                  href="/downloads/images/downloads/servicebook/010_011_Form 1.pdf
"
                  target="_blank"
                >
                  Nomination for Retirement Gratuity/Death Gratuity
                </a>
              </li>
              <button onClick={handleClick}>
                More information about Service book
              </button>
            </div>
          </div>
          {/* footer starts */}
          {display ? (
            <div id="myModal1" className="modal fade" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Details</h4>
                  </div>
                  <div className="modal-body">
                    Creation of service book is a part of joining process.
                    Please download the attached documents and fill them and get
                    them certified by the competent authority. The attached
                    documents are: 1. Medical Certificate 2. Character
                    Certificate 3. Oath 4. Affidavit 5. Declaration of Marital
                    Status 6. Home town declaration 7. Filled xerox copy of bio
                    data of Service book front page 9. Family Declaration 10-11.
                    Nomination Also include the following documents along with
                    the above attached documents. 1. Marriage Certificate, if
                    applicable 2. Photographs of Family Members 3. Appointments
                    letter sent from IIIT Kalyani 4. Call Letter sent from IIIT
                    Kalyani 5. NOC, if applicable 6. Proof of all previous
                    qualifying services
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* <?php include 'footer.php';?> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
