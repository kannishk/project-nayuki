"use client";
import { useState, useEffect } from "react";
export default function Prime() {
  const [first, setNumber] = useState(0);
  const [factor, setFactor] = useState("");
  const [unique, setUnique] = useState("");
  const [second, setSecond] = useState(0);
  const [gcd, setGcd] = useState("");

  const calculateGcd = (a: number, b: number): number =>
    b === 0 ? a : calculateGcd(b, a % b);

  useEffect(() => {
    if (!first) {
      setFactor("");
      setUnique("");
      return;
    }
    if (first === 1 || first === 2) {
      setFactor("Number should be>2");
      setUnique("");
      return;
    }
    let uniqueSet = new Set();
    let temp = first;
    let ans = "";
    let divisor = "";
    let i = 2;
    while (i <= temp) {
      if (temp % i == 0) {
        uniqueSet.add(i);
        ans += i + " ";
        temp = temp / i;
      } else {
        i++;
      }
    }
    uniqueSet.forEach((value) => {
      divisor += value + " ";
    });
    setUnique(divisor);
    setFactor(ans);
  }, [first]);

  useEffect(() => {
    const calculateGcd = (a: number, b: number): number =>
      b === 0 ? a : calculateGcd(b, a % b);

    if (!second) {
      setGcd("");
      return;
    }
    if (!first) {
      setGcd("Enter first number as well");
      return;
    }
    const ans = calculateGcd(first, second);
    setGcd(String(ans));
  }, [second, first]);

  return (
    <div>
      <input
        type="number"
        placeholder="Enter Number"
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      ></input>

      <div>Factors: {factor}</div>
      <div>Divisors: {unique}</div>
      <div>
        <h3>
          If you want to know the GCD of a number <br />
          with respect to above, <br />
          enter here:
        </h3>
        <input
          type="number"
          placeholder="Enter Number"
          onChange={(e) => {
            setSecond(parseInt(e.target.value));
          }}
        ></input>
      </div>
      <div>Greatest Common Divisor: {gcd}</div>
    </div>
  );
}
//calculate gcd
