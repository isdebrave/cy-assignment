import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import PlayList from "../components/PlayList";

import useContent from "../hooks/useContent";
import useRecentContent from "../hooks/useRecentContent";
import { contentType } from "../types/contentType";
import { recentContentType } from "../types/recentContentType";

const Home = () => {
  const { data: content = [] } = useContent();
  const { data: recentContent = [] } = useRecentContent();

  return (
    <div className="grid grid-cols-4 p-6 gap-24">
      <div className="col-span-3">
        <Navbar />
        <div className="mt-10">
          <h1 className="text-3xl font-semibold mb-4 text-gray-600">
            최근 재생된 컨텐츠
          </h1>
          <Carousel data={recentContent as recentContentType[]} />
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-semibold mb-4 text-gray-600">
            전체 컨텐츠
          </h1>
          <Carousel data={content as contentType[]} trashcan />
        </div>
      </div>
      <div className="col-span-1">
        <PlayList />
      </div>
    </div>
  );
};

export default Home;
