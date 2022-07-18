import React, { useEffect } from "react";
import {Button} from "reactstrap";

const Home = () => {
   useEffect(()=>{
       document.title="Home || Prabhanshu gupta"
   },[])
    return (
        <div class="p-5 bg-light text-center ">
                 <h1>Prabhanshu gupta</h1>
                 <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>  
                 <Button color="primary" outline >learn!</Button>
        </div>
    )
}

export default Home;