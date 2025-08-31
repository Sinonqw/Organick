interface INews {
  img: string;
  date: string;
  author: string;
  title: string;
  desc: string;
}

const NEWS_ITEMS: INews[] = [
  {
    img: "/news/bg1.png",
    date: "25 Nov",
    author: "By Rachi Card",
    title: "The Benefits of Vitamin D & How to Get It",
    desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    img: "/news/bg2.png",
    date: "25 Nov",
    author: "By Rachi Card",
    title: "Our Favourite Summertime Tommeto",
    desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
];

export default NEWS_ITEMS;
