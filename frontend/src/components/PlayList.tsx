import { useRef } from "react";
import { IoClose } from "react-icons/io5";

import Button from "./Button";
import usePlayList from "../hooks/usePlayList";

const PlayList = () => {
  const playList = usePlayList();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-2xl font-semibold">플레이 리스트</h3>
        <Button onClick={() => {}} label="재생" fit />
      </div>
      <div ref={containerRef}>
        {playList.data.map((item, idx) => (
          <div key={item.id} className="flex items-center relative">
            <div className="absolute top-0 right-0 m-2 cursor-pointer">
              <IoClose />
            </div>
            <div className="w-[100px] h-[100px] flex relative">
              <img
                id={`img${idx}`}
                src={item.src}
                alt="Image"
                className="w-full object-cover"
              />
            </div>
            <div className="p-2">
              <div className="grid grid-cols-2 font-semibold text-gray-500">
                <span>Time</span>
                <span>01:30</span>
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <div className="grid grid-cols-2 font-semibold text-gray-500">
                <span>Type</span>
                <span>Video</span>
              </div>
              <div className="grid grid-cols-2 font-semibold text-gray-500">
                <span>Size</span>
                <span>30MB</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlayList;
