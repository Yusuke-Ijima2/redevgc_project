import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Modal from "react-modal";

export const ShowDeleatePost = () => {
  const [posts, setPosts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [edit, setEdit] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/timeline/post/get")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
      });
  }, []);

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
          // alert("複製完了しました。");
          window.location.reload();
        });
      });
  };

  const onClickDelete = (id) => {
    fetch("http://localhost:8080/timeline/post/delete/" + id, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  };

  //編集
  const onClickEdit = (id) => {
    setModalIsOpen(true);
    fetch("http://localhost:8080/timeline/post/get/" + id)
      .then((res) => res.json())
      .then((json) => {
        setEdit(json);
      });
  };

  const handleEdit = (e) => {
    setEdit(e.target.value);
  };

  const onClickUpdate = (id) => {
    console.log(id);
    console.log(edit);
    const data = {
      post: edit,
    };
    console.log(data);
    fetch("http://localhost:8080/timeline/post/put/" + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      alert("編集完了しました。");
      // window.location.reload();
    });
  };

  return (
    <>
      {posts.map((post) => (
        //コンポーネント化予定
        <ul key={post.id}>
          <li>
            <p>{post.post}</p>
            <input
              type="submit"
              value="複製"
              onClick={() => onClickDuplicate(post.id)}
            />
            <input
              type="submit"
              value="削除"
              onClick={() => onClickDelete(post.id)}
            />
            <input
              type="submit"
              value="編集"
              onClick={() => onClickEdit(post.id)}
            />
            <Modal isOpen={modalIsOpen}>
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
                  value={edit.post}
                  onChange={handleEdit}
                />
                <input
                  type="submit"
                  value="送信"
                  onClick={() => onClickUpdate(post.id)}
                />
              </div>
            </Modal>
            {/* {edit.id === post.id ? (
              <>
                <input
                  type="text"
                  value={edit.post}
                  onChange={onChangeEditForm}
                />
                <input type="submit" value="完了" onClick={() => saveDate()} />
              </>
            ) : null} */}
          </li>
        </ul>
      ))}
    </>
  );
};
