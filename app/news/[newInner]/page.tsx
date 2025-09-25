import Image from "next/image";
import connectDb from "@/lib/dbConnect";
import NewsModel from "@/models/New";

interface IProps {
  params: { newInner: string };
}

const NewsInner = async ({ params }: IProps) => {
  if (!params.newInner) return <div>News ID not provided</div>;

  // Подключаемся к БД
  await connectDb();

  // Находим новость по ID
  const currentNew = await NewsModel.findById(params.newInner);

  if (!currentNew) {
    return <div>News not found</div>;
  }

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
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-[#7EB693] text-white py-1 px-4 rounded-full text-sm font-semibold">
            Organic
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <p className="text-sm">{new Date(currentNew.createdAt).toLocaleDateString("ru-RU")}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <p className="text-sm">{currentNew.author}</p>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-[#274C5B] mb-6">
          {currentNew.title}
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#274C5B]">
            Предпочтительная форма витамина D
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Uniquely maintain economically sound innovation through cooperative technology. Competently parallel
            fully researched data and maintain consumer-driven improvements. Collaborative anaylyze quality
            manufactured products for a fully researched data and maintain consumer-driven improvements.
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 pl-4">
            <li>Publishing packages and web pages lorem ipsum as their default.</li>
            <li>Consectetur, content here, making it look like readable.</li>
            <li>Packages and web pages lorem ipsum as their default.</li>
          </ul>
        </div>

        <div className="bg-[#F1F8F4] rounded-[2rem] p-6 border-l-4 border-[#7EB693] mb-8">
          <p className="italic text-[#274C5B] text-lg font-medium">
            "The first rule of any organic and in a business is that nature is
            applied to an efficient operation and respects the efficiency. The
            brand is fully organic, applied to a low-level operation and
            magnify the health."
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-[#274C5B]">
          Производите идеальный органический продукт вместе с нами
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </p>

        <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-2 pl-4">
          <li>Publishing packages and web pages lorem ipsum as their default.</li>
          <li>Content here, content here, making it look like readable.</li>
          <li>Packages and web pages lorem ipsum as their default.</li>
        </ol>
      </article>
    </main>
  );
};

export default NewsInner;