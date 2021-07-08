import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import CircleButton from "../../components/CircleButton";
import StarIcon from "../assets/star-alt.svg";
import LocationIcon from "../assets/pin-alt.svg";
import PaidIcon from "../assets/paid-alt.svg";
import Image from "next/image";
import React from "react";
import CardButton from "../../components/CardButton";
import InfoCard from "../../components/InfoCard";
import Footer from "../../components/Footer";
import BackTitle from "../../components/BackTitle";
import ProfileCard from "../../components/ProfileCard";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container cover">
        <div className="nav-row">
          <div className="logo">
            <img src="/images/logo-white.svg" alt="orion sella logo" />
            <h6>Accelerating Enterprise Digitalization</h6>
          </div>
          <div className="button-list">
            <div>About Us</div>
            <div>Our Services</div>
            <div>Tour</div>
            <div>Contact</div>
          </div>
        </div>

      </div>

      <div className="container service">
        <BackTitle title="Deliverables" />
        <div className="card-section">
          <InfoCard
            image="/images/card1.png"
            title="Sri Lanka’s First High Density Data Center."
            description="15Kw+ per Rack
           Design PUE at 1.4
           Best Power Efficiency"
          />
          <InfoCard
            image="/images/card2.png"
            title="Sri Lanka’s First Carrier Neutral Data Center."
            description="15Kw+ per Rack
           Design PUE at 1.4
           Best Power Efficiency"
          />
          <InfoCard
            image="/images/card3.png"
            title="Superior Rack Space per Footprint"
            description="15Kw+ per Rack
           Design PUE at 1.4
           Best Power Efficiency"
          />
          <InfoCard
            image="/images/card4.png"
            title="Fine Energy Metering Granularity"
            description="Able to meter power usage at U Level “Pay as you go“ model"
          />
          <InfoCard
            image="/images/card5.png"
            title="Colombo’s only Tier 3 Certified Data Center."
            description="15Kw+ per Rack
           Design PUE at 1.4
           Best Power Efficiency"
          />
          <InfoCard
            image="/images/card6.png"
            title="Strategic Location Advantage"
            description="15Kw+ per Rack
           Design PUE at 1.4
           Best Power Efficiency"
          />
        </div>

        <h4 className="section-header">Thought Leaders</h4>
        <BackTitle title="Leadership" bottom={40}/>
        <div className="leader-section">
          <ProfileCard
            image="/images/team/Rajendra.png"
            title="Chairman"
            name="Rajendra Theagarah"
            workTitle="Chairman"
            workLogo="/images/logos/degital-realty.png"
            description="Rajendra is a banking veteran, technologist, and business transformation leader. Rajendra started his career as a Chartered Accountant and is a member of the Chartered Institute of Management Accountants (UK).
            Mr. Theagarajah holds an MBA from Cranfield School of Management. He has over 37yrs of international experience in the Banking sector and is the recipient of multiple awards of recognition for his service and excellence in managing Sri Lankan banks."
          />
          <ProfileCard
            image="/images/team/Eric.png"
            title="Director"
            name="Eric Selvadurai"
            workTitle="Managing Director"
            workLogo="/images/logos/accelya.png"
            description="Eric brings over 30yrs of Business Process Management experience. His last appointment was with WNS Global Services where he held several senior management positions. 
            As Global Operations Director, he was responsible for building the Global Delivery and Support structure to enable significant growth; as CEO of the Enterprise Business, he created the F&A practice and the Shipping Logistics & Infrastructure division as Managing Director of Europe and South Africa region he was responsible for strategic deals and operations."
          />
          <ProfileCard
            image="/images/team/Supun.png"
            title="Director"
            name="Supun Weerasinghe"
            workTitle="GCEO"
            workLogo="/images/logos/dialog.png"
            description="Supun serves as Group Chief Executive and board member for Dialog Axiata. 
            Mr. Weerasinghe started his career in telecommunications at Dialog Axiata and has held multiple roles, such as Head of Strategy and CEO of the Mobile Business before being appointed as Group Chief Operating Officer of Dialog Axiata in 2010."
          />
          <ProfileCard
            image="/images/team/Pradeep.png"
            title="Director"
            name="Pradeep De Almeida"
            workTitle="Group Chief Technology Officer"
            workLogo="/images/logos/dialog.png"
            description="Supun serves as Group Chief Executive and board member for Dialog Axiata. 
            Mr. Weerasinghe started his career in telecommunications at Dialog Axiata and has held multiple roles, such as Head of Strategy and CEO of the Mobile Business before being appointed as Group Chief Operating Officer of Dialog Axiata in 2010."
          />
          <ProfileCard
            image="/images/team/Jeevan.png"
            title="Chief Executive Officer"
            name="Jeevan Gnanam"
            workTitle="Managing Director"
            workLogo="/images/logos/degital-realty.png"
            description="Jeevan is the visionary behind Sri Lanka’s first operational IT Park – Orion City. 
            Jeevan serves as the CEO of Anton. 
            His venture SAKS (SA Knowledge Services) was incorporated in 2012. His AI company, Veracity AI is recognized as a game changer across multiple industries. 
            He is also the president of SLASSCOM along with being a founder of the Lanka Angel Network and Hatch an innovative coworking space and accelerator."
          />
          <ProfileCard
            image="/images/team/Nalaka.png"
            title="Chief Operations Officer"
            name="Nalaka Bandara"
            workTitle="Chief operations officer"
            workLogo="/images/logos/degital-realty.png"
            description="Nalaka brings over 20yrs of experience in enterprise solutions business with over 10yrs experience in data center business.
            He launched Sri Lankas first Tier 3 certified DC and served as General manager for data center & cloud business at Dialog Axiata PLC.
           Nalaka holds a BSc in Engineering and an MBA from University of Colombo.
           He also holds Diploma in Management accounting from CIMA UK"
          />
        </div>

        <Footer />
      </div>
      <style jsx>{`
        .container {
          width: 100%;
        }
        .cover {
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url("/images/cover2.png");
          height: 1100px;
          display: flex;
          flex-direction: column;
        }
        .nav-row {
          display: flex;
          justify-content: space-between;
          flex: 1 1 auto;
          padding: 0 40px;
          font-family: "Segoe UI", sans-serif;
          font-style: normal;
          color: #ffffff;
          margin-top: 48px;
          height: 0;
        }
        .nav-row .logo h6 {
          font-family: Segoe UI;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          letter-spacing: 0.14em;
          margin-top: 12px;
        }
        .nav-row .logo {
          flex: 2;
        }
        .nav-row .button-list {
          display: flex;
          align-items: flex-start;
          justify-content: space-around;
          flex: 1;
          padding: 0 130px;
        }
        .main-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1 1 auto;
          padding: 0 130px;
        }
        .main-row:last-child {
          margin-bottom: 100px;
        }
        .title-container h1 {
          font-family: "Segoe UI", sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 95px;
        }
        .row-tag {
          margin-right: 58px;
          color: #ffffff;
        }
        .row-tag-icon {
          display: flex;
          justify-content: space-around;
        }
        .row-tag h6 {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 13px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        p {
          margin: 0;
          color: #ffffff;
        }
        h1 {
          margin: 0;
          color: #ffffff;
        }
        h5 {
          font-size: 24px;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: 0.215em;
          text-transform: uppercase;
          color: #ffffff;
        }
        .cer-image {
          height: 102.62px;
          width: auto;
          margin-left: 40px;
        }
        .service {
          display: flex;
          background: linear-gradient(
            125.54deg,
            #0f1d31 30.98%,
            rgba(3, 91, 91, 0.77) 163.03%
          );
          flex-wrap: wrap;
        }
        .service h1 {
          font-family: Segoe UI;
          font-style: normal;
          font-weight: bold;
          font-size: 130px;
          line-height: 173px;
        }
        .service p {
          font-family: Segoe UI;
          font-style: normal;
          font-weight: 350;
          font-size: 24px;
          line-height: 32px;
          margin-top: 40px;
        }
        .service .content {
          padding: 200px 120px;
        }
        .service .service-card-section {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: -91px;
        }
        .section-header {
          font-family: Segoe UI;
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 94.01%;
          letter-spacing: 0.53em;
          text-transform: uppercase;
          color: #ffffff;
          z-index: 2;
    margin-bottom: -96px;
        }
        .card-section {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
        .leader-section {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: flex-start;
        }
        .partner-section {
          width: 95%;
          margin-top: 160px;
        }
        .partner-section .title {
          width: 484px;
          height: 46px;
          background: #ffffff;
          opacity: 0.9;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          margin-bottom: 100px;
        }
        .partner-section .title h5 {
          font-family: Segoe UI;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 101.69%;
          letter-spacing: 0.595em;
          text-transform: uppercase;
          color: #000000;
        }
        .partner-section .logos {
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
        }
        .partner-section .logos img {
          height: fit-content;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
