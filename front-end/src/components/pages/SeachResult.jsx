import React, { memo, useState } from "react";
import Modal from "react-modal";

import { usePostDelete } from "../../hooks/post/usePostDelete";
import { usePostDuplicate } from "../../hooks/post/usePostDuplicate";
import { usePostEdit } from "../../hooks/post/usePostEdit";

export const SeachResult = memo((props) => {
  const { seachValue, inputToFormflag } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { deletePost } = usePostDelete();
  const { duplicatePost } = usePostDuplicate();
  const { edit, getPost, handleEdit, updatePost } = usePostEdit();

  //削除
  const onClickDelete = (id) => deletePost(id);
  //複製
  const onClickDuplicate = (id) => duplicatePost(id);
  //編集
  const onClickModalIsOpen = (id) => {
    setModalIsOpen(true);
    getPost(id);
  };
  const handleEditChange = (id) => handleEdit(id);
  const onClickUpdate = (id) => updatePost(id);

  return (
    <>
      {seachValue.message ? (
        <p>入力してください</p>
      ) : seachValue.length !== 0 && inputToFormflag === true ? (
        seachValue.map((searchResult) => (
          <ul key={searchResult.id}>
            <li>
              {searchResult.title}
              <br />
              {searchResult.post}
              <input
                type="submit"
                value="削除"
                onClick={() => onClickDelete(searchResult.id)}
              />
              <input
                type="submit"
                value="複製"
                onClick={() => onClickDuplicate(searchResult.id)}
              />
              <input
                type="submit"
                value="編集"
                onClick={() => onClickModalIsOpen(searchResult.id)}
              />
              <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                <input
                  type="submit"
                  value="閉じる"
                  onClick={() => setModalIsOpen(false)}
                />
                <div>
                  <div>
                    <label>タイトル</label>
                  </div>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={edit.title}
                    onChange={handleEditChange}
                  />
                  <div>
                    <label>投稿</label>
                  </div>
                  <input
                    type="text"
                    id="post"
                    name="post"
                    value={edit.post}
                    onChange={handleEditChange}
                  />
                </div>
                <input
                  type="submit"
                  value="送信"
                  onClick={() => onClickUpdate(edit.id)}
                />
              </Modal>
            </li>
          </ul>
        ))
      ) : seachValue.length === 0 && inputToFormflag === false ? (
        <p>検索結果がここに表示されます</p>
      ) : (
        <p>検索結果なし</p>
      )}
    </>
  );
});
