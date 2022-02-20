import React, { memo } from "react";

export const SeachResult = memo((props) => {
  const { seachValue, inputToFormflag } = props;
  console.log(seachValue);
  return (
    <>
      {seachValue.Value.length !== 0 && inputToFormflag === true ? (
        seachValue.Value.map((searchResult) => (
          <ul key={searchResult.id}>
            <li>
              {searchResult.title}
              <br />
              {searchResult.post}
            </li>
          </ul>
        ))
      ) : seachValue.Value.length === 0 && inputToFormflag === false ? (
        <p>検索結果がここに表示されます</p>
      ) : (
        <p>検索結果なし</p>
      )}
    </>
  );
});
