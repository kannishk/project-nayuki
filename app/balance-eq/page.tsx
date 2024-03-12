"use client";
import { useState } from "react";
export default function Balance() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");

  function balance() {
    if (!equation) {
      setEquation("");
      return;
    }
    let temp = equation;
    const divider = temp.indexOf("=");
    const left = temp.substring(0, divider).trim().split("+");
    const right = temp
      .substring(divider + 1)
      .trim()
      .split("+");
  }

  return (
    <div>
      <input
        placeholder="Enter your Equation here...."
        type="text"
        onChange={(e) => {
          setEquation(e.target.value);
        }}
      ></input>
      <div>
        <button onClick={balance}>Balance</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
