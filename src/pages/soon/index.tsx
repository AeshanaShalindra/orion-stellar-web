import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import React from "react";

export default function Index() {
    return (
        <>
            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />
            <div className="back-wall">
                <div className="container cover">
                    <img src="/images/logo.svg" alt="orion sella logo" />
                    <h1 className="heading">Coming Soon...</h1>
                </div>
            </div>
            <style jsx>{`
                .back-wall {
                    height: 100vh;
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
                .container img {
                    width: 24vw;
                }
                .cover {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    align-content: center;
                    height: 100%;
                }
                .main-title {
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 100px;
                    color: #ffffff;
                }
                .heading {
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 36px;
                    color: #ffffff;
                    text-align: center;
                    margin-bottom: 24px;
                    margin-top: 100px;
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
        </>
    );
}
