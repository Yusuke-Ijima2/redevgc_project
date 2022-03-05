import { useCallback } from "react";

export const usePostDelete = () => {
  const deletePost = useCallback((id) => {
    fetch("http://localhost:8080/timeline/post/delete/" + id, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  }, []);
  return { deletePost };
};
