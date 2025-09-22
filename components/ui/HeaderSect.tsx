import React from "react";
import Subtitle from "./Subtitle";
import Title from "./Title";
import Button from "./Button";

interface IHeaderSect {
  subtitleText: string;
  titleText: string;
  subtitleColor?: string;
  titleColor?: string;
  btnText?: string;
  btnBgColor?: string;
  btnTextColor: string;
  btnClasses?: string;
  href?: string;
}

const HeaderSect = ({
  subtitleColor,
  subtitleText,
  titleColor,
  titleText,
  btnBgColor,
  btnText,
  btnTextColor,
  btnClasses,
  href,
}: IHeaderSect) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 sm:gap-6 mb-8 sm:mb-12">
      <div className="max-w-[700px] text-center sm:text-left">
        <Subtitle
          color={subtitleColor}
          className="mb-2 text-2xl sm:text-3xl lg:text-4xl"
        >
          {subtitleText}
        </Subtitle>
        <Title color={titleColor} className="text-3xl sm:text-4xl lg:text-5xl">
          {titleText}
        </Title>
      </div>

      {href && (
        <Button
          href={href}
          colorBg={btnBgColor}
          colorText={btnTextColor}
          className={btnClasses}
        >
          {btnText}
        </Button>
      )}
    </div>
  );
};

export default HeaderSect;
