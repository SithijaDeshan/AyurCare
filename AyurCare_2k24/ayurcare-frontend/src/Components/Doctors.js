import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.jpg";
import profile2 from "../Assets/img_2.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Doctors() {
  return (
      <div className="doc-main">
        <Navbar/>
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          AyurCare Staff
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at AyurCare. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Hemsworth"
          title="General Surgeons"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Ms. Sophia"
          title="Clinical Staff"

        />

        <DoctorCard
          img={profile4}
          name="Dr. Albert Flores"
          title="Hematologists"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
        <Footer/>
      </div>
  );
}

export default Doctors;
