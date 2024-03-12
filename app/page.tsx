import Link from "next/link";

export default function Home() {
  return (
    <ol>
      <li>
        <Link href="/caeser">Caeser Cipher</Link>
      </li>
      <li>
        <Link href="/primefactor">Prime Factors</Link>
      </li>
      <li>
        <Link href="/vigenere">Vigenere Cipher</Link>
      </li>
      <li>
        <Link href="/balance-eq">Balance Equations</Link>
      </li>
    </ol>
  );
}
