import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import CircleButton from "../components/CircleButton";
import StarIcon from "../assets/star-alt.svg";
import LocationIcon from "../assets/pin-alt.svg";
import PaidIcon from "../assets/paid-alt.svg";
import Image from 'next/image';

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={ "/" } />
      <OpenGraphMeta url={ "/" } />
      <TwitterCardMeta url={ "/" } />
        <div className="container cover">
          <div className="main-row first">
            <div className="title-container">
              <h1>Sri Lanka’s First</h1>
              <h1><strong>High Density</strong> Data Center</h1>
              <h5>Nimble | Connected | Sustainable</h5>
            </div>
            <CircleButton title="Virtual Tour" />
          </div>

          <div className="main-row">
            <div style={ { display: "flex" } }>
              <div className="row-tag">
                <div className="row-tag-icon">
                  <StarIcon width={ 24 } height={ 24 } fill={ "#fff" } />
                  <StarIcon width={ 24 } height={ 24 } fill={ "#fff" } />
                  <StarIcon width={ 24 } height={ 24 } fill={ "#fff" } />
                </div>
                <h6>TIA 03 Certified</h6>
              </div>
              <div className="row-tag">
                <div className="row-tag-icon">
                  <LocationIcon width={ 24 } height={ 24 } fill={ "#fff" } />
                </div>
                <h6>Strategically located</h6>
              </div>
              <div className="row-tag">
                <div className="row-tag-icon">
                  <PaidIcon width={ 24 } height={ 24 } fill={ "#fff" } />
                </div>
                <h6>TIA 03 Certified</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <img src="/public/images/services.png" alt="" />
          <h1>Services</h1>
          <p>In the era of 4 th industrial revolution and Gig economy the Digital infrastructure is in the middle
            of business strategy and CIOs are challenged continuously to scale up the IT systems to meet
            the exponential demands in terms of volume , computational power and information security
            challenges. Orion stellar offers a range of digital infrastructure services and managed value
            added services to unburden these challenges such that businesses could focus on their core
            business and innovation in their forward march to become a digital enterprise.</p>
        </div>
      <style jsx>{ `
        .container {
          width: 100%;
        }
        .cover {
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url("/images/cover.png");
          height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .main-row{
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex: 1 1 auto;
        }
        .first{
           margin-top:200px;
        }
        .row-tag{
          margin-left: 58px;
          color: #FFFFFF;
        }
        .row-tag-icon{
          display: flex;
          justify-content: space-around;
        }
        h1 {
          font-size: 95px;
          margin: 0;
          font-weight: 400;
          color: #FFFFFF;
        }
        h5 {
          font-size: 24px;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: 0.215em;
          text-transform: uppercase;
          color: #FFFFFF;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
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
