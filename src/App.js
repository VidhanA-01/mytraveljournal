
import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Data from "./data.js";
export default function App() {
  const data = Data.map(items =>{
    return(
      <Cards
       key={items.id}
       {...items}

      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <div className="cards--list">
        {data}
      </div>
    </div>
  );
}


