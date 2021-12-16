import React from "react";

type Props = {
  text: string;
  fontSize: string;
  textColor: string;
  background: string;
  width: string;
  heigth: string;
  secondary?: boolean;
};

const Button = ({
  text,
  fontSize,
  textColor,
  background,
  width,
  heigth,
}: Props) => {
  return (
    <button
      style={{
        color: textColor,
        backgroundColor: background,
        width: width,
        height: heigth,
        border: "0px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: fontSize,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
