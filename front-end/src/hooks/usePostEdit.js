import { useCallback, useState } from "react";

export const usePostEdit = () => {
  const [edit, setEdit] = useState({ title: "", post: "" });

  //投稿データを取ってくる
  const getPost = useCallback((id) => {
    fetch("http://localhost:8080/timeline/post/get/" + id)
      .then((res) => res.json())
      .then((json) => {
        setEdit(json);
      });
  }, []);

  //フォームの中を変更できるようにする
  const handleEdit = useCallback(
    (e) => {
      const { name, value } = e.target;
      setEdit({ ...edit, [name]: value });
    },
    [edit]
  );

  //投稿を更新
  const updatePost = useCallback(
    (id) => {
      const data = {
        title: edit.title,
        post: edit.post,
      };
      fetch("http://localhost:8080/timeline/post/put/" + id, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        alert("編集完了しました。");
        window.location = "/";
      });
    },
    [edit]
  );

  return { edit, getPost, handleEdit, updatePost };
};
