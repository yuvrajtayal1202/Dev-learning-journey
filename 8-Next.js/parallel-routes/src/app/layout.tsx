// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: "Next.js Parallel Routes Demo",
  description: "Understanding parallel routing in Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <header style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
          <nav>
            <Link href="/" style={{ marginRight: "1rem", color: "#fff" }}>
              Home
            </Link>
            <Link href="/nex" style={{ color: "#fff" }}>
              Nex Parallel Route
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{ padding: "1rem", backgroundColor: "#eee", textAlign: "center" }}>
          © 2025 Next.js Demo
        </footer>
      </body>
    </html>
  );
}
