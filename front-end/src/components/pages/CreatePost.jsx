import React from "react";
import { useFormik } from "formik";

export const CreatePost = () => {
  const initialPostValue = {
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
    const data = {
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
      window.location.reload();
    });
  };

  //スプレッド構文
  //配列の展開
  const array1 = [1, 2];
  const sum = (a, b) => console.log(a + b);
  sum(...array1); //配列を順番に処理
  //結果:3

  //配列のコピー、結合
  const array2 = [1, 2];
  const array3 = [3, 4];
  const array4 = [...array2, ...array3];
  console.log(array4);
  //結果:[1, 2, 3, 4]

  //map
  //returnされた結果によって新しい配列を生成
  const nameArray = ["鈴木", "佐藤", "田中"];
  const nameArray2 = nameArray.map((name) => {
    return name;
  });
  console.log(nameArray2);
  //結果: ['鈴木', '佐藤', '田中']

  //配列をループして処理をする
  nameArray.map((name, index) =>
    console.log(`${index + 1}番目は${name}です。`)
  );
  //結果:
  // 1番目は鈴木です。
  // 2番目は佐藤です。
  // 3番目は田中です。

  nameArray.map((name) => console.log(name)); //第２引数を使わない場合は省略可能
  //結果:
  // 鈴木です。
  // 佐藤です。
  // 田中です。

  //filter
  const numArray = [1, 2, 3];
  const numArray2 = numArray.filter((num) => {
    return num % 2 === 1; //奇数だけ取り出す
  });
  console.log(numArray2);
  //結果:[1, 3]

  //論理演算子
  //||は左側がfalseなら左側を返す
  const name = null;
  const nameShow = name || "名前を入れてください";
  console.log(nameShow);
  //結果:名前を入れてください

  //&&は左側がtrueなら左側を返す
  //&の名前は「アンパーサンド」
  const name2 = null;
  const name2Show = name2 && "名前を入れてください";
  console.log(name2Show);
  //結果:null

  //!は否定
  const name3 = true;
  console.log(!name3);
  //結果:false

  return (
    <>
      <div>
        <label>投稿</label>
        <input
          type="text"
          id="post"
          name="post"
          value={newPostData.post}
          onChange={handleChange}
        />
        <input type="submit" value="送信" onClick={() => onFinish()} />
      </div>
    </>
  );
};
