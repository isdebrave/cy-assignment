import { useRef, useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import Card from "./Card";

const data = [
  { id: "1", title: "이미지1" },
  { id: "2", title: "이미지2" },
  { id: "3", title: "이미지3" },
  { id: "4", title: "이미지4" },
  { id: "5", title: "이미지5" },
  { id: "6", title: "이미지6" },
  { id: "7", title: "이미지7" },
  { id: "8", title: "이미지8" },
  { id: "9", title: "이미지9" },
  { id: "10", title: "이미지10" },
  { id: "11", title: "이미지11" },
  { id: "12", title: "이미지12" },
  { id: "13", title: "이미지13" },
];

interface Props {
  trashcan?: boolean;
}

const Carousel: React.FC<Props> = ({ trashcan }) => {
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
            <Card key={item.id} title={item.title} trashcan={trashcan} />
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
