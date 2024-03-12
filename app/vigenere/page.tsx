"use client";
import { useState } from "react";
export default function Vigenere() {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");

  function encrypt() {
    let ans = "";
    const arr = text.split(" ");
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
      const word = arr[i];
      const temp = word
        .split("")
        .map((char) => {
          if (char.match(/[A-Z]/)) {
            return String.fromCharCode(
              char.charCodeAt(0) -
                65 +
                ((key.charCodeAt(j++ % key.length) - 65) % 26) +
                65
            );
          } else {
            return char;
          }
        })
        .join("");

      ans += temp + " ";
    }
    setResult(ans);
  }

  function decrypt() {
    let ans = "";
    let j = 0;
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      const word = arr[i].split("");

      const temp = word
        .map((char) => {
          if (char.match(/[A-Z]/)) {
            return String.fromCharCode(
              ((char.charCodeAt(0) - key.charCodeAt(j++ % key.length) + 26) %
                26) +
                65
            );
          } else {
            return char;
          }
        })
        .join("");

      ans += temp + " ";
    }
    setResult(ans);
  }
  return (
    <div>
      <textarea
        placeholder="Enter text..."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div>
        Key:
        <input
          type="text"
          onChange={(e) => {
            setKey(e.target.value);
          }}
        ></input>
      </div>
      <button onClick={encrypt}>Encrypt</button>
      <button onClick={decrypt}>Decrypt</button>

      <div>Result: {result}</div>
    </div>
  );
}
