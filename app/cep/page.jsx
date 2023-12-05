"use client";

import React, { useEffect } from "react";
import educationProgram from "../sections/cardSection/educationProgram";
import "./page.css";

const page = () => {
  useEffect(() => {
    document.title =
      "CEP | Indian Institute of Information Technology, Kalyani";
  }, []);
  return (
    <div className="announcement-page">
      <h1>All Programs</h1>
      <ul style={{ listStyle: "circle" }}>
        {educationProgram.map((index) => {
          return (
            <a href={index.url}>
              <li>{index.title} </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
