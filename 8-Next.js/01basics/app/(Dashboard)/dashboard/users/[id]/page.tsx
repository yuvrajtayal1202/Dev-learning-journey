import React from "react";
import Link from "next/link";

const page = ({ params }: { params: { id: String } }) => {
    const {id} = params;    
  return (
    <div>
      User Profile {id}
      <br />
      <Link href=".">Go Back</Link>
    </div>
  );
};

export default page;