import React from "react";
import "../globals.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div>
          <h1 className="text-3xl">Dashboard</h1>
          {children}
        </div>
      </body>
    </html>
  );
};

export default layout;
