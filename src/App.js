
import { useState } from "react";
import Main from "./Components/Main"

function App() {
  const [btnVisible,setBtnVisible]=useState(0);
  // function ButtonFunction(btnVisible)
  // {
  //   if(btnVisible>0)
  //     return <button>Submit</button>
  // }
  return (
   
    <>
    <div className="App">
      <Main />
      
      
    </div>
    </>
  );
}

export default App;
