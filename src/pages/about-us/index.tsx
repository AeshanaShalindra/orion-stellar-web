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
      <div className="container cover">
        <NavBar />
        <h2 className="main-title company">Company</h2>
        <div className="company-back">
          <p>
            Orionstellar is a newly established digital infrastructure services
            brand from digital realty pvt limited, jointly held by Dialog
            Broadband Network (Pvt) Limited, a fully owned subsidiary of Dialog
            Axiata Plc and St. Anthony’s Property Developers (Private) Limited
            (SAPD)
          </p>
        </div>

        <div className="mtp-wrap">
          <h2 className="main-title brand">
            Our Brand <br />
            Attributes
          </h2>
          <ul>
            <li>
              A <b>new breed</b> technology company
            </li>
            <li>
              Emphasis on <b>stellar performance</b> and <b>global standards</b>
            </li>
            <li>
              Lean and mean organization structure with a start up thinking
            </li>
            <li>A focus in B2B markets in Sri Lanka and the region.</li>
          </ul>
        </div>

        <div className="brand-back">
          <div className="tour-button">
            <CircleButton title="Virtual Tour" dark={true} />
          </div>
          <h2 className="main-title brand">Brand</h2>
          <p>
            The origin of our brand name “OrionStellar” is linked to the main
            brand “Orion city” which is the country’s largest IT park. The
            second part of the name ‘Stellar” stands for the higher standards
            and star performance we are striving for. OrionStellar wordmark logo
            is simple yet with an elegant touch that summarizes how well we
            simplifies and uplifts the industry performance. Our main logo
            colors are shades of grey and blue which have been again inspired
            from the main colors of the mother brand “Orion City” which are
            grey, blue, and green. These shades of grey and blue affirm with a
            masculine & professional outlook.
            <br />
            <br />
            Our brand story is all about the high performance, high standards
            together with the new opportunities we would spark for those who are
            around us. We would ideally help our client companies to raise their
            bars to reach the heights.
          </p>
          <div className="attributes">
            <h2 className="main-title mtp">Our MTP</h2>
            <h3 className="sub-title mtp">(Massive Transformative Purpose)</h3>
            <h4 className="quote mtp">
              “Simplify enterprise digital infrastructure challenges to
              <br />
              accelerate digitalization & growth.”
            </h4>
          </div>
        </div>
      </div>

      <div className="cop-image">
        <img src="/images/cop-val.png" alt="cooperate" />
      </div>

      <div className="container service">
        <h2 className="main-title value">Our Corporate Values</h2>
        <ul className="cop-value">
          <li>Uncompromised integrity</li>
          <li>Technology inclusion and equal opportunities</li>
          <li>power data in decision making (data driven enterprise)</li>
          <li>continuous improvement to meet global standards</li>
          <li>commitment to environmental sustainability</li>
        </ul>

        <h2 className="main-title service-grid">
          We are a new breed <br />
          tech services company <br />
          helping you to :
        </h2>
        <div className="service-grid-line"></div>
        <div className="service-grid-container">
          <div className="grid-item1">
            <img src="images/target.png" alt="" className="grid-icon" />
            <div className="grid-text">
              FOCUS ON YOUR <br /> CORE BUSINESS <br /> AND INNOVATION
            </div>
          </div>
          <div className="grid-item2">
            <img src="images/colo5.png" alt="" className="grid-image" />
          </div>
          <div className="grid-item3">
            <div className="grid-text">
              ACCELLERATE YOUR <br /> DIGITALISATION <br /> ROADMAP
            </div>
          </div>
          <div className="grid-item4">
            <div className="grid-text">
              RATIONALISE <br /> YOUR IT <br /> INFRASTRUCTURE <br /> COST
            </div>
          </div>
          <div className="grid-item5">
            <img src="images/colo6.png" alt="" className="grid-image" />
          </div>
          <div className="grid-item6">
            <img
              src="images/innovationwheel.svg"
              alt=""
              className="grid-icon"
            />
            <div className="grid-text">REDUCE ENERGY COSTS</div>
          </div>
        </div>

        {/* <div className="stand-for">
          <h2 className="main-title">What do we stand for:</h2>
          <div className="stand-list">
            <div>
              <img src="/images/target.svg" alt="focus" />
              <h5>Focus on your core business & innovation</h5>
            </div>
            <div>
              <img src="/images/time.svg" alt="focus" />
              <h5>Accelerate your digitalisation roadmap</h5>
            </div>
            <div>
              <img src="/images/regulation.svg" alt="focus" />
              <h5>Rationalise your IT infrastructure cost</h5>
            </div>
            <div>
              <img src="/images/innovation.svg" alt="focus" />
              <h5>Reduce energy costs</h5>
            </div>
          </div>
        </div> */}

        {/* <BackTitle title="Deliverables" />
        <div className="card-section">
          <InfoCard
            image="/images/card1.png"
            title="Sri Lanka’s First High Density Data Center."
            description="15Kw+ per Rack
           Design PUE at 1.4
           Best Power Efficiency"
          />
          <InfoCard
            image="/images/card2.png"
            title="Sri Lanka’s First Carrier Neutral Data Center."
            description="15Kw+ per Rack
           Design PUE at 1.4
           Best Power Efficiency"
          />
          <InfoCard
            image="/images/card3.png"
            title="Superior Rack Space per Footprint"
            description="15Kw+ per Rack
           Design PUE at 1.4
           Best Power Efficiency"
          />
          <InfoCard
            image="/images/card4.png"
            title="Fine Energy Metering Granularity"
            description="Able to meter power usage at U Level “Pay as you go“ model"
          />
          <InfoCard
            image="/images/card5.png"
            title="Colombo’s only Tier 3 Certified Data Center."
            description="15Kw+ per Rack
           Design PUE at 1.4
           Best Power Efficiency"
          />
          <InfoCard
            image="/images/card6.png"
            title="Strategic Location Advantage"
            description="15Kw+ per Rack
           Design PUE at 1.4
           Best Power Efficiency"
          />
        </div> */}

        <BackTitle title="Leadership" subtitle="Thought Leaders" bottom={40} />
        <div className="leader-section">
          <ProfileCard
            image="/images/team/Rajendra.png"
            title="Chairman"
            name="Rajendra Theagarah"
            workTitle="Chairman"
            workLogo="/images/logos/degital-realty.png"
            description="Rajendra is a banking veteran, technologist, and business transformation leader. Rajendra started his career as a Chartered Accountant and is a member of the Chartered Institute of Management Accountants (UK).
            Mr. Theagarajah holds an MBA from Cranfield School of Management. He has over 37yrs of international experience in the Banking sector and is the recipient of multiple awards of recognition for his service and excellence in managing Sri Lankan banks."
          />
          <ProfileCard
            image="/images/team/Eric.png"
            title="Director"
            name="Eric Selvadurai"
            workTitle="Managing Director"
            workLogo="/images/logos/accelya.png"
            description="Eric brings over 30yrs of Business Process Management experience. His last appointment was with WNS Global Services where he held several senior management positions. 
            As Global Operations Director, he was responsible for building the Global Delivery and Support structure to enable significant growth; as CEO of the Enterprise Business, he created the F&A practice and the Shipping Logistics & Infrastructure division as Managing Director of Europe and South Africa region he was responsible for strategic deals and operations."
          />
          <ProfileCard
            image="/images/team/Supun.png"
            title="Director"
            name="Supun Weerasinghe"
            workTitle="GCEO"
            workLogo="/images/logos/dialog.png"
            description="Supun serves as Group Chief Executive and board member for Dialog Axiata. 
            Mr. Weerasinghe started his career in telecommunications at Dialog Axiata and has held multiple roles, such as Head of Strategy and CEO of the Mobile Business before being appointed as Group Chief Operating Officer of Dialog Axiata in 2010."
          />
          <ProfileCard
            image="/images/team/Pradeep.png"
            title="Director"
            name="Pradeep De Almeida"
            workTitle="Group Chief Technology Officer"
            workLogo="/images/logos/dialog.png"
            description="Supun serves as Group Chief Executive and board member for Dialog Axiata. 
            Mr. Weerasinghe started his career in telecommunications at Dialog Axiata and has held multiple roles, such as Head of Strategy and CEO of the Mobile Business before being appointed as Group Chief Operating Officer of Dialog Axiata in 2010."
          />
          <ProfileCard
            image="/images/team/Jeevan.png"
            title="Chief Executive Officer"
            name="Jeevan Gnanam"
            workTitle="Managing Director"
            workLogo="/images/logos/degital-realty.png"
            description="Jeevan is the visionary behind Sri Lanka’s first operational IT Park – Orion City. 
            Jeevan serves as the CEO of Anton. 
            His venture SAKS (SA Knowledge Services) was incorporated in 2012. His AI company, Veracity AI is recognized as a game changer across multiple industries. 
            He is also the president of SLASSCOM along with being a founder of the Lanka Angel Network and Hatch an innovative coworking space and accelerator."
          />
          <ProfileCard
            image="/images/team/Nalaka.png"
            title="Chief Operations Officer"
            name="Nalaka Bandara"
            workTitle="Chief operations officer"
            workLogo="/images/logos/degital-realty.png"
            description="Nalaka brings over 20yrs of experience in enterprise solutions business with over 10yrs experience in data center business.
            He launched Sri Lankas first Tier 3 certified DC and served as General manager for data center & cloud business at Dialog Axiata PLC.
           Nalaka holds a BSc in Engineering and an MBA from University of Colombo.
           He also holds Diploma in Management accounting from CIMA UK"
          />
        </div>

        <BackTitle title="Team" />
        <img className="team-image" src="/images/team.png" alt="team" />

        <div className="team-details">
          We foster a culture of “Think big ,start small and move faster”. We
          value the diversity in the workplace to bring out the best out of the
          talent. Our highly trained customer support teams and technical teams,
          fully equipped with the state of the art tools are focusing on best in
          class service delivery .Our delivery assurance would ensure seamless
          onboarding of customers to our data center. <br />
          Our sales and marketing team will focus on customer life cycle
          management adding value to our clients throughout the journey. Senior
          management team is always available for client consultations,
          feedback, and escalations to ensure we deliver what we promise as
          OrionStellar.
        </div>

        <div className="learn-back">
          <h2 className="main-title learn">Learn more about us!</h2>
          <div>
            <h3>Have a casual chat with our COO</h3>
            <div>
              <h4>Nalaka Bandara</h4>
              <small>Chief Operating Officer</small>
              <img src="/images/logo-white.svg" alt="logo" />
            </div>
            <h4 className="contact">+94 77 3335100</h4>
          </div>
          <img className="coo" src="/images/team/Nalaka.png" alt="nalaka" />
        </div>

        <Footer />
      </div>
      <style jsx>{`
        .container {
          width: 100%;
        }
        .cover {
          background-repeat: no-repeat;
          background-image: url("/images/cover2.png");
          height: 1108px;
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
        .main-title.company {
          position: absolute;
          width: 667px;
          height: 200px;
          left: 160px;
          top: 191px;
          font-size: 130px !important;
          z-index: 1;
        }
        .company-back {
          position: absolute;
          width: 679px;
          height: 396px;
          left: 0;
          top: 403px;
          background: #000000;
          z-index: 0;
        }
        .company-back p {
          width: 338px;
          height: 157px;
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: 350;
          font-size: 18px;
          line-height: 24px;
          color: #ffffff;
          margin: 100px 278px;
        }
        .mtp-wrap {
          position: absolute;
          width: 516px;
          height: 146px;
          left: 160px;
          top: 890px;
        }
        .mtp-wrap ul li {
          font-family: "SegoeUI";
          font-style: normal;
          font-size: 22px;
          line-height: 28px;
          letter-spacing: 0.125em;
          text-transform: uppercase;
          color: #ffffff;
        }
        .main-title.mtp {
          margin: 0;
        }
        .sub-title.mtp {
          margin: 0;
          font-family: "SegoeUI";
          font-style: normal;
          font-size: 22px;
          color: #ffffff;
        }
        .quote {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: 600;
          font-size: 30px;
          color: #ffffff;
        }
        .quote.mtp {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: 600;
          font-size: 36px;
          line-height: 48px;
          color: #ffffff;
        }
        .brand-back {
          position: absolute;
          width: 639px;
          height: 1087px;
          left: 1024px;
          top: 690px;
          padding: 85px;
          background: linear-gradient(
            131.77deg,
            rgba(255, 255, 255, 0.4234) 10.66%,
            rgba(255, 255, 255, 0.1508) 95.86%
          );
          backdrop-filter: blur(30px);
        }
        .brand-back .tour-button {
          position: absolute;
          top: -87px;
          right: 95px;
        }
        .brand-back .mid-button {
          position: absolute;
          top: 485px;
          right: 708px;
        }
        .quote.brand {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: 350;
          font-size: 30px;
          line-height: 40px;
        }
        .main-title.brand {
          margin: 0;
        }
        .brand-back .attributes {
          margin-top: 80px;
        }
        .brand-back p {
          font-weight: 350;
          font-size: 18px;
          line-height: 24px;
        }
        .brand-back .attributes ul li {
          font-family: "SegoeUI";
          font-style: normal;
          font-size: 22px;
          line-height: 28px;
          letter-spacing: 0.125em;
          text-transform: uppercase;
          color: #ffffff;
        }

        .main-title.value {
          margin-left: 204px;
          margin-bottom: 36px;
        }

        .main-title.service-grid {
          margin-top: 190px;
          margin-left: 204px;
          margin-bottom: 36px;
        }

        .service-grid-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 37px;
          margin-left: 192px;
          margin-right: 192px;
          margin-top: 190px;
          margin-bottom: 190px;
          z-index: 10;
        }
        .service-grid-container .grid-item1 {
          grid-column-start: 1;
          grid-column-end: 3;
          background-color: black;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .service-grid-container .grid-item2 {
          grid-column-start: 3;
          grid-column-end: 4;
        }
        .service-grid-container .grid-item3 {
          grid-column-start: 4;
          grid-column-end: 5;
          display: flex;
          align-items: center;
        }
        .service-grid-container .grid-item4 {
          grid-column-start: 1;
          grid-column-end: 2;
          display: flex;
          align-items: center;
        }
        .service-grid-container .grid-item4 .grid-text {
          text-align: right;
        }
        .service-grid-container .grid-item5 {
          grid-column-start: 2;
          grid-column-end: 3;
        }
        .service-grid-container .grid-item6 {
          grid-column-start: 3;
          grid-column-end: 5;
          background-color: black;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .service-grid-container .grid-text {
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 127.69%;
          letter-spacing: 0.29em;
          text-transform: uppercase;
          color: #ffffff;
        }
        .service-grid-container .grid-image {
          width: 100%;
        }
        .service-grid-line {
          position: relative;
          width: 1010px;
          height: 0px;
          margin-left: 551.04px;
          margin-bottom: -600px;
          margin-top: 561px;
          z-index: 0;
          border: 1px solid #ffffff;
          transform: rotate(90deg);
        }

        .cop-value {
          margin-left: 204px;
          font-size: 24px;
          line-height: 140%;
          letter-spacing: 0.125em;
          text-transform: uppercase;
          color: #ffffff;
        }

        .value-back {
          width: 100%;
          height: 458px;
          background: #000000;
          margin-top: 356px;
          margin-bottom: 128px;
        }

        .value-back ul {
          margin: 100px 164px;
        }
        .value-back ul li {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: normal;
          font-size: 22px;
          line-height: 28px;
          letter-spacing: 0.125em;
          text-transform: uppercase;
          color: #ffffff;
        }
        .stand-for {
          width: 100%;
          padding: 80px;
        }
        .stand-for h2 {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: bold;
          font-size: 100px;
          line-height: 94.01%;
        }
        .stand-list {
          display: flex;
          justify-content: space-evenly;
          margin-top: 124px;
        }
        .stand-list div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .stand-list div h5 {
          width: 220px;
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 156.51%;
          text-align: center;
          letter-spacing: 0.045em;
          color: #ffffff;
        }
        .main-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1 1 auto;
          padding: 0 130px;
        }
        .main-row:last-child {
          margin-bottom: 100px;
        }
        .title-container h1 {
          font-family: "SegoeUI", sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 95px;
        }
        .row-tag {
          margin-right: 58px;
          color: #ffffff;
        }
        .row-tag-icon {
          display: flex;
          justify-content: space-around;
        }
        .row-tag h6 {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 13px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        p {
          margin: 0;
          color: #ffffff;
        }
        h1 {
          margin: 0;
          color: #ffffff;
        }
        h5 {
          font-size: 24px;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: 0.215em;
          text-transform: uppercase;
          color: #ffffff;
        }
        .cop-image {
          padding-top: 400px;
          background-color: black;
        }
        .cop-image img {
          width: 100%;
        }
        .service {
          margin-top: -200px;
          display: flex;
          background: linear-gradient(
            125.54deg,
            #0f1d31 30.98%,
            rgba(3, 91, 91, 0.77) 163.03%
          );
          flex-wrap: wrap;
        }
        .service h1 {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: bold;
          font-size: 130px;
          line-height: 173px;
        }
        .service p {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: 350;
          font-size: 24px;
          line-height: 32px;
          margin-top: 40px;
        }
        .service .content {
          padding: 200px 120px;
        }
        .service .service-card-section {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: -91px;
        }
        .section-header {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 94.01%;
          letter-spacing: 0.53em;
          text-transform: uppercase;
          color: #ffffff;
          z-index: 2;
          margin-bottom: -96px;
        }
        .card-section {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
        .leader-section {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: flex-start;
        }
        .team-image {
          width: 100%;
        }
        .team-details {
          width: 1060px;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 32px;
          color: #ffffff;
          margin-left: 180px;
          margin-top: 160px;
        }
        .learn-back {
          width: 100%;
          height: 458px;
          background: #000000;
          margin-top: 256px;
          margin-bottom: 128px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
        }
        .learn-back h2 {
          margin: 0;
          position: absolute;
          top: 8976px;
          left: 160px;
        }
        .learn-back div h3 {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: normal;
          font-size: 60px;
          line-height: 94.01%;
          color: #ffffff;
          margin: 0;
        }
        .learn-back div div {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 120%;
          margin: 80px 0 30px 0;
        }
        .learn-back div h4 {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: bold;
          font-size: 50px;
          line-height: 115.51%;
          color: #ffffff;
          margin: 0;
        }
        .learn-back div .contact {
          top: -338px;
          left: 509px;
          margin: 0;
        }
        .learn-back div small {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          line-height: 40px;
          color: #ffffff;
          margin: 0;
        }
        .learn-back div img {
          width: 259px;
          margin: 0;
        }
        .learn-back .coo {
        }
        .main-title.learn {
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