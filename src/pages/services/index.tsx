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

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container cover">
        <NavBar />
        <div className="boxes">
          <div className="glass-box first">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac elit ac morbi amet, nullam ultrices.
            </p>
          </div>
          <div className="glass-box second">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac elit ac morbi amet, nullam ultrices.
            </p>
          </div>
          <div className="glass-box third">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac elit ac morbi amet, nullam ultrices.
            </p>
          </div>
          <div className="glass-box fourth">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac elit ac morbi amet, nullam ultrices.
            </p>
          </div>
          <h4 className="title">Features</h4>
          <div className="black-circle"></div>
        </div>
        <p className="heading-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac
          elit ac morbi amet, nullam ultrices. Nulla at viverra gravida tellus,
          in in aliquam aliquam. Enim eget ornare amet at luctus vel tortor
          velit sem. Sit orci eget elit porta non posuere id elementum integer.
          Neque ornare eu et blandit.
        </p>
        <h1 className="heading">Enterprise</h1>
      </div>
      <div className="container service">
        <Footer />
      </div>
      <style jsx>{`
        .container {
          width: 100%;
        }
        .cover {
          background-repeat: no-repeat;
          background-image: url("/images/cover3.png");
          height: 936px;
          display: flex;
          flex-direction: column;
        }
        .main-title {
          font-family: Segoe UI;
          font-style: normal;
          font-weight: bold;
          font-size: 100px;
          color: #ffffff;
        }
        .heading {
          position: absolute;
          width: 1616px;
          height: 345px;
          left: 110px;
          top: 388px;

          font-family: Segoe UI;
          font-style: normal;
          font-weight: bold;
          font-size: 340px;
          line-height: 452px;

          color: #ffffff;
        }
        .heading-subtitle {
          position: absolute;
          width: 508px;
          height: 157px;
          left: 137px;
          top: 580px;

          font-family: Segoe UI;
          font-style: normal;
          font-weight: 350;
          font-size: 18px;
          line-height: 24px;

          color: #ffffff;
        }
        .glass-box {
          position: absolute;
          width: 186px;
          height: 186px;
          padding: 32px;
          background: rgba(83, 83, 83, 0.15);
          -webkit-backdrop-filter: blur(30px);
          backdrop-filter: blur(30px);
        }
        .glass-box p {
          font-family: Segoe UI;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 24px;

          color: #ffffff;
        }
        .glass-box.first {
          left: 1221px;
          top: 180px;
        }
        .glass-box.second {
          left: 1495px;
          top: 180px;
        }
        .glass-box.third {
          left: 1221px;
          top: 456px;
        }
        .glass-box.fourth {
          left: 1495px;
          top: 456px;
        }
        .boxes .title {
          position: absolute;
          width: 499px;
          height: 106px;
          left: 1305px;
          top: 224px;
          z-index:2;

          font-family: Segoe UI;
          font-style: normal;
          font-weight: bold;
          font-size: 100px;
          line-height: 133px;

          color: #ffffff;
        }
        .boxes .black-circle {
          position: absolute;
          width: 123px;
          height: 122px;
          left: 1537px;
          top: 387px;
          z-index: 1;

          background: #000000;
          border-radius: 100px;
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
