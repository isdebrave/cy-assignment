import { Link } from "react-router-dom";

const Navbar = () => {
  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };

  return (
    <div className="grid grid-cols-4 items-center">
      <div className="col-span-2 flex items-center gap-20">
        <Link to="/" className="text-5xl">
          CYCLOID
        </Link>
        <Link to="/remove">삭제 리스트</Link>
      </div>
      <div className="col-span-2 text-end">
        <form encType="multipart/form-data">
          <input
            id="media"
            name="media"
            type="file"
            hidden
            multiple
            accept="image/*"
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
