"use client";
import React from "react";

interface NewsQuoteProps {
  text: string;
}

const NewsQuote: React.FC<NewsQuoteProps> = ({ text }) => {
  return (
    <div className="bg-[#F1F8F4] rounded-[2rem] p-6 border-l-4 border-[#7EB693] mb-8">
      <p className="italic text-[#274C5B] text-lg font-medium">{text}</p>
    </div>
  );
};

export default NewsQuote;
