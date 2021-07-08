import ActiveLink from "../components/ActiveLink";

export default function NavBar() {
  return (
    <>
      <div className="nav-row">
        <div className="logo">
          <ActiveLink
            href={"/"}
            children={
              <>
                <img src="/images/logo-white.svg" alt="orion sella logo" />
                <h6
                  style={{
                    fontSize: "20px",
                    letterSpacing: "0.14em",
                    marginTop: "12px",
                    fontFamily: "Segoe UI",
                    color: "#ffffff",
                  }}
                >
                  Accelerating Enterprise Digitalization
                </h6>
              </>
            }
          />
        </div>
        <div className="link-list">
          <div className="button-list">

          <ActiveLink
            href="/about-us"
            children={
              <div
                style={{
                  color: "#ffffff",
                }}
              >
                About Us
              </div>
            }
          />
          <ActiveLink
            href="/services"
            children={
              <div
                style={{
                  color: "#ffffff",
                }}
              >
                Our Services
              </div>
            }
          />
          <ActiveLink
            href="/tour"
            children={
              <div
                style={{
                  color: "#ffffff",
                }}
              >
                Tour
              </div>
            }
          />
          <ActiveLink
            href="/contact"
            children={
              <div
                style={{
                  color: "#ffffff",
                }}
              >
                Contact
              </div>
            }
          />
                    </div>

            <hr className="line" />
        </div>
      </div>
      <style jsx>{`
        .nav-row {
          display: flex;
          justify-content: space-between;
          flex: 1 1 auto;
          padding: 0 40px;
          font-family: "Segoe UI", sans-serif;
          font-style: normal;
          color: #ffffff;
          margin-top: 48px;
          height: 0;
        }
        h6 {
          font-family: Segoe UI;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          letter-spacing: 0.14em;
          margin-top: 12px;
        }
        .nav-row .logo {
          flex: 2;
        }
        .nav-row .link-list {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .nav-row .button-list {
          display: flex;
          align-items: flex-start;
          justify-content: space-around;
        }
        .line{
          border: 1px solid rgba(255, 255, 255, 0.6);
          margin-top: 36px;
          width: -webkit-fill-available;
        }
      `}</style>
    </>
  );
}
