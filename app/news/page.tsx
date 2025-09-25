import React from "react";
import Banner from "@/components/shared/Banner";
import NewsList from "@/components/sections/News/NewsList";

const Blog = () => {
  return (
    <>
      <Banner img="/banners/newsB.jpg" text="Recent News" />
      <NewsList />
    </>
  );
};

export default Blog;
