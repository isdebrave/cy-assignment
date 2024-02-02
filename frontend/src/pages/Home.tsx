import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import PlayList from "../components/PlayList";

const Home = () => {
  return (
    <div className="grid grid-cols-4 p-6 gap-24">
      <div className="col-span-3">
        <Navbar />
        <div className="mt-10">
          <h1 className="text-3xl font-semibold mb-4 text-gray-600">
            최근 재생된 컨텐츠
          </h1>
          <Carousel />
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-semibold mb-4 text-gray-600">
            전체 컨텐츠
          </h1>
          <Carousel trashcan />
        </div>
      </div>
      <div className="col-span-1">
        <PlayList />
      </div>
    </div>
  );
};

export default Home;
