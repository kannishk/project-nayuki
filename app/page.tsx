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
    </ol>
  );
}
