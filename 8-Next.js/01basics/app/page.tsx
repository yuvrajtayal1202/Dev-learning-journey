import Hello from "@/app/components/hello";

export default function Home() {
  console.log("Hello I am from Next.js")  // Server component
  return (
    <>
    <Hello/>
   <h1 className="text-5xl">Welcome</h1>
    </>
  );
}
