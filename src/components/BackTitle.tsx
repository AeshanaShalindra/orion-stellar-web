import React from "react";
import { Parallax } from "react-scroll-parallax";

type Props = {
  title: string;
  subtitle?: string;
  size?: string;
  bottom?: number;
};

export default function BackTitle({ title, subtitle, size, bottom }: Props) {
  return (
    <>
      <div>
        <Parallax y={[-10, 30]}>
          <span className="back-title">{title}</span>
        </Parallax>
        <div className="sub-title-wrap">
        <Parallax y={[-5, 15]}>
          <span className="sub-title">{subtitle}</span>
        </Parallax>
        </div>
      </div>
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
        .sub-title-wrap {
          margin-top: -165px;
          margin-left: 100px;
          margin-bottom: 165px;
        }
        .sub-title {
          font-family: "SegoeUI";
          font-style: normal;
          font-weight: 600;
          font-size: 40px;
          line-height: 94.01%;
          letter-spacing: 0.53em;
          text-transform: uppercase;
          color: #ffffff;
        }
      `}</style>
    </>
  );
}
