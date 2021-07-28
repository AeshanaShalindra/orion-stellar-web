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
        <div className="subtitle-circle"></div>
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
        <div className="challenges">
          <p className="title">
            Therefore, enterprises are confronted with new business challenges
            such as
          </p>
          <div className="box-row">
            <div className="box box-first">
              <p className="msg">
                Enabling the digital transformation and fostering innovation
              </p>
            </div>
            <div className="box box-center">
              <p className="msg">
                Finding and retaining IT staff with modern skills
              </p>
            </div>
            <div className="box box-center">
              <p className="msg">Securing IT assets and Data protection</p>
            </div>
            <div className="box box-center">
              <p className="msg">
                Modernization of IT assets and connecting old and new
              </p>
            </div>
            <div className="box box-last">
              <p className="msg">
                Scaling up the IT infrastructure with rapid demand coming from
                new breed of technologies Big data
              </p>
            </div>
          </div>
        </div>

        <div className="solutions">
          <div className="box">
            <p>
              Finding feasible solutions to above challenges within their circle
              and with the limited resources and knowledge is not what today’s
              business leaders are supposed to spend their invaluable management
              time. The new business norms are such that it is mandatory for
              every business and enterprises to be equipped with the modern IT
              infrastructure facilities since business decisions are made based
              on data driven knowledge.
            </p>
            <p>
              Not having the proper IT infrastructure platform even questions
              the very existence of the business and the sustainability as never
              before in the history.
            </p>
            <p>
              We, OrionStellar have realized the new challenges the enterprises
              are facing every day and we have designed an array of services
              specially designed for the Enterprises.
            </p>
            <p>
              Our technical expertise and the service professionalism will
              ensure that we are keeping our promise to Accelerate Enterprise
              Digitalization as our tagline denotes.
            </p>
          </div>
          <div className="mid-btn">
            <CircleButton title="" dark={false} />
          </div>
          <div className="no-box">
            <p className="title">OrionStellar for Enterprises</p>
            <p>
              Digital infra is a part of the core strategy to accelerate the
              digitalization hence enterprise looking to take the lead in the
              new era of industrial 4.0 need a reliable industry leading partner
              to host their IT infrastructure. Colocation will be the preferred
              choice for most of the large enterprises to keep the control of
              their applications and data archives to meet regulatory and
              performance requirements.
            </p>
            <p>
              OrionStellar offers an array of colocation services compliment by
              managed value-added services to simplify the digital
              infrastructure challenges of the enterprises.
            </p>
          </div>
        </div>

        <div className="grid">
          <div className="row">
            <h2 className="title">Colocation</h2>
            <p className="sub-title">
              Services designed to meet different business segments with varying
              requirements.
            </p>
            <p className="row-1 description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ac elit ac morbi amet, nullam ultrices. Nulla at viverra gravida
              tellus, in in aliquam aliquam. Enim eget ornare amet at luctus vel
              tortor velit sem. Sit orci eget elit porta non posuere id
              elementum integer. Neque ornare eu et blandit.
            </p>
          </div>
          <div className="row">
            <img src="images/colo1.png" alt="" className="image1" />
            <img src="images/colo2.png" alt="" className="image2" />
            <h5 className="row-2 description">
              DedicateD cages with multi-factor access Control
            </h5>
          </div>
          <div className="row">
            <h5 className="row-3 description">
              U Level Rack Level or Cage-level hosting
            </h5>
            <img src="images/colo3.png" alt="" className="image3" />
            <img src="images/colo4.png" alt="" className="image4" />
          </div>
        </div>

        <div className="message">
          <p>
            We complement our infrastructure offering with an array of managed
            value-added services including{" "}
            <strong>“Remote Pair of Hands”</strong>
          </p>
        </div>

        {/* <div className="grid-2">
          <div className="row">
            <h2 className="title">Managed Value-Added Services</h2>
          </div>
          <div className="row">
            <img src="images/colo2.png" alt="" className="image5" />
            <img src="images/colo3.png" alt="" className="image6" />
          </div>
        </div> */}

        <Footer />
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          font-family: "SegoeUI";
          font-style: normal;
          color: #ffffff;
        }
        .cover {
          background-repeat: no-repeat;
          background-image: url("/images/cover3.png");
          height: 936px;
          display: flex;
          flex-direction: column;
        }
        .main-title {
          font-family: "SegoeUI";
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
          top: 333px;

          font-family: "SegoeUI";
          font-style: normal;
          font-weight: bold;
          font-size: 340px;
          line-height: 452px;

          color: #ffffff;
        }
        .heading-subtitle {
          position: absolute;
          width: 768px;
          height: 157px;
          left: 182px;
          top: 530px;

          font-family: "SegoeUI";
          font-style: normal;
          font-weight: 350;
          font-size: 18px;
          line-height: 24px;

          color: #ffffff;
        }
        .subtitle-circle {
          position: absolute;
          width: 123px;
          height: 122px;
          left: 130px;
          top: 495px;

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
        .challenges .title {
          width: 818px;
          margin-top: 179px;
          margin-left: 298px;

          font-family: Segoe UI;
          font-style: normal;
          font-weight: 350;
          font-size: 24px;
          line-height: 32px;

          color: #ffffff;
        }
        .challenges .box-row {
          margin-top: 30px;
          display: flex;
        }
        .challenges .box-row .box {
          height: 199px;
          background: #000000;
          backdrop-filter: blur(30px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 26px;
        }
        .challenges .box-row .box-first {
          flex: 2;
          margin-right: 11px;
          justify-content: flex-end;
        }
        .challenges .box-row .box-center {
          flex: 1;
          margin-left: 11px;
          margin-right: 11px;
        }
        .challenges .box-row .box-last {
          flex: 2;
          margin-left: 11px;
          justify-content: flex-start;
        }
        .challenges .box .msg {
          font-weight: bold;
          font-size: 18px;
          line-height: 24px;
          text-align: center;
          color: #ffffff;
        }
        .challenges .box-first .msg {
          font-weight: bold;
          font-size: 18px;
          line-height: 24px;
          text-align: right !important;
          width: 196px;
          color: #ffffff;
        }
        .challenges .box-last .msg {
          font-weight: bold;
          font-size: 18px;
          line-height: 24px;
          text-align: left !important;
          width: 196px;
          color: #ffffff;
        }
        .solutions {
          margin-top: 140px;
          display: flex;
        }
        .solutions .mid-btn {
          position: absolute;
          width: 193px;
          height: 193px;
          left: 825px;
          top: 1917px;
        }
        .solutions .box {
          flex: 1;
          background: #000000;
          padding: 100px;
          padding-right: 150px;
          padding-left: 140px;
        }
        .solutions .box p {
          font-weight: 350;
          font-size: 24px;
          line-height: 32px;
        }
        .solutions .no-box {
          flex: 1;
          padding: 100px;
          padding-right: 140px;
          padding-left: 150px;
        }
        .solutions .no-box .title {
          font-weight: bold;
          font-size: 60px;
          line-height: 99.01%;
          color: #ffffff;
        }
        .solutions .no-box p {
          font-weight: 350;
          font-size: 24px;
          line-height: 32px;
        }
        .grid {
          margin-top: 114px;
          height: 1200px;
        }
        .grid .row .title {
          position: absolute;
          width: 839px;
          height: 222px;
          left: 203px;
          top: 2554px;

          font-weight: bold;
          font-size: 160px;
          line-height: 213px;

          color: #7c8c9b;
          margin: 0;
        }
        .grid .row .sub-title {
          position: absolute;
          width: 702px;
          height: 44px;
          left: 298px;
          top: 2747px;

          font-weight: 350;
          font-size: 18px;
          line-height: 24px;

          color: #ffffff;
        }
        .grid .row .image1 {
          position: absolute;
          width: 759.79px;
          height: 359.56px;
          left: 166.96px;
          top: 2820px;
        }
        .grid .row .image2 {
          position: absolute;
          width: 358.49px;
          height: 359.56px;
          left: 964.21px;
          top: 2824.28px;
        }
        .grid .row .image3 {
          position: absolute;
          width: 358.49px;
          height: 359.56px;
          left: 568.26px;
          top: 3214.88px;
        }
        .grid .row .image4 {
          position: absolute;
          width: 759.79px;
          height: 359.56px;
          left: 964.21px;
          top: 3214.88px;
        }
        .grid .row-1.description {
          position: absolute;
          width: 525px;
          height: 291px;
          left: 1148px;
          top: 2624px;

          font-weight: 600;
          font-size: 18px;
          line-height: 24px;
        }
        .grid .row-2.description {
          position: absolute;
          width: 345px;
          height: 255px;
          left: 1355px;
          top: 3044.46px;
          margin: 0;

          font-weight: 600;
          font-size: 24px;
          line-height: 127.69%;

          letter-spacing: 0.29em;
          text-transform: uppercase;
        }
        .grid .row-3.description {
          position: absolute;
          width: 394px;
          height: 254px;
          left: 137px;
          top: 3430.46px;

          font-weight: 600;
          font-size: 24px;
          line-height: 127.69%;
          text-align: right;

          letter-spacing: 0.29em;
          text-transform: uppercase;
        }
        .message {
          width: 1057px;
          height: 156px;
          margin-top: 1280px;
          margin-left: 392px;
          background: #000000;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .message p {
          width: 940px;
          font-weight: normal;
          font-size: 24px;
          line-height: 32px;
          text-align: center;
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
