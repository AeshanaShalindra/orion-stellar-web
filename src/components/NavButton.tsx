type Props = {
  title: string;
  active: boolean;
  scroll?: boolean;
};
export default function NavButton({ title, active, scroll }: Props) {
  return (
    <div className={"container " + (active ? "active" : "")}>
      <div className="title">{title}</div>
      <style jsx>{` 
        .container {
          width: 140px;
          height: 80px;
          display: flex;
          align-items: flex-end;
          justify-content: center;          
        }
        .container:hover {
          background: ${scroll ? '#252525' : '#00000073'};
        }
        .title {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: normal;
          font-size: 17px;
          line-height: 23px;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .active {
          background: ${scroll ? '#5a5a5a' : '#000000'} !important;
        }
      `}</style>
    </div>
  );
}
