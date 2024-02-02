import { create } from "zustand";

interface dataType {
  id: string;
  title: string;
  src: string;
}

interface postsStore {
  data: dataType[];
}

const usePlayList = create<postsStore>(() => ({
  data: [
    { id: "1", title: "이미지1", src: "https://source.unsplash.com/random" },
    { id: "2", title: "이미지2", src: "https://picsum.photos/100" },
    { id: "3", title: "이미지3", src: "https://source.unsplash.com/random" },
    { id: "4", title: "이미지4", src: "https://source.unsplash.com/random" },
    { id: "5", title: "이미지5", src: "https://source.unsplash.com/random" },
    { id: "6", title: "이미지6", src: "https://source.unsplash.com/random" },
    { id: "7", title: "이미지7", src: "https://source.unsplash.com/random" },
    { id: "8", title: "이미지8", src: "https://source.unsplash.com/random" },
    { id: "9", title: "이미지9", src: "https://source.unsplash.com/random" },
    { id: "10", title: "이미지10", src: "https://source.unsplash.com/random" },
  ],
}));

export default usePlayList;
