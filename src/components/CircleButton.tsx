
type Props = {
  title: string;
  dark?: boolean;
};
export default function CircleButton({ title, dark }: Props) {
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

          background-color: ${dark ? "#000" : "#fff"};
          border-radius: 1000px;
          transition: transform 0.5s; 

          cursor: pointer;
          border: none;
        }
        .text{
          font-family: 'Roboto', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 23px;

          color: ${dark ? "#fff" : "#000"};
        }
        button:active,
        button:hover {
          transform: scale(1.05);          
          background-color: ${dark ? "#fff" : "#000"};
        }
        button:hover .text {
          color: ${dark ? "#000" : "#fff"};
        }
      `}</style>
    </>
  );
}
