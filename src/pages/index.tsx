import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import CircleButton from "../components/CircleButton";
import StarIcon from "../assets/star-alt.svg";
import LocationIcon from "../assets/pin-alt.svg";
import PaidIcon from "../assets/paid-alt.svg";
import Image from "next/image";
import React from "react";
import CardButton from "../components/CardButton";
import InfoCard from "../components/InfoCard";

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

      <div className="middle-banner">
        <img src="/images/logo-white.svg" alt="orion sella logo" />
        <p>
          A joint venture between SAPD ( St. Anthony’s property developers) and
          Dialog Broad band Pvt Ltd in the business of best in class digital
          infrastructure solutions . Orionstellar brings Sri Lanka’s first high
          density and carrier neutral data center located at Orion city, the Sri
          Lanka’s largest IT park located at Colombo 09 . This is the only Tier
          3 certified DC in the Colombo city and is poised to offer an array of
          digital infrastructure solutions and value-added managed services to
          the enterprises in the region.
        </p>
      </div>

      <div className="container service">
        <div style={{ display: "flex" }}>
          <img src="/images/services.png" alt="services" />
          <div className="content">
            <h1>Services</h1>
            <p>
              In the era of 4 th industrial revolution and Gig economy the
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
            <CardButton title="enterprise" image="/images/enterprise.png" />
            <CardButton
              title="start up"
              image="/images/startup.png"
              marginLeft="60px"
            />
          </div>
          <CircleButton title="More Services" />
        </div>
        <div className="env-section">
          <div className="content">
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
        <span className="hiddenTitle">Uniqueness</span>
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
        <div className="footer-wrap"></div>
        <div className="footer">
          <div className="footer-contents">
            <div className="form">
              <h2>Accelerating Enterprise Digitalization</h2>
              <p>
                Get Exclusive <span>Digitalization Technology</span> updates
                straight to your inbox
              </p>
            </div>
            <div className="link-group">
              <h5>About Us</h5>
              <div className="link-list">
                <a href="http://">Our Company</a>
                <a href="http://">Our Brand</a>
                <a href="http://">Our MTP</a>
                <a href="http://">Our Corporate Value</a>
                <a href="http://">What do we stand for</a>
                <a href="http://">Our Key Deliverables</a>
                <a href="http://">Our Leadership Team</a>
                <a href="http://">Our Team</a>
                <a href="http://">Learn more</a>
              </div>
            </div>
            <div className="link-group">
              <h5>Our Services</h5>
              <div className="link-list">
                <a href="http://">Our Company</a>
                <a href="http://">Our Brand</a>
                <a href="http://">Our MTP</a>
                <a href="http://">Our Corporate Value</a>
                <a href="http://">What do we stand for</a>
                <a href="http://">Our Key Deliverables</a>
                <a href="http://">Our Leadership Team</a>
                <a href="http://">Our Team</a>
                <a href="http://">Learn more</a>
              </div>
            </div>
            <div className="link-group">
              <h5>Contact Us</h5>
              <div className="link-list">
                <a href="http://">Our Company</a>
                <a href="http://">Our Brand</a>
                <a href="http://">Our MTP</a>
                <a href="http://">Our Corporate Value</a>
                <a href="http://">What do we stand for</a>
                <a href="http://">Our Key Deliverables</a>
                <a href="http://">Our Leadership Team</a>
                <a href="http://">Our Team</a>
                <a href="http://">Learn more</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="end">
            <h6>Copyright © 2021 OrionStealler. All rights reserved.</h6>
            <div className="social-links">
              <a href="http://">
                <img src="/images/social/Twitter/Vector.svg" alt="Twitter" />
              </a>
              <a href="http://">
                <img
                  src="/images/social/Facebook/Negative.svg"
                  alt="Facebook"
                />
              </a>
              <a href="http://">
                <img
                  src="/images/social/Instagram/Negative.svg"
                  alt="Instagram"
                />
              </a>
              <a href="http://">
                <img
                  src="/images/social/LinkedIn/Negative.svg"
                  alt="LinkedIn"
                />
              </a>
              <a href="http://">
                <img src="/images/social/YouTube/Negative.svg" alt="YouTube" />
              </a>
            </div>
            <div className="tnc-links">
              <a href="">
                <h6>Terms & Conditions</h6>
              </a>
              <a href="">
                <h6>Privacy Policy</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
        }
        .cover {
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url("/images/cover.png");
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
        .middle-banner {
          position: absolute;
          width: 1050px;
          height: 160px;
          left: 306px;
          top: 973px;

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
          font-family: Segoe UI;
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
        .env-section {
          display: flex;
          align-items: center;
        }
        .env-section img {
          height: fit-content;
        }
        .env-section h1 {
          font-family: Segoe UI;
          font-style: normal;
          font-weight: bold;
          font-size: 130px;
          line-height: 173px;
          color: #00cb76;
        }
        .env-section h2 {
          font-family: Segoe UI;
          font-style: normal;
          font-weight: normal;
          font-size: 100px;
          line-height: 133px;
          color: #ffffff;
          margin: -40px 0 60px 0;
        }
        .env-section ul li {
          font-family: Segoe UI;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 32px;
          color: #ffffff;
          mix-blend-mode: normal;
        }
        .env-section .content img {
          position: absolute;
          left: 894px;
          margin-top: -60px;
        }
        .hiddenTitle {
          font-family: Segoe UI;
          font-style: normal;
          font-weight: bold;
          font-size: 336px;
          line-height: 483px;
          color: rgba(0, 0, 0, 0.3);
          margin-bottom: -99px;
          margin-top: -163px;
        }
        .card-section {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
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
        .footer {
          width: 100%;
          padding: 64px 64px 0 64px;
          margin: 72px 72px 0 72px;
        }
        .footer-wrap {
          width: -webkit-fill-available;
          height: 502px;
          padding: 64px;
          margin: 72px;
          position: absolute;
          top: 6081px;

          background: linear-gradient(
            176.64deg,
            #ffffff -71.48%,
            rgba(255, 255, 255, 0.1) 51.74%
          );
          mix-blend-mode: normal;
          opacity: 0.15;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 20px 20px 0 0;
        }
        .footer-contents {
          display: flex;
        }
        .footer .form {
          flex: 3;
        }
        .footer .form h2 {
          font-family: Roboto;
          font-style: normal;
          font-weight: 900;
          font-size: 50px;
          line-height: 59px;
          color: #ffffff;
        }
        .footer .form p {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 21px;
          color: #a7a9ac;
        }
        .footer .form span {
          font-family: Roboto;
          font-style: normal;
          font-weight: 900;
          font-size: 21px;
          line-height: 25px;

          color: #ffffff;
        }
        .footer .link-group {
          flex: 1;
        }
        .footer .link-group h5 {
          font-family: Roboto;
          font-style: normal;
          font-weight: 900;
          font-size: 22px;
          line-height: 26px;
          color: #ffffff;
        }
        .footer .link-group .link-list {
          display: flex;
          flex-direction: column;
        }
        .footer .link-group .link-list a {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 28px;
          color: #ffffff;
        }
        .footer hr {
          margin-top: 64px;
        }
        .footer .end {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .footer .end .social-links a {
          margin-left: 16px;
        }
        .footer .end h6 {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 21px;
          color: #a7a9ac;
        }
        .footer .end .tnc-links {
          display: flex;
        }
        .footer .end .tnc-links a:last-child {
          margin-left: 16px;
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
