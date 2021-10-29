import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import CircleButton from "../components/CircleButton";
import React from "react";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="back-wall">
        <div className="container cover">
        <a className="center" href="#tour">
          <CircleButton title="Launch Website" dark={true}/>
        </a>
        </div>
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
          background-image: url("/images/cover1.png");
          height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .center{    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 90vh;}
      `}</style>
    </Layout>
  );
}
