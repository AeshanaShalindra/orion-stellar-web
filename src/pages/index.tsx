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
import ActiveLink from "../components/ActiveLink";
import Config from "./../lib/config";
import Soon from "./../pages/soon";

export default function Index() {
    const page = (
        <Layout>
            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />
            <div className="back-wall">
                <div className="container cover">
                    <NavBar />
                    <Parallax className="parallax-class" y={[-20, 20]}>
                        <div className="main-row first">
                            <div className="title-container">
                                <h1>Sri Lanka’s First</h1>
                                <h1>
                                    <strong>High Density & Carrier Neutral</strong>
                                    <br /> Data Center
                                </h1>
                                <h5>Nimble | Connected | Sustainable</h5>
                            </div>
                            <a className="tour-btn" href="/services">
                                <CircleButton
                                    title="More Services"
                                    dark={true}
                                />
                            </a>
                        </div>
                    </Parallax>
                </div>
                <a className="tour-btn-small" href="#tour">
                    <CircleButton
                        title="Virtual Tour"
                        dark={true}
                        size="104px"
                    />
                </a>

                {/* <Parallax className="middle-banner" y={[-20, 20]}>
                    <div className="middle-banner">
                        <img
                            id="cardLogo"
                            src="/images/logo-white.svg"
                            alt="orion sella logo"
                        />
                        <p>
                            OrionStellar—A joint venture between SAPD (St.
                            Anthony’s Property Developers) and Dialog Broadband
                            Pvt Ltd in the business of best-in-class digital
                            infrastructure solutions. OrionStellar brings Sri
                            Lankas first high density and carrier neutral data
                            center located at Orion city, Colombo 09, Sri Lanka.
                            This will be the only (TIA Rated 03 certified)
                            commercial data center. OrionStellar is poised to
                            offer an array of digital infrastructure solutions
                            and value-added managed services to the enterprises
                            in the region.
                        </p>
                    </div>
                </Parallax> */}

                {/* <div className="small-banner">
                    <img
                        id="cardLogo"
                        src="/images/logo-white.svg"
                        alt="orion sella logo"
                    />
                    <p>
                        A joint venture between SAPD (St. Anthony’s Property
                        Developers) and Dialog Broadband Pvt Ltd in the business
                        of best-in-class digital infrastructure solutions.
                        OrionStellar brings Sri Lankas first high density and
                        carrier neutral data center located at Orion city,
                        Colombo 09, Sri Lanka. This will be the only (TIA Rated
                        03 certified) commercial data center. OrionStellar is
                        poised to offer an array of digital infrastructure
                        solutions and value-added managed services to the
                        enterprises in the region.
                    </p>
                </div> */}

                <div className="container">
                    <div className="service">
                        <img src="/images/home/2.jpg" alt="services" />
                        <div className="content">
                            <img
                                className="mini-logo"
                                src="/images/logo-color.png"
                                alt="orion sella logo"
                            />
                            <h1>Services</h1>
                            <p>
                                In the era of 4th industrial revolution and
                                digital economy, the Digital infrastructure is
                                in the middle of business strategy and CIOs are
                                challenged continuously to scale up the IT
                                systems to meet the exponential demands in terms
                                of volume, computational power and information
                                security challenges. OrionStellar offers a range
                                of digital infrastructure services and managed
                                value-added services to unburden these
                                challenges such that businesses could focus on
                                their core business and innovation in their
                                forward march to become a digital enterprise.
                            </p>
                        </div>
                    </div>

                    <div className="service-card-section">
                        <a className="card" href="/services">
                            <CardButton
                                title="enterprise"
                                contents="Digital infra is a part of the core strategy to accelerate the digitalization. Let OrionStellar be the partner in the journey to accelerate your roadmaps."
                                image="/images/enterprise.png"
                            />
                            <p>
                                Digital infra is a part of the core strategy to
                                accelerate the digitalization. Let OrionStellar
                                be the partner in the journey to accelerate your
                                roadmaps.
                            </p>
                        </a>
                        <a className="card" href="/services#start-up">
                            <CardButton
                                title="start up"
                                contents="In their quest to be the next unicorn the time to market, startups focuses to be quick to market, be cost effective and be a lean and mean organization without large IT teams.
              OrionStellar solutions are tailormade for them with an array of value added services bundled together as a one stop shop."
                                image="/images/startup.png"
                            />
                            <p>
                                In their quest to be the next unicorn the time
                                to market, startups focuses to be quick to
                                market, be cost effective and be a lean and mean
                                organization without large IT teams.
                                OrionStellar solutions are tailormade for them
                                with an array of value added services bundled
                                together as a one stop shop.
                            </p>
                        </a>
                        <a className="btn" href="/services">
                            <CircleButton title="Services" />
                        </a>
                    </div>
                    <div className="env-section">
                        <div className="txt-content">
                            <h1>Environmentally</h1>
                            <h2>Sustainable</h2>
                            <ul>
                                <li>
                                    IT consumes 3% of the power off the grid
                                    globally and the power demand keep
                                    increasing hence the need for power
                                    efficient datacenters has become a necessity
                                    in terms of environmental protection.{" "}
                                </li>
                                <li>
                                    OrionStellar data center has the most
                                    optimum Power Usage Efficiency (PUE) in the
                                    country.
                                </li>
                                <li>
                                    Lighting control system that could give 50%
                                    of energy saving
                                </li>
                                <li>
                                    LEED silver certified green building housing
                                    the datacenter
                                </li>
                            </ul>
                            <img
                                className="badge"
                                src="/images/cert-leed.png"
                                alt="leed certification"
                            />
                        </div>
                        <div className="white-line"></div>
                        <div className="img-content">
                            <img
                                src="/images/environment.png"
                                alt="environment"
                            />
                        </div>
                    </div>

                    <BackTitle title="Uniqueness" size="28"/>
                    <div className="content-wrap">
                        <div className="card-section">
                            <InfoCard
                                image="/images/home/4.jpg"
                                titleEl={
                                    <span>
                                        Sri Lanka’s 1<sup>st</sup> High Density
                                        Data Center.
                                    </span>
                                }
                                description={
                                    <ul className="info-des">
                                        <li>15kW+ per Rack</li>
                                        <li>Design PUE at 1.4</li>
                                        <li>Best Power Efficiency</li>
                                    </ul>
                                }
                            />
                            <InfoCard
                                image="/images/home/5.jpg"
                                titleEl={
                                    <span>
                                        Sri Lanka’s 1<sup>st</sup> Carrier
                                        Neutral Data Center.
                                    </span>
                                }
                                description={
                                    <ul className="info-des">
                                        <li>2x Meet-me Rooms</li>
                                        <li>
                                            Both SLT, Dialog available with
                                            fiber rings
                                        </li>
                                        <li>SD-WAN Enabled</li>
                                    </ul>
                                }
                            />
                            <InfoCard
                                image="/images/home/6.jpg"
                                title="Superior Rack Space per Footprint"
                                description={
                                    <ul className="info-des">
                                        <li>
                                            50U Vs 42U in other data centers
                                        </li>
                                        <li>Space optimization</li>
                                    </ul>
                                }
                            />
                            <InfoCard
                                image="/images/home/7.jpg"
                                title="Energy Metering at Granular Levels"
                                description={
                                    <ul className="info-des">
                                        <li>
                                            Able to meter power usage at U Level
                                        </li>
                                        <li>
                                            <b>Pay as you go</b> model
                                        </li>
                                    </ul>
                                }
                            />
                            <InfoCard
                                image="/images/home/8.jpg"
                                title="Colombo city’s only TIA 3 Rated Data Center"
                                description={
                                    <>
                                        <p className="info-p">With access,</p>
                                        <ul className="info-des">
                                            <li>Business Hubs</li>
                                            <li>IT Parks</li>
                                        </ul>
                                    </>
                                }
                            />
                            <InfoCard
                                image="/images/home/9.jpg"
                                title="SME, Start Up Co-Location Bundle with an array of Value-Added services"
                                description={
                                    <ul>
                                        <li>
                                            With SDWAN capability to have high
                                            speed access
                                        </li>
                                    </ul>
                                }
                            />
                        </div>
                    </div>

                    <div id="tour" className="data-center-tour-section">
                        <BackTitle
                            title="Data Center Tour"
                            subtitle="our data center tour"
                        />
                        <div className="content-wrap">
                            <img
                                src="/images/datacenter.png"
                                alt="datacenter"
                            />
                        </div>
                        <div className="message">
                            <div className="iso-message">
                                We welcome you to experience our
                                State-of-the-Art data center located at Orion
                                city, the largest IT park in the county .
                                <br />
                                <br />
                                You will learn about the best-in-class
                                technologies used in the DC built and operation
                                and management using Schneider Eco structure
                                DCIM platform. We can demonstrate how
                                multilayered physical security systems are in
                                operation to ensure the physical security as per
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
                        />
                        <div className="calendar">
                            <BookingView />
                        </div>
                    </div>

                    {/* <div className="partner-section">
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
          </div>
          <div className="partner-section infrastructure">
            <div className="title">
              <h5>Our Infrastructure partners</h5>
            </div>
            <div className="logos">
              <img src="/images/logos/corning.png" alt="corning" />
            </div>
          </div> */}
                </div>
                <Footer />
            </div>
            <style jsx>{`
                .back-wall {
                    background: linear-gradient(
                        125.54deg,
                        #0f1d31 30.98%,
                        rgba(62, 9, 114, 0.86) 163.03%
                    );
                }
                .container {
                    width: 100%;
                }
                .cover {
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-image: url("/images/home/1.jpg");
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
                    margin-bottom: 400px;
                }
                .title-container h1 {
                    flex: 3;
                    font-family: "SegoeUI", sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 84px;
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
                    margin-left: 15vw;
                    margin-top: -133px;
                    margin-bottom: -133px;
                    width: 60vw;
                    height: 160px;

                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    padding: 48px 72px;

                    background: linear-gradient(
                        105.26deg,
                        rgba(192, 192, 192, 0.57) -4.86%,
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
                .middle-banner #cardLogo {
                    width: 30%;
                }
                .small-banner {
                    display: none;
                }
                .small-banner img {
                    width: 45vw;
                    margin-bottom: 32px;
                }
                .small-banner p {
                    font-weight: 350;
                    font-size: 16px;
                    line-height: 24px;
                }
                .service {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                    grid-gap: 12px;
                    justify-items: center;
                    align-items: center;
                    margin-top: 84px;
                    margin-bottom: 84px;
                }
                .service img {
                    grid-column: 1 / span 3;
                    width: 100%;
                }
                .service .content {
                    grid-column: 4 / span 2;
                    margin: 0 100px;
                }
                .service .content .mini-logo {
                    width: 224px;
                    margin-left: 300px;
                    margin-bottom: -41px;
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
                .service-card-section {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                    grid-gap: 48px;
                    justify-items: center;
                    -webkit-align-items: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    margin: 24px 84px;
                }
                .service-card-section .card {
                    grid-column: span 2;
                    width: 100%;
                }
                .service-card-section .card p {
                    display: none;
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: 350;
                    font-size: 16px;
                    line-height: 24px;
                    margin-top: 20px;
                    margin-bottom: 40px;
                }
                .info-p {
                    color: black;
                }
                .info-des li {
                    margin-bottom: 8px;
                }
                .env-section {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 74px 1fr 1fr;
                    grid-gap: 12px;
                    justify-items: center;
                    align-items: center;
                    margin-left: 104px;
                    margin-top: 104px;
                }
                .env-section .txt-content {
                    grid-column: 1 / span 3;
                }
                .env-section .white-line {
                    grid-column: 4 / span 1;
                    width: 608px;
                    height: 0px;
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    transform: rotate(90deg);
                }
                .env-section .img-content {
                    grid-column: 5 / span 2;
                    width: 100%;
                }
                .env-section .txt-content .logo {
                    margin-left: 291px;
                    margin-bottom: -46px;
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
                .env-section .txt-content .badge {
                    margin-top: -64px;
                    margin-left: 800px;
                }
                .env-section .img-content img {
                    width: 100%;
                }
                .content-wrap {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    flex-direction: row;
                }
                .content-wrap img {
                    width: 95%;
                }
                .card-section {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-gap: 84px;
                    justify-items: center;
                    align-items: start;
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
                    color: #ffffff;
                }
                .sub-btn .middle-btn {
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 24px;
                    padding: 10px 20px 10px 20px;
                    background: black;
                    color: #ffffff;
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
                    margin-top: 240px;
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
                .partner-section.infrastructure .title {
                    width: 724px;
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
                    justify-content: flex-start;
                    align-items: center;
                }
                .partner-section .logos img {
                    height: fit-content;
                }

                .tour-btn-small {
                    display: none;
                }

                @media screen and (max-width: 480px) {
                }
                @media screen and (max-width: 768px) {
                }
                @media screen and (max-width: 1024px) {
                    .middle-banner {
                        display: none;
                    }
                    .cover {
                        height: 90vh;
                        max-height: 800px;
                    }
                    .cover .main-row.first .tour-btn {
                        display: none;
                    }
                    .tour-btn-small {
                        display: block;
                        margin-left: 68vw;
                        margin-top: -55px;
                        margin-bottom: -38px;
                    }
                    .main-row.first {
                        padding: 0 10vw;
                        margin-bottom: 0;
                    }
                    .main-row.first .title-container h1 {
                        font-size: 10vw;
                    }
                    .main-row.first .title-container h5 {
                        font-size: 3vw;
                    }
                    .small-banner {
                        display: flex;
                        flex-direction: column;
                        padding: 10vw 10vw;
                    }
                    .service img {
                        grid-column: span 4 !important;
                        width: 100%;
                        max-width: unset;
                    }
                    .service .content {
                        grid-column: span 4 !important;
                        text-align: center;
                        margin: -98px 10vw 10vw !important;
                    }
                    .service-card-section {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-gap: 17px;
                        margin: 0 24px;
                    }

                    .service-card-section .btn {
                        margin-top: 36px;
                        grid-column: span 2 !important;
                    }
                    .service-card-section .card p {
                        display: block;
                    }
                    .card-section {
                        grid-template-columns: 1fr;
                        grid-gap: 64px;
                    }
                    .env-section {
                        display: none;
                    }
                    .book-tour-section {
                        display: none;
                    }
                    .partner-section {
                        display: none;
                    }
                    #tour {
                        display: none;
                    }
                }

                @media (max-width: 1500px) {
                    #tour {
                        display: none;
                    }
                }

                @media screen and (max-width: 1500px) {
                    .service {
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                        grid-gap: 12px;
                        justify-items: center;
                        align-items: center;
                    }
                    .service img {
                        grid-column: span 2;
                    }
                    .service .content {
                        grid-column: span 2;
                        margin: 148px 100px 84px;
                        text-align: center;
                    }
                    .service h1 {
                        font-size: 100px;
                        line-height: 124px;
                    }
                    .service p {
                        font-size: 16px;
                        line-height: 24px;
                        margin-top: 16px;
                    }
                }
            `}</style>
        </Layout>
    );

    return (
        <>
            {Config.published && page}
            {!Config.published && <Soon />}
        </>
    );
}
