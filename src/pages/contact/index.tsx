import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import React from "react";
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
      <div className="contents">
        <div className="container cover">
          <NavBar />
          <h2 className="main-title">Contact Us</h2>
          <img
            className="main-title-logo"
            src="/images/contactLogo.png"
            alt="contact"
          />
        </div>
        <div className="container forms">
          <div className="center-all support-form">
            <h4 className="form-title">
              Service support for <br />
              Existing customers
            </h4>
            <div className="center-all form-wrap">
              <h2>+94 112 645 386</h2>
              <h5>Network Operating Center</h5>
              <h5>24x7</h5>

              <div className="center-all form-fields">
                <h6>Lodge a support request / ticket</h6>
                <input type="text" name="name" id="name" placeholder="Name" />
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Business name"
                />
                <input
                  type="text"
                  name="nic"
                  id="nic"
                  placeholder="Customer Id"
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <input
                  type="subject"
                  name="email"
                  id="subject"
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Issue/Message"
                  cols={30}
                  rows={5}
                ></textarea>

                <div className="submit-btn">SEND</div>
              </div>              
            </div>
          </div>

          <div className="center-all info-form">
            <h4 className="form-title">Sales & business inquiries</h4>
            <div className="center-all form-wrap">
              <h2>+94 112 645 386</h2>
              <h5>Network Operating Center</h5>

              <div className="center-all form-fields">
                <h6>Write to us</h6>
                <input type="text" name="name" id="name" placeholder="Name" />
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Business name"
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <input
                  type="subject"
                  name="email"
                  id="subject"
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  cols={30}
                  rows={5}
                ></textarea>

                <div className="submit-btn">SEND</div>
              </div>

              <div className="mail-info">
              <h6>Drop us a mail</h6>
              <h5>sales@orionstellar.com</h5>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <style jsx>{`
        .container {
          /* width: 100%; */
        }
        .cover {
          background-repeat: no-repeat;
          background-image: url("/images/cover4.png");
          height: 1108px;
          display: flex;
          flex-direction: column;
        }
        .main-title {
          position: absolute;
          width: 762px;
          height: 200px;
          left: 203px;
          top: 348px;
          font-style: normal;
          font-weight: bold;
          font-size: 150px;
          line-height: 200px;
          color: #ffffff;
          margin: 0;
          z-index: 10;
        }
        .main-title-logo {
          position: absolute;
          width: 193px;
          height: 193px;
          left: 930px;
          top: 267px;
        }
        .contents {
          background: linear-gradient(
            156.5deg,
            #000000 32.35%,
            #ffffff 248.34%
          );
        }
        .center-all {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container.forms {
          padding: 0 160px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: -408px;
        }
        .form-title {
          font-style: normal;
          font-weight: 600;
          font-size: 36px;
          line-height: 134.19%;
          text-align: center;
          letter-spacing: 0.125em;
          text-transform: uppercase;
          color: #ffffff;
        }
        .support-form {
          margin-top: 82px;
        }
        .support-form .form-wrap {
          width: 738px;
          height: 1200px;
          background: rgba(60, 60, 60, 0.44);
        }
        .info-form .form-wrap {
          width: 728px;
          height: 2272px;
          background: linear-gradient(
            131.77deg,
            rgba(255, 255, 255, 0.4234) 10.66%,
            rgba(255, 255, 255, 0.1508) 95.86%
          );
          backdrop-filter: blur(30px);
        }
        .form-wrap h2 {
          font-style: normal;
          font-weight: bold;
          font-size: 64px;
          line-height: 85px;
          color: #ffffff;
          margin-bottom: 0;
        }
        .form-wrap h5 {
          font-style: normal;
          font-weight: bold;
          font-size: 35px;
          line-height: 115.51%;
          text-align: center;
          color: #ffffff;
          margin-top: 24px;
          margin-bottom: 0;
        }
        .form-wrap h6 {
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 101.69%;
          text-align: center;
          letter-spacing: 0.125em;
          text-transform: uppercase;
          color: #ffffff;
          margin-top: 24px;
          margin-bottom: 24px;
        }
        .form-fields {
          margin-top: 100px;
        }
        .form-fields input {
          width: 470px;
          height: 50px;
          margin: 10px 0;
          padding: 0 10px;
        }
        .form-fields textarea {
          width: 470px;
          height: 171px;
          margin: 10px 0;
          padding: 10px;
        }
        .info-form .submit-btn {
          margin-top: 64px;
          font-style: normal;
          font-weight: bold;
          font-size: 64px;
          line-height: 85px;
          color: #aeaeae;
          cursor: pointer;
        }
        .support-form .submit-btn {
          margin-top: 64px;
          font-style: normal;
          font-weight: bold;
          font-size: 64px;
          line-height: 85px;
          background: -webkit-linear-gradient(#055476, #72c4de);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          cursor: pointer;
        }
        .mail-info{
          margin-top:319px;
        }
        .mail-info h5{
          margin-top:0;
          font-weight: normal;
font-size: 35px;
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
