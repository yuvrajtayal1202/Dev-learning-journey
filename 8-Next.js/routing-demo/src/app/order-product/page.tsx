'use client';
import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleClick = () => {
    console.log("placing yuyu order");
    router.push('/');
  };

  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
}