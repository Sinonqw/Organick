"use client";
import React from "react";

interface NewsHeaderProps {
  category: string;
  date: string;
  author: string;
}

const NewsHeader: React.FC<NewsHeaderProps> = ({ category, date, author }) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-[#7EB693] text-white py-1 px-4 rounded-full text-sm font-semibold">
        {category}
      </div>
      <div className="flex items-center gap-2 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
          <line x1="16" x2="16" y1="2" y2="6"></line>
          <line x1="8" x2="8" y1="2" y2="6"></line>
          <line x1="3" x2="21" y1="10" y2="10"></line>
        </svg>
        <p className="text-sm">{new Date(date).toLocaleDateString("ru-RU")}</p>
      </div>
      <div className="flex items-center gap-2 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <p className="text-sm">{author}</p>
      </div>
    </div>
  );
};

export default NewsHeader;
