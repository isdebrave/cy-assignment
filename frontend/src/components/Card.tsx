import { IoTrashOutline } from "react-icons/io5";

import Button from "./Button";

interface Props {
  title: string;
  trashcan?: boolean;
}

const Card: React.FC<Props> = ({ title, trashcan }) => {
  return (
    <div className="shadow-lg rounded-lg min-w-[200px]">
      <div className="w-full h-[130px] flex relative">
        {trashcan && (
          <button className="absolute right-0 top-0 m-1 p-1 bg-white rounded-lg">
            <IoTrashOutline />
          </button>
        )}
        <img
          src="https://source.unsplash.com/random"
          alt="Image"
          className="w-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-2">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <div className="grid grid-cols-2 mb-1 font-semibold text-gray-500">
          <span>Type</span>
          <span>Video</span>
        </div>
        <div className="grid grid-cols-2 mb-1 font-semibold text-gray-500">
          <span>Size</span>
          <span>30MB</span>
        </div>
        <div className="grid grid-cols-2 mb-3 font-semibold text-gray-500">
          <span>Time</span>
          <span>01:30</span>
        </div>
        <Button onClick={() => {}} label="추가하기" />
      </div>
    </div>
  );
};

export default Card;
