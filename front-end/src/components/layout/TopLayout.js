import { useHistory } from "react-router-dom";

import { SUDPost } from "../pages/SUDPost";

export const TopLayout = () => {
  const history = useHistory();
  const onClickGoToCreatePostForm = () => {
    history.push("/timeline/create");
  };
  const onClickGoToSeachForm = () => {
    history.push("/timeline/seach");
  };

  return (
    <>
      <button onClick={() => onClickGoToCreatePostForm()}>投稿する</button>
      <button onClick={() => onClickGoToSeachForm()}>検索</button>
      <SUDPost />
    </>
  );
};
