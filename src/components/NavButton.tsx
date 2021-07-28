type Props = {
  title: string;
  active: boolean;
};
export default function NavButton({ title, active }: Props) {
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
          background: #00000073;
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
          background: #000000;
        }
      `}</style>
    </div>
  );
}
