import { useCallback } from "react";

export const usePostDuplicate = () => {
  const duplicatePost = useCallback((id) => {
    fetch("http://localhost:8080/timeline/post/get/" + id)
      .then((res) => res.json())
      .then((json) => {
        const data = {
          title: json.title,
          post: json.post,
        };
        fetch("http://localhost:8080/timeline/post/post", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then(() => {
          alert("複製完了しました。");
          window.location.reload();
        });
      });
  }, []);
  return { duplicatePost };
};
