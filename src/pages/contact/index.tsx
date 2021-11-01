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
    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    };

    const supportRequest = async (event) => {
        event.preventDefault(); // don't redirect the page

        let myForm = document.getElementById("supportForm") as HTMLFormElement;
        let request = {
            "form-name": "Support Request",
            name: event.target.name.value,
            company: event.target.company.value,
            customerId: event.target.nic.value,
            email: event.target.email.value,
            subject: event.target.subject.value,
            message: event.target.message.value,
        };

        fetch("/?" + encode(request), {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode(request),
        })
            .then(() => console.log("Form successfully submitted"))
            .catch((error) => alert(error))
            .finally(() => {
                myForm.reset();
            });
    };

    const writeToUs = async (event) => {
        event.preventDefault(); // don't redirect the page

        let myForm = document.getElementById(
            "writeToUsForm"
        ) as HTMLFormElement;
        let request = {
            "form-name": "Write To Us",
            name: event.target.name.value,
            company: event.target.company.value,
            email: event.target.email.value,
            subject: event.target.subject.value,
            message: event.target.message.value,
        };

        fetch("/?" + encode(request), {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode(request),
        })
            .then(() => console.log("Form successfully submitted"))
            .catch((error) => alert(error))
            .finally(() => {
                myForm.reset();
            });
    };

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

                            <form
                                id="supportForm"
                                name="Support Request"
                                method="POST"
                                data-netlify="true"
                                onSubmit={supportRequest}
                            >
                                <div className="center-all form-fields">
                                    <h6>Lodge a support request / ticket</h6>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                    />
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
                                        name="subject"
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

                                    <button
                                        type="submit"
                                        className="submit-btn grow"
                                    >
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div id="sales" className="center-all info-form">
                        <h4 className="form-title">
                            Sales & business inquiries
                        </h4>
                        <div className="center-all form-wrap">
                            <h2>+94 112 645 386</h2>
                            <h5>Network Operating Center</h5>

                            <form
                                id="writeToUsForm"
                                name="Write To Us"
                                method="POST"
                                data-netlify="true"
                                onSubmit={supportRequest}
                            >
                                <div className="center-all form-fields">
                                    <h6>Write to us</h6>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                    />
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
                                        name="subject"
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

                                    <button
                                        type="submit"
                                        className="submit-btn grow"
                                    >
                                        SEND
                                    </button>
                                </div>
                            </form>

                            <div className="mail-info">
                                <h6>Drop us a mail</h6>
                                <h5>sales@orionstellar.com</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="findus" className="container location">
                    <BackTitle title="Location" color="#242424" />
                    {/* <img className="map" src="/images/map.png" alt="map" /> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15842.292290325746!2d79.8794512!3d6.9415165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb72be2890f0c7e0f!2sOrionStellar%20%7C%20Digital%20Realty%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1635330542736!5m2!1sen!2slk"
                        width="100%"
                        height="649"
                        className="g-map"
                        loading="lazy"
                    ></iframe>
                    {/* <div className="find-btn">
            <CircleButton title="Find Us" />
          </div> */}
                </div>
                <Footer />
            </div>
            <style jsx>{`
                .grow {
                    transition: all 0.2s ease-in-out;
                }
                .grow:hover {
                    transform: scale(1.05);
                }
                .container {
                    /* width: 100%; */
                }
                .cover {
                    background-repeat: no-repeat;
                    background-image: url("/images/cover4.jpg");
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
                        115deg,
                        #000000 32.35%,
                        #c1c1c1 248.34%
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
                    height: 1924px;
                    background: linear-gradient(
                        131.77deg,
                        rgba(255, 255, 255, 0.4234) 10.66%,
                        rgba(255, 255, 255, 0.1508) 95.86%
                    );
                    backdrop-filter: blur(5px);
                    z-index: 10;
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
                .submit-btn {
                  background-color: unset;
                    border-color: unset;
                    border: black;
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
                .mail-info {
                    margin-top: 319px;
                }
                .mail-info h5 {
                    margin-top: 0;
                    font-weight: normal;
                    font-size: 35px;
                }
                .container.location {
                    margin-top: -500px;
                }
                .location .map {
                    width: 100%;
                    margin-top: -176px;
                }
                .location .g-map {
                    width: 100%;
                    height: 649px;
                    border: none;
                }
                .location .action-btn {
                    margin-left: 160px;
                    margin-top: -376px;
                    z-index: 20;
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
