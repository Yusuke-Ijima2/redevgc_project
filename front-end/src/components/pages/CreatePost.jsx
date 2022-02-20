import React from "react";
import { useFormik } from "formik";

import { useHistory } from "react-router-dom";

export const CreatePost = () => {
  const initialPostValue = {
    title: "",
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
      title: newPostData.title,
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

  const history = useHistory();
  const onClickbackToPage = () => {
    history.goBack();
  };

  return (
    <>
      <button onClick={() => onClickbackToPage()}>戻る</button>
      <br />
      <h3>投稿作成</h3>
      <div>
        <label>タイトル</label>
        <div>
          <input
            type="text"
            id="title"
            name="title"
            value={newPostData.title}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label>投稿</label>
        <div>
          <input
            type="text"
            id="post"
            name="post"
            value={newPostData.post}
            onChange={handleChange}
          />
        </div>
      </div>
      <input type="submit" value="送信" onClick={() => onFinish()} />
    </>
  );
};
