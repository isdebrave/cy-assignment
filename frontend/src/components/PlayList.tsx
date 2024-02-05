import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

import Button from "./Button";
import usePlayList from "../hooks/usePlayList";
import { playListType } from "../types/playListType";

const PlayList = () => {
  const { data: playList, removePlayListMutate } = usePlayList();
  const containerRef = useRef<HTMLDivElement>(null);
  const icons = containerRef.current?.querySelectorAll(".icon") ?? [];
  const medias = containerRef.current?.querySelectorAll(".media") ?? [];
  const infos = containerRef.current?.querySelectorAll(".info") ?? [];
  const [key, setKey] = useState(-1);

  const showSlides = (curIndex: number) => {
    const prevIndex = curIndex - 1 < 0 ? medias.length - 1 : curIndex - 1;
    const prevMediaDiv = medias[prevIndex] as HTMLDivElement;
    const curMediaDiv = medias[curIndex] as HTMLDivElement;

    prevMediaDiv.style.display = "none";
    curMediaDiv.style.display = "block";

    const id = setTimeout(
      () => showSlides((curIndex + 1) % medias.length),
      10000
    );
    setKey(id);
  };

  const slideHandler = () => {
    for (let i = 0; i < medias.length; i++) {
      const iconDiv = icons[i] as HTMLDivElement;
      iconDiv.style.display = "none";

      const mediaDiv = medias[i] as HTMLDivElement;
      mediaDiv.style.display = "none";
      mediaDiv.style.position = "fixed";
      mediaDiv.style.top = "50%";
      mediaDiv.style.left = "50%";
      mediaDiv.style.transform = "translate(-50%, -50%)";
      mediaDiv.style.width = "initial";
      mediaDiv.style.height = "initial";
      mediaDiv.style.objectFit = "contain";

      const infoDiv = infos[i] as HTMLDivElement;
      infoDiv.style.display = "none";
    }

    containerRef.current?.requestFullscreen();

    showSlides(0);
  };

  useEffect(() => {
    const screenHandler = () => {
      if (!document.fullscreenElement) {
        clearTimeout(key);

        for (let i = 0; i < medias.length; i++) {
          const iconDiv = icons[i] as HTMLDivElement;
          iconDiv.removeAttribute("style");

          const mediaDiv = medias[i] as HTMLDivElement;
          mediaDiv.removeAttribute("style");

          const infoDiv = infos[i] as HTMLDivElement;
          infoDiv.removeAttribute("style");
        }
      }
    };

    document.addEventListener("fullscreenchange", screenHandler);

    () => document.removeEventListener("fullscreenchange", screenHandler);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-2xl font-semibold">플레이 리스트</h3>
        <Button onClick={slideHandler} label="재생" fit />
      </div>
      <div ref={containerRef}>
        {playList?.map((item: playListType) => (
          <div key={item.id} className="flex items-center relative">
            <div
              onClick={() => removePlayListMutate(item.id)}
              className="icon absolute top-0 right-0 m-2 cursor-pointer"
            >
              <IoClose />
            </div>
            <div className="media max-w-full max-h-full w-[100px] h-[100px] flex relative">
              {item.type === "Video" ? (
                <video
                  src={`${axios.defaults.baseURL}/${item.src}`}
                  autoPlay
                  muted
                  className="w-full object-cover"
                ></video>
              ) : (
                <img
                  src={`${axios.defaults.baseURL}/${item.src}`}
                  alt="Image"
                  className="w-full object-cover"
                />
              )}
            </div>
            <div className="info p-2">
              <div className="grid grid-cols-2 font-semibold text-gray-500">
                <span>Time</span>
                <span>{item.time}</span>
              </div>
              <h3 className="text-xl font-bold">
                {item.title.length > 10
                  ? item.title.slice(0, 10) + "..."
                  : item.title}
              </h3>
              <div className="grid grid-cols-2 font-semibold text-gray-500">
                <span>Type</span>
                <span>{item.type}</span>
              </div>
              <div className="grid grid-cols-2 font-semibold text-gray-500">
                <span>Size</span>
                <span>{item.size}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlayList;
