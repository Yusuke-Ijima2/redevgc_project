import React, { memo, useState } from "react";
import { useHistory } from "react-router-dom";

import { SeachResult } from "./SeachResult";

export const SeachForm = memo(() => {
  const [seachValue, setSeachValue] = useState({
    Value: [],
  });
  const [formValue, setFormValue] = useState("");
  const [inputToFormflag, setInputToFormflag] = useState(false);

  const onClickSeach = () => {
    //ユーザーが検索をしたかどうかのフラグ
    setInputToFormflag(true);
    fetch("http://localhost:8080/timeline/seach/" + formValue)
      .then((res) => res.json())
      .then((json) => {
        setSeachValue(json);
      });
  };

  const history = useHistory();
  const onClickbackToPage = () => {
    history.goBack();
  };

  const onChangeSeachValue = (e) => setFormValue(e.target.value);

  return (
    <>
      <div>
        <button onClick={() => onClickbackToPage()}>戻る</button>
        <h3>検索</h3>
        <input type="text" value={formValue} onChange={onChangeSeachValue} />
        <input type="submit" value="検索" onClick={() => onClickSeach()} />
      </div>
      <SeachResult seachValue={seachValue} inputToFormflag={inputToFormflag} />
    </>
  );
});
