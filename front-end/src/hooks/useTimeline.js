import { useState } from "react";

export const useTimeline = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    //投稿一覧を取ってくる
    fetch("http://localhost:8080/timeline/post/get")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
      });
  };
  return { posts, getPosts };
};
