// import { createRoot } from "react-dom/client";
// import React from 'react'

// let root = createRoot(document.getElementById("root"));


// function MyNav(){
//   return(
//     <ul>
//       <li>Home</li>
//       <li>About</li>
//     </ul>
//   )
// }

// function MainContent(){
//   return(
//     <h1>React is <i>Great</i></h1>
//   )
// }

// // root.render(
//   //   <>
//   //   {/* <MainContent/>
//   //   <MyNav/> */}
//   //   </>
//   // )




  let h1 = document.createElement("h1")
  h1.className = "header"
  h1.textContent = "Hello, World!"
  document.getElementById("root").appendChild(h1)