"use client";
import React, { ReactNode } from "react";

interface NewsContentProps {
  sections: {
    title?: string;
    paragraphs?: string[];
    listItems?: string[];
  }[];
}

const NewsContent: React.FC<NewsContentProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section, i) => (
        <div key={i} className="mb-8">
          {section.title && <h2 className="text-2xl font-semibold mb-4 text-[#274C5B]">{section.title}</h2>}
          {section.paragraphs?.map((p, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed mb-4">{p}</p>
          ))}
          {section.listItems && (
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 pl-4">
              {section.listItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};

export default NewsContent;
