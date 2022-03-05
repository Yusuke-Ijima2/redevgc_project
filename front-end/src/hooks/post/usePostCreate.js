export const usePostCreate = () => {
  const CreatePost = (newPostData) => {
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
      window.location = "/";
    });
  };
  return { CreatePost };
};
