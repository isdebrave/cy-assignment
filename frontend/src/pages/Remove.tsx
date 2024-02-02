import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router";

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

const Remove = () => {
  const navigate = useNavigate();
  const [removeListId, setRemoveListId] = useState<string[]>([]);

  const onSubmit = () => {
    if (removeListId.length === 0) {
      return alert("삭제할 대상이 없습니다.");
    }

    if (window.confirm("정말 삭제하시겠습니까?")) {
      console.log(removeListId);
    }
  };

  return (
    <div className="container max-w-xl mx-auto py-4 space-y-3">
      <div className="flex justify-between">
        <h1 className="text-3xl">휴지통</h1>
        <div className="space-x-1">
          <Button onClick={onSubmit} label="삭제" fit red />
          <Button onClick={() => navigate(-1)} label="돌아가기" fit />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <input
              id={item.id}
              type="checkbox"
              onInput={() => setRemoveListId((cur) => [...cur, item.id])}
            />
            <label htmlFor={item.id} className="flex items-center gap-3">
              <div className="w-[80px] h-[80px] flex relative">
                <img
                  src="https://source.unsplash.com/random"
                  alt="Image"
                  className="w-full object-cover rounded-lg"
                />
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
