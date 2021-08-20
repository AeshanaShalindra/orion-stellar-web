type Props = {
  image: string;
  title: string;
  name: string;
  workTitle: string;
  workLogo: string;
  description: string;
};
export default function ProfileCard({
  image,
  title,
  name,
  workTitle,
  workLogo,
  description,
}: Props) {
  return (
    <>
      <div className="card">
        <img src={image} alt={title} />
        <div className="text">
          <small>{title}</small>
          <h5>{name}</h5>
          {/* <small>{workTitle}</small>
          <img className="work-logo" src={workLogo} alt="work place" /> */}
          <p>{description}</p>
        </div>
      </div>
      <style jsx>{`
        .card {
          width: 490px;
          /* height: 650px; */
          transition: transform 0.2s;
          cursor: pointer;
          border: none;
          padding: 0;
          border-radius: 5px;
          margin-bottom: 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: center;
          color: #ffffff;
        }
        .card div{
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: center;
        }
        .card img {
          /* width: 266.65px;
          height: 266.65px; */
          margin-bottom: 36px;
        }
        small {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 27px;
          color: #ffffff;
        }
        h5 {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: bold;
          font-size: 35px;
          line-height: 115.51%;
          text-align: center;
          margin: 0;
          color: #ffffff;
          margin-bottom: 28px;
        }
        .work-logo {
          width: auto;
          height: 47px;
          margin-bottom: 36px;
        }
        p {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: 350;
          font-size: 18px;
          line-height: 24px;
          color: #ffffff;
        }
      `}</style>
    </>
  );
}
