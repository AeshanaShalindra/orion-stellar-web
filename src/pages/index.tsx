import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import CircleButton from "../components/CircleButton";
import StarIcon from "../assets/star-alt.svg";
import LocationIcon from "../assets/pin-alt.svg";
import PaidIcon from "../assets/paid-alt.svg";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={ "/" } />
      <OpenGraphMeta url={ "/" } />
      <TwitterCardMeta url={ "/" } />
      <div className="container">
        <div className="main-row">
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
      <style jsx>{`
        .container {
          width: 100%;
          padding: 0 1.5rem;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url(https://images.unsplash.com/photo-1448301858776-07f780e9c9da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
        }
        .main-row{
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex: 1 1 auto;
          margin-top: 100px;
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
