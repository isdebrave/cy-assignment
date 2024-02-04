import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";

import Button from "./Button";
import { contentType } from "../types/contentType";
import { recentContentType } from "../types/recentContentType";
import usePlayList from "../hooks/usePlayList";
import useRemoveList from "../hooks/useRemoveList";

interface Props {
  disabled: boolean;
  item: contentType | recentContentType;
  trashcan?: boolean;
}

const Card: React.FC<Props> = ({ disabled, item, trashcan }) => {
  const { postPlayListMutate } = usePlayList();
  const { postRemoveListMutate } = useRemoveList();

  return (
    <div className="shadow-lg rounded-lg min-w-[200px]">
      <div className="w-full h-[130px] flex relative">
        {trashcan && (
          <button
            onClick={() => postRemoveListMutate(item.id)}
            className="z-10 absolute right-0 top-0 m-1 p-1 bg-white rounded-lg"
          >
            <IoTrashOutline />
          </button>
        )}
        {item.type === "Video" ? (
          <video
            src={`${axios.defaults.baseURL}/${item.src}`}
            autoPlay
            muted
            className="w-full object-cover rounded-t-lg"
          ></video>
        ) : (
          <img
            src={`${axios.defaults.baseURL}/${item.src}`}
            alt="Image"
            className="w-full object-cover rounded-t-lg"
          />
        )}
      </div>
      <div className="p-2 overflow-hidden">
        <h3 className="text-xl font-bold mb-1">
          {item.title.length > 10
            ? item.title.slice(0, 10) + "..."
            : item.title}
        </h3>
        <div className="grid grid-cols-2 mb-1 font-semibold text-gray-500">
          <span>Type</span>
          <span>{item.type}</span>
        </div>
        <div className="grid grid-cols-2 mb-1 font-semibold text-gray-500">
          <span>Size</span>
          <span>{item.size}</span>
        </div>
        <div className="grid grid-cols-2 mb-3 font-semibold text-gray-500">
          <span>Time</span>
          <span>{item.time}</span>
        </div>
        <Button
          disabled={disabled}
          onClick={() => postPlayListMutate(item.id)}
          label={disabled ? "추가됨" : "추가하기"}
        />
      </div>
    </div>
  );
};

export default Card;
