import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

import Button from "../components/Button";
import useRemoveList from "../hooks/useRemoveList";
import { removeListType } from "../types/removeListType";

const Remove = () => {
  const navigate = useNavigate();
  const { data: removeList, removeRemoveListMutate } = useRemoveList();
  const [removeListId, setRemoveListId] = useState<string[]>([]);

  const onSubmit = () => {
    if (removeListId.length === 0) {
      return alert("삭제할 대상이 없습니다.");
    }

    if (window.confirm("정말 삭제하시겠습니까?")) {
      removeRemoveListMutate(removeListId);
      setRemoveListId([]);
    }
  };

  return (
    <div className="container max-w-xl mx-auto py-4">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl">휴지통</h1>
        <div className="space-x-1">
          <Button onClick={onSubmit} label="삭제" fit red />
          <Button onClick={() => navigate(-1)} label="돌아가기" fit />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {removeList?.map((item: removeListType) => (
          <div key={item.id} className="flex items-center gap-3">
            <input
              id={item.id}
              type="checkbox"
              onInput={() => setRemoveListId((cur) => [...cur, item.id])}
            />
            <label htmlFor={item.id} className="flex items-center gap-3">
              <div className="w-[80px] h-[80px] flex relative">
                {item.type === "Video" ? (
                  <video
                    src={`${axios.defaults.baseURL}/${item.src}`}
                    autoPlay
                    className="w-full object-cover rounded-lg"
                  ></video>
                ) : (
                  <img
                    src={`${axios.defaults.baseURL}/${item.src}`}
                    alt="Image"
                    className="w-full object-cover rounded-lg"
                  />
                )}
              </div>
              <div>{item.title}</div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Remove;
