import React from "react";
import Subtitle from "./Subtitle";
import Title from "./Title";
import Button from "./Button";

interface IHeaderSect {
  subtitleText: string;
  titleText: string;
  subtitleColor: string;
  titleColor: string;
  btnText: string;
  btnBgColor?: string;
  btnTextColor: string;
  btnClasses?: string
}

const HeaderSect = ({
  subtitleColor,
  subtitleText,
  titleColor,
  titleText,
  btnBgColor,
  btnText,
  btnTextColor,
  btnClasses
}: IHeaderSect) => {
  return (
    <div className="flex justify-between items-end gap-3 mb-[50px]">
      <div className="max-w-[700px]">
        <Subtitle color={subtitleColor} size={36} className="mb-2">
          {subtitleText}
        </Subtitle>
        <Title color={titleColor} size={50}>
          {titleText}
        </Title>
      </div>
      <Button colorBg={btnBgColor} colorText={btnTextColor} className={btnClasses}>{btnText}</Button>
    </div>
  );
};

export default HeaderSect;
