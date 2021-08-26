import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import ActiveLink from "../components/ActiveLink";
import NavButton from "./NavButton";

export default function NavBar() {
  const { asPath } = useRouter();
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [showFixedBar, setShowFixedBar] = useState(false);
  const activeLink = asPath;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
      setShowFixedBar(goingUp && currentScrollY > 106);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

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
                <NavButton title="About Us" active={asPath === "/about-us"} />
              }
            />
            <ActiveLink
              href="/services"
              children={
                <NavButton
                  title="Our Services"
                  active={asPath === "/services"}
                />
              }
            />
            <ActiveLink
              href="/contact"
              children={
                <NavButton title="Contact" active={asPath === "/contact"} />
              }
            />
          </div>

          <hr className="line" />
        </div>
      </div>
      <div className="scroll nav-row">
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
                <NavButton
                  title="About Us"
                  active={asPath === "/about-us"}
                  scroll={true}
                />
              }
            />
            <ActiveLink
              href="/services"
              children={
                <NavButton
                  title="Our Services"
                  active={asPath === "/services"}
                  scroll={true}
                />
              }
            />
            <ActiveLink
              href="/contact"
              children={
                <NavButton
                  title="Contact"
                  active={asPath === "/contact"}
                  scroll={true}
                />
              }
            />
          </div>
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
        .line {
          border: 1px solid rgba(255, 255, 255, 0.6);
          margin-top: 24px;
          width: -webkit-fill-available;
        }
        .scroll.nav-row {
          position: fixed;
          width: -webkit-fill-available;
          padding: 0 40px;
          font-family: "SegoeUI", sans-serif;
          font-style: normal;
          color: #ffffff;
          background-color: black;
          z-index: 100;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: top 0.3s;
          top: ${showFixedBar ? "0" : "-100px"};
        }
        .scroll.nav-row .logo {
          margin-top: 36px;
          flex: 2;
          height: 80px;
        }
        .scroll.nav-row .logo img {
          height: 24px;
        }
        .scroll.nav-row .logo h6 {
          font-size: 13.6px !important;
          letter-spacing: 0.14em;
          margin-top: 6px !important;
        }
      `}</style>
    </>
  );
}
