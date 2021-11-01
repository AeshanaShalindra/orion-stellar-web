import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import React from "react";
import InfoCard from "../../components/InfoCard";
import Footer from "../../components/Footer";
import BackTitle from "../../components/BackTitle";
import ProfileCard from "../../components/ProfileCard";
import NavBar from "../../components/NavBar";
import CircleButton from "../../components/CircleButton";
import ActiveLink from "../../components/ActiveLink";

export default function Index() {
    return (
        <Layout>
            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />
            <div className="back-wall">
                <div className="container cover">
                    <NavBar />
                </div>
                <div className="header">
                    <h1>Service Delivery</h1>
                    <h2>Assurance</h2>
                </div>
                <div className="osdc-wall"></div>
                <div className="noc">
                    OSDC Network Operating Center (NOC) 24*7*365
                </div>
                <div className="quote">
                    Our DCIM Provides ONE view of the entire Data center from IT
                    loads to supporting physical Infrastructure.
                </div>
                <div className="grid-5">
                    <div className="grid-item-2">
                        <img src="/images/sda/3.png" alt="" />
                    </div>
                    <div className="grid-item-1 text">
                        Power, Cooling & Facility Infrastructure Monitoring &
                        Management
                    </div>
                    <div className="grid-item-1">
                        <img src="/images/sda/2.png" alt="" />
                    </div>
                    <div className="grid-item-1 text">
                        Environmental Monitoring (Temperature & Humidity) and
                    </div>

                    <div className="grid-item-1 span-2 text">
                        Fire Detection & Fire Suppression
                    </div>
                    <div className="grid-item-2 span-3">
                        <img src="/images/sda/1.png" alt="" />
                    </div>
                </div>
                <div className="quote">
                    To ensure an effective monitoring and control at OSDC NOC
                    Further, DCIM is a strategic enablement to ensure Tier3
                    Standards, superior customer service, & Environmental
                    sustainability
                </div>

                <Footer />
            </div>
            <style jsx>{`
                .back-wall {
                    background: linear-gradient(
                        100deg,
                        #0f1d31 30.98%,
                        rgba(3, 96, 102, 0.81) 163.03%
                    );
                }
                .container {
                    width: 100%;
                    font-family: "SegoeUI";
                    font-style: normal;
                    color: #ffffff;
                }
                .cover {
                    background-repeat: no-repeat;
                    background-image: url("/images/sd-cover.png");
                    height: 80vh;
                    display: flex;
                    flex-direction: column;
                }
                .header {
                    margin-top: -200px;
                }
                .header h1 {
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 180px;
                    color: #ffffff;
                    text-align: center;
                    margin: 0;
                }
                .header h2 {
                    margin: 0;
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 110px;
                    color: #ffffff;
                    text-align: right;
                    margin-bottom: 124px;
                    margin-right: 253px;
                }
                .osdc-wall {
                    background-repeat: no-repeat;
                    background-image: url("/images/osdc.png");
                    height: 80vh;
                    display: flex;
                    flex-direction: column;
                }
                .noc {
                    font-weight: bold;
                    font-size: 60px;
                    line-height: 70px;
                    text-align: center;
                    color: #ffffff;
                    padding: 36px;
                    background-color: black;
                }
                .quote {
                    font-style: normal;
                    font-size: 36px;
                    line-height: 48px;
                    color: #ffffff;
                    padding: 48px 10vw;
                }
                .service {
                    display: flex;
                    flex-wrap: wrap;
                }

                .grid-5 {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                    grid-gap: 24px;
                }
                .grid-item-1 {
                    grid-column: span 1;
                    display: flex;
                    align-items: stretch;
                }
                .grid-item-2 {
                    grid-column: span 2;
                    display: flex;
                    width: 100%;
                }
                .grid-item-1.span-2 {
                    grid-column: 3 / span 1;
                    display: flex;
                    align-items: center;
                }
                .grid-item-2.span-3 {
                    grid-column: 4 / span 2;
                    display: flex;
                }
                .grid-item-2.span-3 img {
                    width: 100%;
                }
                .text {
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 32px;
                    -webkit-letter-spacing: 0.29em;
                    -moz-letter-spacing: 0.29em;
                    -ms-letter-spacing: 0.29em;
                    letter-spacing: 0.29em;
                    text-transform: uppercase;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    background-color: black;
                    padding: 36px;
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
