import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Config from "../../lib/config";
import Soon from "../soon";

export default function Index() {
    const page = (
        <Layout>
            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />
            <div className="back-wall">
                <div className="container cover">
                    <NavBar />
                </div>
                <div className="header">
                    <img
                        id="cardLogo"
                        src="/images/logo-white.svg"
                        alt="orion sella logo"
                    />
                    <h1>Managed Services</h1>
                </div>
                <div className="full-grid">
                    <img src="/images/ms/1.png" alt="" />
                </div>
                <div className="full-grid">
                    <img src="/images/ms/2.png" alt="" />
                </div>
                <div className="full-grid">
                    <img src="/images/ms/31.png" alt="" />
                </div>
                <div className="full-grid">
                    <img src="/images/ms/4.png" alt="" />
                </div>
                <div className="full-grid">
                    <img src="/images/ms/5.png" alt="" />
                </div>
                <div className="full-grid">
                    <img src="/images/ms/6.png" alt="" />
                </div>
                <div className="full-grid">
                    <img src="/images/ms/7.png" alt="" />
                </div>
                <div className="full-grid">
                    <img src="/images/ms/8.png" alt="" />
                </div>
                <div className="full-grid">
                    <img src="/images/ms/9.png" alt="" />
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
                    background-repeat: round;
                    background-image: url("/images/ms/cover.png");
                    height: 80vh;
                    display: flex;
                    flex-direction: column;
                }
                .header {
                    margin-top: -156px;
                }
                .header img {
                    margin-left: 311px;
                    margin-bottom: -41px;
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
                .full-grid img {
                    width: 100%;
                }
                .full-grid {
                    margin-bottom: 100px;
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

    return (
        <>
            {Config.published && page}
            {!Config.published && <Soon />}
        </>
    );
}
