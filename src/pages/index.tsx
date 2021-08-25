import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import CircleButton from "../components/CircleButton";
import React from "react";
import CardButton from "../components/CardButton";
import InfoCard from "../components/InfoCard";
import Footer from "../components/Footer";
import BackTitle from "../components/BackTitle";
import NavBar from "../components/NavBar";
import { Parallax } from "react-scroll-parallax";
import PanoramaView from "../components/PanoramaView";
import BookingView from "../components/BookingView";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container cover">
        <NavBar />
        <Parallax className="parallax-class" y={[-20, 20]}>
          <div className="main-row first">
            <div className="title-container">
              <h1>Sri Lanka’s First</h1>
              <h1>
                <strong>High Density</strong> Data Center
              </h1>
              <h5>Nimble | Connected | Sustainable</h5>
            </div>
            <CircleButton title="Virtual Tour" dark={true} />
          </div>
        </Parallax>
        <div className="main-row last">
          <div style={{ display: "flex" }}>
            <div className="row-tag">
              <div className="row-tag-icon">
                <img src="/images/star.svg" alt="star" />
                <img src="/images/star.svg" alt="star" />
                <img src="/images/star.svg" alt="star" />
              </div>
              <h6>TIA 03 Certified</h6>
            </div>
            <div className="row-tag">
              <div className="row-tag-icon">
                <img src="/images/location.svg" alt="pin" />
              </div>
              <h6>Strategically located</h6>
            </div>
            <div className="row-tag">
              <div className="row-tag-icon">
                <img src="/images/money.svg" alt="location" />
              </div>
              <h6>Value Added</h6>
            </div>
          </div>
          <div className="cer-list">
            <img
              className="cer-image"
              src="/images/cert-ansi.png"
              alt="ansi certification"
            />
            <img
              className="cer-image"
              src="/images/cert-iso.png"
              alt="iso certification"
            />
          </div>
        </div>
      </div>

      <Parallax className="middle-banner" y={[-20, 20]}>
        <div className="middle-banner">
          <img src="/images/logo-white.svg" alt="orion sella logo" />
          <p>
            A joint venture between SAPD ( St. Anthony’s property developers)
            and Dialog Broad band Pvt Ltd in the business of best in class
            digital infrastructure solutions . Orionstellar brings Sri Lanka’s
            first high density and carrier neutral data center located at Orion
            city, the Sri Lanka’s largest IT park located at Colombo 09 . This
            is the only Tier 3 certified DC in the Colombo city and is poised to
            offer an array of digital infrastructure solutions and value-added
            managed services to the enterprises in the region.
          </p>
        </div>
      </Parallax>

      <div className="container service">
        <div style={{ display: "flex" }}>
          <img src="/images/services.png" alt="services" />
          <div className="content">
            <h1>Services</h1>
            <p>
              In the era of 4th industrial revolution and Digital Economy the
              Digital infrastructure is in the middle of business strategy and
              CIOs are challenged continuously to scale up the IT systems to
              meet the exponential demands in terms of volume , computational
              power and information security challenges. Orion stellar offers a
              range of digital infrastructure services and managed value added
              services to unburden these challenges such that businesses could
              focus on their core business and innovation in their forward march
              to become a digital enterprise.
            </p>
          </div>
        </div>
        <div className="service-card-section">
          <div>
            <CardButton
              title="enterprise"
              contents="Digital infra is a part of the core strategy to accelerate the digitalization. Let OrionStellar be the partner in the journey to accelerate your roadmaps."
              image="/images/enterprise.png"
            />
            <CardButton
              title="start up"
              contents="In their quest to be the next unicorn the time to market, startups focuses to be quick to market, be cost effective and be a lean and mean organization without large IT teams.
              OrionStellar solutions are tailormade for them with an array of value added services bundled together as a one stop shop."
              image="/images/startup.png"
              marginLeft="60px"
            />
          </div>
          <CircleButton title="More Services" />
        </div>
        <div className="env-section">
          <div className="content">
            <img
              className="logo"
              src="/images/logo-white.svg"
              alt="orion sella logo"
            />
            <h1>Environmental</h1>
            <h2>Sustainability</h2>
            <ul>
              <li>
                IT consumes 3% of the power off the grid globally and the power
                demand keep increasing hence the need for power efficient
                datacenters has become a necessity in terms of environmental
                protection.{" "}
              </li>
              <li>
                Orion stellar data center has the most optimum Power Usage
                Efficiency (PUE) in the country.
              </li>
              <li>
                Lighting control system that could give 50% of energy saving
              </li>
              <li>
                LEED silver certified green building housing the datacenter
              </li>
            </ul>
            <img src="/images/cert-leed.png" alt="leed certification" />
          </div>
          <img src="/images/environment.png" alt="environment" />
        </div>
        <BackTitle title="Uniqueness" />
        <div className="card-section">
          <InfoCard
            image="/images/card1.png"
            title="Sri Lanka’s First High Density Data Center."
            description={
              <ul>
                <li>15Kw+ per Rack</li>
                <li>Design PUE at 1.4</li>
                <li>Best Power Efficiency</li>
              </ul>
            }
          />
          <InfoCard
            image="/images/card2.png"
            title="Sri Lanka’s First Carrier Neutral Data Center."
            description={
              <ul>
                <li>2x MMRs</li>
                <li>Both SLT, Dialog available with fiber rings</li>
                <li>SD-WAN Enabled</li>
              </ul>
            }
          />
          <InfoCard
            image="/images/card3.png"
            title="Superior Rack Space per Footprint"
            description={
              <ul>
                <li>50U Vs 42U in other data centers</li>
                <li>Cost optimization</li>
              </ul>
            }
          />
          <InfoCard
            image="/images/card4.png"
            title="Fine Energy Metering Granularity"
            description={
              <ul>
                <li>Able to meter power usage at U Level</li>
                <li>“Pay as you go“ model</li>
              </ul>
            }
          />
          <InfoCard
            image="/images/card5.png"
            title="Colombo’s only Tier 3 Certified Data Center."
            description={
              <ul>
                <li>Only Rated 3 commercial data center in Colombo</li>
              </ul>
            }
          />
          <InfoCard
            image="/images/card6.png"
            title="Strategic Location Advantage"
            description={
              <ul>
                <li>Access to Business Hubs & IT parks</li>
                <li>Ports & Administrative District</li>
              </ul>
            }
          />
        </div>

        <div className="sub-btn">
          <h5 className="sub-btn-title">More Details</h5>
          <div className="btn-wrap">
            <div className="first-btn">What is a Meet-Me Room?</div>
            <div className="middle-btn">
              Why Carrier-Neutral Data Centers are Key to Reduce WAN Costs
            </div>
          </div>
        </div>

        <div className="data-center-tour-section">
          <BackTitle
            title="Data Center Tour"
            subtitle="Virtual Tour"
            size="23"
          />
          <img src="/images/datacenter.png" alt="datacenter" />
          {/* <PanoramaView image="/images/pano-image.jpg"/> */}
          <div className="message">
            <div className="iso-message">
              We welcome you to experience our State of the Art data center
              located at Orion city the largest IT park in the county. You will
              learn about the best in class technologies used in the DC built
              and operation and management using Schneider Eco structure DCIM
              platform . We can demonstrate how multilayered physical security
              systems are in operation to ensure the Physical security as per
              ISO 2700:2013 framework.
            </div>
            <img
              className="cer-image"
              src="/images/cert-iso.png"
              alt="iso certification"
            />
          </div>
        </div>

        <div className="book-tour-section">
          <BackTitle
            title="Data Center Tour"
            subtitle="Book A Tour"
            size="23"
          />
          <div className="calendar">
            <BookingView />
          </div>
        </div>

        <div className="partner-section">
          <div className="title">
            <h5>Strategic partners</h5>
          </div>
          <div className="logos">
            <img src="/images/logos/schneider.png" alt="schneider" />
            <img src="/images/logos/cat.png" alt="cat" />
            <img src="/images/logos/socomec.png" alt="socomec" />
            <img src="/images/logos/apc.png" alt="apc" />
            <img src="/images/logos/cisco.png" alt="cisco" />
          </div>
          <div className="logos">
            <img src="/images/logos/corning.png" alt="corning" />
            <img src="/images/logos/siemens.png" alt="siemens" />
            <img src="/images/logos/hisharp.png" alt="hisharp" />
            <img src="/images/logos/paessler.png" alt="paessler" />
            <img src="/images/logos/css.png" alt="css" />
          </div>
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
          background-image: url("/images/cover1.png");
          height: 1100px;
          display: flex;
          flex-direction: column;
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
          font-family: "SegoeUI", sans-serif;
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
        .middle-banner {
          position: absolute;
          /* left: 306px;
          top: 973px; */
          margin-left: 306px;
          margin-top: -133px;
          width: 1050px;
          height: 160px;

          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 48px 72px;

          background: linear-gradient(
            105.26deg,
            rgba(146, 137, 200, 0.57) -4.86%,
            rgba(255, 255, 255, 0) 108.25%,
            rgba(255, 255, 255, 0.28) 108.25%
          );
          backdrop-filter: blur(40px);
        }
        .middle-banner p {
          margin-left: 48px;
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: 350;
          font-size: 18px;
          line-height: 24px;
        }
        .service {
          display: flex;
          background: linear-gradient(
            125.54deg,
            #0f1d31 30.98%,
            rgba(62, 9, 114, 0.86) 163.03%
          );
          flex-wrap: wrap;
        }
        .service h1 {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: bold;
          font-size: 130px;
          line-height: 173px;
        }
        .service p {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: 350;
          font-size: 24px;
          line-height: 32px;
          margin-top: 40px;
        }
        .service .content {
          padding: 200px 120px 10px 120px;
        }
        .service .service-card-section {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: -91px;
        }
        .env-section {
          display: flex;
          align-items: center;
        }
        .env-section img {
          height: fit-content;
        }
        .env-section h1 {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: bold;
          font-size: 130px;
          line-height: 173px;
          color: #00cb76;
        }
        .env-section h2 {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: normal;
          font-size: 100px;
          line-height: 133px;
          color: #ffffff;
          margin: -40px 0 60px 0;
        }
        .env-section ul li {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 32px;
          color: #ffffff;
          mix-blend-mode: normal;
        }
        .env-section .content .logo {
          position: relative;
          left: 280px;
          margin-bottom: -46px;
        }
        .env-section .content img {
          position: absolute;
          left: 894px;
          margin-top: -60px;
        }
        .env-section img {
          margin-top: 150px;
        }
        .card-section {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
          z-index: 5;
        }
        .sub-btn {
          font-style: normal;
          color: #ffffff;
          font-family: Segoe UI;
        }
        .sub-btn .sub-btn-title {
          font-weight: bold;
          font-size: 35px;
          line-height: 115.51%;
          margin-left: 93px;
          margin-bottom: 44px;
        }
        .sub-btn .btn-wrap {
          display: flex;
          flex-direction: row;
          gap: 28px;
        }
        .sub-btn .first-btn {
          font-weight: normal;
          font-size: 18px;
          line-height: 24px;
          padding: 10px 20px 10px 93px;
          background: black;
          cursor: pointer;
        }
        .sub-btn .middle-btn {
          font-weight: normal;
          font-size: 18px;
          line-height: 24px;
          padding: 10px 20px 10px 20px;
          background: black;
          cursor: pointer;
        }
        .data-center-tour-section .message {
          margin-left: 252px;
          margin-top: 78px;
          display: flex;
        }
        .data-center-tour-section .iso-message {
          width: 978px;
          height: 157px;
          font-size: 18px;
          line-height: 24px;
          color: #ffffff;
        }
        .book-tour-section .calendar {
          margin-top: 400px;
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
          font-family: "SegoeUI";
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
