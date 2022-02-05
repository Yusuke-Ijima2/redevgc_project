import React, { useEffect, useState } from "react";

export const ShowPost = () => {
  const [posts, setPosts] = useState([]);

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

  // const onClickDelete = (id) => {
  //   window.confirm("本当に削除しますか？") === true
  //     ? fetch("http://localhost:8080/timeline/post/delete/" + id, {
  //         method: "DELETE",
  //       }).then(() => {
  //         window.location.reload();
  //       })
  //     : alert("キャンセルしました。");
  // };

  return (
    <>
      {posts.map((post) => (
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
          </li>
        </ul>
      ))}
    </>
  );
};
