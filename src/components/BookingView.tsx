import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import CircleButton from "./CircleButton";

export default function BookingView() {
    const [value, onChange] = useState(new Date());

    useEffect(() => {
        console.log(`>>>`, value);
    }, [value]);

    const bookingRequest = async (event) => {
        event.preventDefault(); // don't redirect the page

        let myForm = document.getElementById("bookingForm") as HTMLFormElement;
        let formData = new FormData(myForm) as URLSearchParams;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => console.log("Form successfully submitted"))
            .catch((error) => alert(error))
            .finally(() => {
                myForm.reset();
            });
    };

    return (
        <>
            <form
                id="bookingForm"
                name="Booking Request"
                method="POST"
                data-netlify="true"
                onSubmit={bookingRequest}
            >
                <div className="content">
                    {/* <Calendar styles={true} onChange={onChange} minDate={new Date()} /> */}
                    <div className="request-form">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            name="company"
                            id="company"
                            placeholder="Company"
                        />
                        <input
                            type="text"
                            name="nic"
                            id="nic"
                            placeholder="NIC"
                        />
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Issue/Message"
                            cols={30}
                            rows={5}
                        ></textarea>
                    </div>
                    <div className="info">
                        <ul>
                            <li>
                                If you are interested in visiting our data
                                center, we would be happy to take you around in
                                a guided tour.
                            </li>
                            <li>
                                Please let us know your details and we will
                                contact you soon with the details of your visit
                                and appointment confirmation.
                            </li>
                            <li>We look forward to meeting you.</li>
                        </ul>
                        <div className="btn-wrap">
                            <button type="submit">
                                <CircleButton title="SEND BOOKING REQUEST" />
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            {/* <div className="send-btn">SEND BOOKING REQUEST</div> */}
            <style jsx>{`
                .content {
                    display: flex;
                    justify-content: space-around;
                }
                .request-form {
                    flex: 1;
                    font-weight: 350;
                    font-size: 18px;
                    line-height: 24px;
                    color: #ffffff;
                    display: flex;
                    flex-direction: column;
                    margin-left: 200px;
                    margin-right: 50px;
                }
                .request-form input {
                    height: 63.62px;
                    margin-top: 15px;
                    margin-bottom: 15px;
                    padding-left: 20px;
                    padding-right: 20px;
                }
                .request-form textarea {
                    height: 217.57px;
                    margin-top: 15px;
                    margin-bottom: 15px;
                    padding: 20px;
                }
                .send-btn {
                    margin-top: 78px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 64px;
                    line-height: 85px;
                    background: -webkit-linear-gradient(#055476, #72c4de);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .info {
                    flex: 1;
                    font-family: Segoe UI;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 36px;
                    line-height: 117.51%;
                    color: #ffffff;
                    margin-left: 50px;
                    margin-right: 100px;
                }
                .info li {
                    margin-bottom: 24px;
                }
                .btn-wrap {
                    display: flex;
                    justify-content: center;
                    margin-top: 84px;
                }

                @media screen and (max-width: 1024px) {
                }
            `}</style>
        </>
    );
}
