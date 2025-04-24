import React,{Fragment} from "react";
import { createRoot } from "react-dom/client";

let root = createRoot(document.getElementById("root"));

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

root.render(
  <>
    <Header />
    <MainContent />
    <Footer/>
  </>
);




