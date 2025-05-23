import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>F1 page</h1>
      <div>
        <Link href="/f1/f2">F2</Link>
      </div>
    </>
  );
}
