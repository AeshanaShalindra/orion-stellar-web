import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import CircleButton from "../components/CircleButton";
import StarIcon from "../assets/star-alt.svg";
import LocationIcon from "../assets/pin-alt.svg";
import PaidIcon from "../assets/paid-alt.svg";
import Image from 'next/image';

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={ "/" } />
      <OpenGraphMeta url={ "/" } />
      <TwitterCardMeta url={ "/" } />
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
            <h1><strong>High Density</strong> Data Center</h1>
            <h5>Nimble | Connected | Sustainable</h5>
          </div>
          <CircleButton title="Virtual Tour" />
        </div>
        <div className="main-row last">
          <div style={ { display: "flex" } }>
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
            <img className="cer-image" src="/images/cert-ansi.png" alt="ansi certification" />
            <img className="cer-image" src="/images/cert-iso.png" alt="iso certification" />
          </div>
        </div>
      </div>

      <div className="middle-banner">
        <img src="/images/logo-white.svg" alt="orion sella logo" />
        <p>A joint venture between SAPD ( St. Anthony’s property developers) and Dialog
          Broad band Pvt Ltd in the business of best in class digital infrastructure solutions . Orionstellar
          brings Sri Lanka’s first high density and carrier neutral data center located at Orion city, the Sri
          Lanka’s largest IT park located at Colombo 09 . This is the only Tier 3 certified DC in the
          Colombo city and is poised to offer an array of digital infrastructure solutions and value-added
          managed services to the enterprises in the region.</p>
      </div>

      <div className="container service">
        <div style={ { display: "flex" } }>
          <img src="/images/services.png" alt="services" />
          <div className="content">
            <h1>Services</h1>
            <p>In the era of 4 th industrial revolution and Gig economy the Digital infrastructure is in the middle
              of business strategy and CIOs are challenged continuously to scale up the IT systems to meet
              the exponential demands in terms of volume , computational power and information security
              challenges. Orion stellar offers a range of digital infrastructure services and managed value
              added services to unburden these challenges such that businesses could focus on their core
              business and innovation in their forward march to become a digital enterprise.</p>
          </div>
        </div>
      </div>
      <style jsx>{ `
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
        .nav-row{
          display: flex;
          justify-content: space-between;
          flex: 1 1 auto;
          padding: 0 40px;
          font-family: 'Segoe UI', sans-serif;
          font-style: normal;
          color: #ffffff;
          margin-top: 48px;
          height: 0;
        }
        .nav-row .logo h6{
          font-family: Segoe UI;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          letter-spacing: 0.14em;
          margin-top: 12px;
        }
        .nav-row .logo{
          flex: 2;
        }
        .nav-row .button-list{
          display: flex;
          align-items: flex-start;
          justify-content: space-around;
          flex: 1;
          padding: 0 130px;
        }
        .main-row{
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1 1 auto;
          padding: 0 130px;
        }
        .main-row:last-child{
          margin-bottom: 100px;
        }
        .title-container h1{
          font-family: 'Segoe UI', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 95px;
        }
        .row-tag{
          margin-right: 58px;
          color: #FFFFFF;
        }
        .row-tag-icon{
          display: flex;
          justify-content: space-around;
        }
        .row-tag h6{
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 13px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        p {
          margin: 0;
          color: #FFFFFF;
        }
        h1 {
          margin: 0;
          color: #FFFFFF;
        }
        h5 {
          font-size: 24px;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: 0.215em;
          text-transform: uppercase;
          color: #FFFFFF;
        }
        .cer-image{
          height: 102.62px;
          width: auto;
          margin-left: 40px;
        }
        .middle-banner{
          position: absolute;
          width: 1050px;
          height: 160px;
          left: 306px;
          top: 973px;

          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 48px 72px;

          background: linear-gradient(105.26deg, rgba(146, 137, 200, 0.57) -4.86%, rgba(255, 255, 255, 0) 108.25%, rgba(255, 255, 255, 0.28) 108.25%);
          backdrop-filter: blur(40px);
        }
        .middle-banner p{
          margin-left: 48px;
          font-family: Segoe UI;
          font-style: normal;
          font-weight: 350;
          font-size: 18px;
          line-height: 24px;
        }
        .service {
          display: flex;
          background: linear-gradient(125.54deg, #0F1D31 30.98%, rgba(62, 9, 114, 0.86) 163.03%);
        }
        .service h1{
          font-family: Segoe UI;
          font-style: normal;
          font-weight: bold;
          font-size: 130px;
          line-height: 173px;
        }
        .service p{
          font-family: Segoe UI;
          font-style: normal;
          font-weight: 350;
          font-size: 24px;
          line-height: 32px;
          margin-top: 40px;
        }
        .service .content{
          padding: 200px 120px
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
