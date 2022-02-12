import React from "react";
import { useFormik } from "formik";

export const CreatePost = () => {
  const initialPostValue = {
    post: "",
  };

  const {
    values: newPostData,
    handleSubmit: onFinish,
    handleChange,
  } = useFormik({
    initialValues: initialPostValue,

    onSubmit: () => {
      saveDate();
    },
  });

  const saveDate = () => {
    const data = {
      post: newPostData.post,
    };
    fetch("http://localhost:8080/timeline/post/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      alert("保存完了しました。");
      window.location.reload();
    });
  };

  return (
    <>
      <div>
        <label>投稿</label>
        <input
          type="text"
          id="post"
          name="post"
          value={newPostData.post}
          onChange={handleChange}
        />
        <input type="submit" value="送信" onClick={() => onFinish()} />
      </div>
    </>
  );
};
