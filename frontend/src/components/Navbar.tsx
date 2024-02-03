import axios from "axios";
import { Link } from "react-router-dom";

import useMedia from "../hooks/useMedia";

const Navbar = () => {
  const { postPlayListMutate } = useMedia();

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB;

    const formData = new FormData();
    for (const file of e.target.files!) {
      if (file.size > MAX_FILE_SIZE) {
        return alert("파일 각각의 최대 용량은 1MB입니다");
      }

      formData.append("media", file);
    }

    postPlayListMutate(formData);
  };

  return (
    <div className="grid grid-cols-4 items-center">
      <div className="col-span-2 flex items-center gap-20">
        <Link to="/" className="text-5xl">
          CYCLOID
        </Link>
        <Link to="/remove">삭제 리스트</Link>
        <Link to={`${axios.defaults.baseURL}/auth/logout`}>로그아웃</Link>
      </div>
      <div className="col-span-2 text-end">
        <form encType="multipart/form-data">
          <input
            id="media"
            name="media"
            type="file"
            hidden
            multiple
            accept="image/*, video/*"
            onChange={onSubmit}
          />
          <label
            htmlFor="media"
            className="bg-sky-500 text-white p-2 rounded-lg cursor-pointer"
          >
            이미지 영상 업로드
          </label>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
