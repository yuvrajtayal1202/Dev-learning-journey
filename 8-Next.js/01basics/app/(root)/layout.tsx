import React from "react";
import "../globals.css";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <h1>NavBar</h1>
        {children}
      </body>
    </html>
  );
};

export default Layout;