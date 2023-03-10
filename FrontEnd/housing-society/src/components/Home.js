import React from "react";
import Login from "./Forms/Login";
import LeftBar from "./LeftBar";
import img2 from "../images/signup3.webp";
import ColorChanger from "./ColorChanger";

// style={{backgroundImage: `url(${img2})` ,backgroundPosition:"center",height:500,width:1200}}

const Home = ()=>{
    return (
        
        <div class="row no-gutters" style={{backgroundImage: `url(${img2})`,backgroundSize:"cover" ,backgroundPosition:"center"}}>
          <div><ColorChanger/></div>
          
        <div class="col-6 col-md-4"><LeftBar/></div>

        <div class="col-12 col-sm-6 col-md-8"><Login/></div>
      </div>
        
    );
}

export default Home;