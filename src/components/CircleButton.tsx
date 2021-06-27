
type Props = {
  title: string;
};
export default function CircleButton({ title }: Props) {
  return (
    <>
      <button
        type="button"
        className="button"
      >
        <div className="text">{ title }</div>
      </button>
      <style jsx>{`
        .button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          width: 185px;
          height: 185px;

          background-color: #000000;
          border-radius: 1000px;
          transition: transform .2s; 

          cursor: pointer;
        }
        button:active,
        button:hover {
          background-color: rgba(0, 0, 0, 0.4);
          transform: scale(1.05)
        }
        .text{
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 23px;

          color: #FFFFFF;
        }
      `}</style>
    </>
  );
}
