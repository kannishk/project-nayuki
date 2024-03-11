"use client";
import { useState } from "react";
export default function Caeser() {
  const [shift, setShift] = useState(13);
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  function encrypt() {
    let ans = "";
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      let temp = words[i];
      const arr = temp.split("");
      const newArr = arr.map((a) => {
        let charCode = a.charCodeAt(0);

        if (a.match(/[A-Z]/)) {
          charCode = ((charCode - 65 + shift) % 26) + 65;
        } else if (a.match(/[a-z]/)) {
          charCode = ((charCode - 97 + shift) % 26) + 97;
        }

        return String.fromCharCode(charCode);
      });
      const newWord = newArr.join("");
      ans += newWord + " ";
    }
    setResult(ans);
  }

  function decrypt() {
    let ans = "";
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      let temp = words[i];
      const arr = temp.split("");
      const newArr = arr.map((a) => {
        let charCode = a.charCodeAt(0);

        if (a.match(/[A-Z]/)) {
          charCode = ((charCode - 65 - shift) % 26) + 65;
        } else if (a.match(/[a-z]/)) {
          charCode = ((charCode - 97 - shift) % 26) + 97;
        }

        return String.fromCharCode(charCode);
      });
      const newWord = newArr.join("");
      ans += newWord + " ";
    }
    setResult(ans);
  }

  return (
    <div>
      <h1>Caeser Cipher</h1>
      <div>
        <label>
          Text:
          <textarea
            placeholder="Enter...."
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </label>
      </div>
      <div>
        <label>
          Shift:
          <input
            type="number"
            value={shift}
            onChange={(e) => {
              if (
                parseInt(e.target.value) >= 0 &&
                parseInt(e.target.value) <= 25
              ) {
                setShift(parseInt(e.target.value));
              } else {
                alert("Out of Range!");
              }
            }}
          ></input>
        </label>
      </div>
      <div>
        <label>
          Result:
          <div>{result}</div>
        </label>
      </div>
      <div>
        <button onClick={encrypt}>Encrypt</button>
        <button onClick={decrypt}>Decrypt</button>
      </div>
    </div>
  );
}
