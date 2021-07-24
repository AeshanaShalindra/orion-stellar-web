
type Props = {
  image: string;
  title: string;
  description: string;
};
export default function InfoCard({ title, image, description }: Props) {
  return (
    <>
      <button
        type="button"
        className="button"
      >
        <img src={ image } alt={ title } />
        <div className="text">
          <h5>{ title }</h5>
          <p>{ description }</p>
        </div>
      </button>
      <style jsx>{ `
        .button {
          width: 490px;
          height: 650px;
          transition: transform .2s; 
          cursor: pointer;
          border: none;
          padding: 0;
          border-radius: 5px;
          margin-bottom: 70px;
          display: flex;
          flex-direction: column;
        }
        .text{
          padding: 0 30px;
          text-align: left;
        }
        img{
          width: 490px;
          height: 395px;
        }
        h5{          
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: bold;
          font-size: 35px;
          line-height: 115.51%;
          margin-bottom:12px;
        }
        p{          
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 27px;
          color: #000000;
        }
      `}</style>
    </>
  );
}
