import React, { memo, useCallback, useEffect, useState } from "react";
import Modal from "react-modal";

import { usePostAllGet } from "../../hooks/usePostAllGet";
import { usePostDelete } from "../../hooks/usePostDelete";
import { usePostDuplicate } from "../../hooks/usePostDuplicate";
import { usePostEdit } from "../../hooks/usePostEdit";

export const SUDPost = memo(() => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { posts } = usePostAllGet();
  const { deletePost } = usePostDelete();
  const { duplicatePost } = usePostDuplicate();
  const { edit, getPost, handleEdit, updatePost } = usePostEdit();

  //削除
  const onClickDelete = (id) => deletePost(id);
  //複製
  const onClickDuplicate = (id) => duplicatePost(id);
  //編集
  const onClickEdit = (id) => {
    setModalIsOpen(true);
    getPost(id);
  };
  const onClickUpdate = (id) => {
    updatePost(id);
  };

  return (
    <>
      <h3>投稿一覧</h3>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>
            <p>{post.title}</p>
            <p>{post.post}</p>
            <input
              type="submit"
              value="削除"
              onClick={() => onClickDelete(post.id)}
            />
            <input
              type="submit"
              value="複製"
              onClick={() => onClickDuplicate(post.id)}
            />
            <input
              type="submit"
              value="編集"
              onClick={() => onClickEdit(post.id)}
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
                  onChange={handleEdit}
                />
                <div>
                  <label>投稿</label>
                </div>
                <input
                  type="text"
                  id="post"
                  name="post"
                  value={edit.post}
                  onChange={handleEdit}
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
      ))}
    </>
  );
});
