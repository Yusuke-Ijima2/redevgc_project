import React from "react";
import { useFormik } from "formik";

import { useHistory } from "react-router-dom";
import { usePostCreate } from "../../hooks/usePostCreate";

export const CreatePost = () => {
  const { CreatePost } = usePostCreate();
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
    CreatePost(newPostData);
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
