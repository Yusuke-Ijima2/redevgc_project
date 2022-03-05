import { useEffect, useState } from "react";

export const usePostAllGet = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //投稿一覧を取ってくる
    fetch("http://localhost:8080/timeline/post/get")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
      });
  }, []);
  return { posts };
};
