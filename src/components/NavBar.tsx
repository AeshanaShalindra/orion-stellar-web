import { useRouter } from "next/router";
import ActiveLink from "../components/ActiveLink";
import NavButton from "./NavButton";

export default function NavBar() {
  const {asPath} = useRouter();
  
  const activeLink = asPath;

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
                    fontFamily: "SegoeUI",
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
              <NavButton title="About Us" active={asPath === "/about-us"}/>
            }
          />
          <ActiveLink
            href="/services"
            children={
              <NavButton title="Our Services" active={asPath === "/services"}/>
            }
          />
          <ActiveLink
            href="/tour"
            children={
              <NavButton title="Tour" active={asPath === "/tour"}/>
            }
          />
          <ActiveLink
            href="/contact"
            children={
              <NavButton title="Contact" active={asPath === "/contact"}/>
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
          font-family: "SegoeUI", sans-serif;
          font-style: normal;
          color: #ffffff;
          height: 0;
        }
        h6 {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          letter-spacing: 0.14em;
          margin-top: 12px;
        }
        .nav-row .logo {
          margin-top: 48px;
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
          margin-top: 24px;
          width: -webkit-fill-available;
        }
      `}</style>
    </>
  );
}
