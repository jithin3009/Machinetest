import React from "react";
import Addproduct from "./Addproduct";
import Viewproducts from "./Viewproducts";
import './Home.css'
function Home() {
  return (
   <>
      <div>
      <Addproduct/>
      </div>

  <div id="line"></div>
      
      <div>
      <Viewproducts />
      </div>

      </>

   
    
   
    
  );
}

export default Home;
