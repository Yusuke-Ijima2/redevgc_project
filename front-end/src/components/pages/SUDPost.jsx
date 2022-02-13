import React, { memo, useCallback, useEffect, useState } from "react";
import Modal from "react-modal";
//test

export const SUDPost = memo(() => {
  const [posts, setPosts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [edit, setEdit] = useState("");
  const [keepId, setKeepId] = useState(0);

  //削除
  const onClickDelete = (id) => {
    window.confirm("本当に削除しますか？") &&
      fetch("http://localhost:8080/timeline/post/delete/" + id, {
        method: "DELETE",
      }).then(() => {
        window.location.reload();
      });
  };

  //複製
  const onClickDuplicate = (id) => {
    fetch("http://localhost:8080/timeline/post/get/" + id)
      .then((res) => res.json())
      .then((json) => {
        const data = {
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
  };

  //編集
  //投稿一覧を取ってくる
  useEffect(() => {
    fetch("http://localhost:8080/timeline/post/get")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
      });
  }, []);

  const onClickEdit = useCallback((id) => {
    //モーダルを開く
    setModalIsOpen(true);
    fetch("http://localhost:8080/timeline/post/get/" + id)
      .then((res) => res.json())
      .then((json) => {
        //取ってきた投稿を保持
        setEdit(json.post);
      });
    //クリックした投稿のidを保持
    setKeepId(id);
  }, []);

  //フォームの中を変更できるようにする
  const handleEdit = useCallback((e) => {
    setEdit(e.target.value);
  }, []);

  //更新
  const onClickUpdate = useCallback(() => {
    const data = {
      post: edit,
    };
    //保持したidを使って更新
    fetch("http://localhost:8080/timeline/post/put/" + keepId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      alert("編集完了しました。");
      window.location.reload();
    });
  }, [edit, keepId]);

  return (
    <>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>
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
                <label>投稿</label>
                <input
                  type="text"
                  id="post"
                  name="post"
                  value={edit}
                  onChange={handleEdit}
                />
                <input
                  type="submit"
                  value="送信"
                  onClick={() => onClickUpdate()}
                />
              </div>
            </Modal>
          </li>
        </ul>
      ))}
    </>
  );
});
