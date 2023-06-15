// HTMLと同時にJSを渡す（SSRのこと）のでuse clientの記載が必要になる。
// 挙動は右クリックの「ページのソースを表示」と検証の「ソース」を比べるとわかる。
// ページソースはサーバー側でのソース。検証ソースはクライアントが渡された後のソースになる
// 今回は「ページソース」のソースをコピペをindex.htmlにおいてるよ。

'use client';

import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}