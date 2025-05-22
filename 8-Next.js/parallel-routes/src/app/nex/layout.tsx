// app/nex/layout.tsx
export default function NexLayout({
  sidebar,
  bar,
  main,
}: {
  sidebar: React.ReactNode;
  bar: React.ReactNode;
  main: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside style={{ width: "250px", background: "#f4f4f4", padding: "1rem" }}>
        {sidebar}
      </aside>
      <aside style={{ width: "250px", background: "orange", padding: "1rem" }}>
        {bar}
      </aside>
      <main style={{ flex: 1, padding: "1rem" }}>
        {main}
      </main>
    </div>
  );
}
