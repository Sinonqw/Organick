import Image from "next/image";
import connectDb from "@/lib/dbConnect";
import NewsModel from "@/models/New";
import NewsHeader from "@/components/sections/News/NewsInner/NewsHeader";
import NewsContent from "@/components/sections/News/NewsInner/NewsContent";
import NewsQuote from "@/components/sections/News/NewsInner/NewsQuote";

interface IProps {
  params: { newInner: string };
}

const NewsInner = async ({ params }: IProps) => {
  if (!params.newInner) return <div>News ID not provided</div>;

  await connectDb();
  const currentNew = await NewsModel.findById(params.newInner);

  if (!currentNew) return <div>News not found</div>;

  return (
    <main className="container mx-auto max-w-[850px] py-16 px-4">
      <div>
        <Image
          alt="News banner"
          src={"/banners/blogInfo.jpg"}
          width={1920}
          height={898}
          className="rounded-xl"
        />
      </div>

      <article className="mt-[-8rem] md:mt-[-10rem] lg:mt-[-12rem] bg-white rounded-[3rem] p-6 sm:p-8 md:p-10 relative z-10 mx-auto max-w-[90%] md:max-w-[85%] shadow-lg">
        <NewsHeader
          category="Organic"
          date={currentNew.createdAt}
          author={currentNew.author}
        />

        <h1 className="text-4xl font-bold text-[#274C5B] mb-6">
          {currentNew.title}
        </h1>

        <NewsContent
          sections={[
            {
              title: "Preferred Form of Vitamin D",
              paragraphs: [
                "Maintaining a healthy lifestyle requires the right balance of essential nutrients. Vitamin D plays a key role in supporting bone health, immune function, and overall well-being.",
                "Choosing the correct form of Vitamin D ensures better absorption and effectiveness, helping you meet your daily nutritional needs efficiently.",
              ],
              listItems: [
                "Vitamin D3 is widely recommended for its higher bioavailability.",
                "Ensure your intake aligns with daily recommended amounts.",
                "Always consult a healthcare professional before starting supplementation.",
              ],
            },
            {
              title: "Create the Perfect Organic Product with Us",
              paragraphs: [
                "We focus on providing high-quality organic products that meet the highest standards. Our processes ensure safety, sustainability, and superior taste.",
              ],
              listItems: [
                "Sourced from trusted organic farms.",
                "Produced under strict quality control measures.",
                "Sustainably packaged to reduce environmental impact.",
              ],
            },
          ]}
        />

        <NewsQuote text="The first rule of any organic business is that nature should guide every operation. True organic products respect natural processes while delivering maximum health benefits." />
      </article>
    </main>
  );
};

export default NewsInner;
