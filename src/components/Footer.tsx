export default function Footer() {
  return (
    <>
      <div className="container">
        <div className="footer-wrap"></div>
        <div className="footer">
          <div className="footer-contents">
            <div className="form">
              <h2>Accelerating Enterprise Digitalization</h2>
              <p>
                Get Exclusive <span>Digitalization Technology</span> updates
                straight to your inbox
              </p>
              <input type="text" name="email" id="email" placeholder="Email address" />
            </div>
            <div className="link-group">
              <h5>About Us</h5>
              <div className="link-list">
                <a href="http://">Our Company</a>
                <a href="http://">Our Brand</a>
                <a href="http://">Our MTP</a>
                <a href="http://">Our Corporate Value</a>
                <a href="http://">What do we stand for</a>
                <a href="http://">Our Key Deliverables</a>
                <a href="http://">Our Leadership Team</a>
                <a href="http://">Our Team</a>
                <a href="http://">Learn more</a>
              </div>
            </div>
            <div className="link-group">
              <h5>Our Services</h5>
              <div className="link-list">
                <a href="http://">Our Company</a>
                <a href="http://">Our Brand</a>
                <a href="http://">Our MTP</a>
                <a href="http://">Our Corporate Value</a>
                <a href="http://">What do we stand for</a>
                <a href="http://">Our Key Deliverables</a>
                <a href="http://">Our Leadership Team</a>
                <a href="http://">Our Team</a>
                <a href="http://">Learn more</a>
              </div>
            </div>
            <div className="link-group">
              <h5>Contact Us</h5>
              <div className="link-list">
                <a href="http://">Our Company</a>
                <a href="http://">Our Brand</a>
                <a href="http://">Our MTP</a>
                <a href="http://">Our Corporate Value</a>
                <a href="http://">What do we stand for</a>
                <a href="http://">Our Key Deliverables</a>
                <a href="http://">Our Leadership Team</a>
                <a href="http://">Our Team</a>
                <a href="http://">Learn more</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="end">
            <h6>Copyright © 2021 OrionStealler. All rights reserved.</h6>
            <div className="social-links">
              <a href="http://">
                <img src="/images/social/Twitter/Vector.svg" alt="Twitter" />
              </a>
              <a href="http://">
                <img
                  src="/images/social/Facebook/Negative.svg"
                  alt="Facebook"
                />
              </a>
              <a href="http://">
                <img
                  src="/images/social/Instagram/Negative.svg"
                  alt="Instagram"
                />
              </a>
              <a href="http://">
                <img
                  src="/images/social/LinkedIn/Negative.svg"
                  alt="LinkedIn"
                />
              </a>
              <a href="http://">
                <img src="/images/social/YouTube/Negative.svg" alt="YouTube" />
              </a>
            </div>
            <div className="tnc-links">
              <a href="">
                <h6>Terms & Conditions</h6>
              </a>
              <a href="">
                <h6>Privacy Policy</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
        }
        .footer {
          padding: 64px 64px 0 64px;
          margin: 72px 72px 0 72px;
        }
        .footer-wrap {
          width: 85%;
          height: 460px;
          padding: 64px;
          padding-bottom: 0;
          margin: 72px;
          position: absolute;

          background: linear-gradient(
            176.64deg,
            #ffffff -71.48%,
            rgba(255, 255, 255, 0.1) 51.74%
          );
          mix-blend-mode: normal;
          opacity: 0.15;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 20px 20px 0 0;
        }
        .footer-contents {
          display: flex;
        }
        .footer .form {
          flex: 3;
        }
        .footer .form h2 {
          font-family: Roboto;
          font-style: normal;
          font-weight: 900;
          font-size: 50px;
          line-height: 59px;
          color: #ffffff;
        }
        .footer .form p {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 21px;
          color: #a7a9ac;
        }
        .footer .form span {
          font-family: Roboto;
          font-style: normal;
          font-weight: 900;
          font-size: 21px;
          line-height: 25px;

          color: #ffffff;
        }
        .footer .form input {
          height: 65px;
          width: 536px;
          padding-left: 28px;
          padding-right: 28px;
        }
        .footer .link-group {
          flex: 1;
        }
        .footer .link-group h5 {
          font-family: Roboto;
          font-style: normal;
          font-weight: 900;
          font-size: 22px;
          line-height: 26px;
          color: #ffffff;
        }
        .footer .link-group .link-list {
          display: flex;
          flex-direction: column;
        }
        .footer .link-group .link-list a {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 28px;
          color: #ffffff;
        }
        .footer hr {
          margin-top: 64px;
        }
        .footer .end {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .footer .end .social-links a {
          margin-left: 16px;
        }
        .footer .end h6 {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 21px;
          color: #a7a9ac;
        }
        .footer .end .tnc-links {
          display: flex;
        }
        .footer .end .tnc-links a:last-child {
          margin-left: 16px;
        }
      `}</style>
    </>
  );
}
