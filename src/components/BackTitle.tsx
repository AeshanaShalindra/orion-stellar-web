import { Parallax } from "react-scroll-parallax";

type Props = {
  title: string;
  size?: string;
  bottom?: number;
};

export default function BackTitle({ title, size, bottom }: Props) {
  return (
    <>
      <span className="back-title">{title}</span>
      <style jsx>{`
        .back-title {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: 900;
          font-size: ${size || 32}vh;
          line-height: 483px;
          color: rgba(0, 0, 0, 0.3);
          margin-bottom: -${bottom || 99}px;
          margin-top: -163px;
        }
      `}</style>
    </>
  );
}
