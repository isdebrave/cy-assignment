import { useRef, useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import Card from "./Card";
import { contentType } from "../types/contentType";
import { recentContentType } from "../types/recentContentType";
import { playListType } from "../types/playListType";
import usePlayList from "../hooks/usePlayList";

interface Props {
  data: contentType[] | recentContentType[];
  trashcan?: boolean;
}

const Carousel: React.FC<Props> = ({ data, trashcan }) => {
  const { data: playList = [] } = usePlayList();
  const [offset, setOffset] = useState(0);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const prevHandler = () => {
    if (offset - 300 > 0) {
      setOffset((cur) => cur - 300);
      setHasPrevPage(true);
      setHasNextPage(true);
    } else {
      setOffset((cur) => cur - offset);
      setHasPrevPage(false);
    }
  };

  const nextHandler = () => {
    const scrollWidth = ref.current?.scrollWidth; // 전체 길이
    const clientWidth = ref.current?.clientWidth; // 보이는 길이

    if (!scrollWidth || !clientWidth) return;

    if (offset + clientWidth + 300 < scrollWidth) {
      setOffset((cur) => cur + 300);
      setHasNextPage(true);
      setHasPrevPage(true);
    } else {
      setOffset((cur) => cur + (scrollWidth - (offset + clientWidth)));
      setHasNextPage(false);
    }
  };

  return (
    <div className="flex">
      <div className="mr-3">
        <button
          disabled={!hasPrevPage}
          onClick={prevHandler}
          className="relative top-1/2 -translate-y-1/2"
        >
          <IoArrowBack
            size={20}
            className={`${!hasPrevPage && "text-gray-300"}`}
          />
        </button>
      </div>
      <div className="relative overflow-hidden">
        <div
          ref={ref}
          className={"flex items-center gap-5 transition"}
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {data.map((item) => (
            <div key={item.id + Math.random()} className="mb-4">
              <Card
                disabled={
                  !!playList.find((v: playListType) => v.id === item.id)
                }
                item={item}
                trashcan={trashcan}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="ml-3">
        <button
          disabled={!hasNextPage}
          onClick={nextHandler}
          className="relative top-1/2 -translate-y-1/2"
        >
          <IoArrowForward
            size={20}
            className={`${!hasNextPage && "text-gray-300"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
