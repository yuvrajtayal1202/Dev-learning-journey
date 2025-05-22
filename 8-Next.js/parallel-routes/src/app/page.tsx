// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🏠 Welcome to the Home Page</h1>
      <p>This is your landing page.</p>
      <Link href="/nex">
        <button style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
          Go to Parallel Routes ➡️
        </button>
      </Link>
    </main>
  );
}
