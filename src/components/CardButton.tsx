
type Props = {
  title: string;
  image: string;
  marginLeft?: string;
};
export default function CardButton({ title, image, marginLeft }: Props) {
  return (
    <>
      <button
        type="button"
        className="button"
      >
        <h5>{ title }</h5>
        <img src={ image } alt={ title } />
      </button>
      <style jsx>{ `
        .button {
          width: 632px;
          height: 650px;
          transition: transform .2s; 
          cursor: pointer;
          border: none;
          padding: 0;
          margin-left: ${marginLeft || 0}
        }
        button:active,
        button:hover {
          transform: scale(1.05)
        }
        img{
          width:100%;
          height:100%;
        }
        h5{
          position: absolute;
          padding: 0 40px;
          font-family: Segoe UI;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 101.69%;
          letter-spacing: 0.595em;
          text-transform: uppercase;
          color: #000000;
        }
      `}</style>
    </>
  );
}
