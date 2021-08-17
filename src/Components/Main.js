import React, { useState } from 'react'
import Select from 'react-select';
import "./style.css"
import Right from "./Right";
const Main = () => {
    const options = [
  {value:0,label:0},
  {value:1,label:1},
  {value:2,label:2},
  {value:3,label:3},
  {value:4,label:4},
  {value:5,label:5},
  {value:6,label:6},
  {value:7,label:7},
  {value:8,label:8},
  {value:9,label:9},
  {value:10,label:10}
];
const [selectedOption, setSelectedOption]=useState(0);
const [animi,setAnimi]=useState(false)
function AnimateBtn()
{
    if(selectedOption>0)
     return <button 
        onClick={()=>{setAnimi(true)}}
        
     >animate</button>
}

const handleSelect=(e)=>{
    setSelectedOption(e.value)
  }

    
    return (
        <>
        <div className="flex">
            <div>
                <div className="dropdown">
                    <Select 
                        defaultValue={{value:0,label:0}}
                        onChange={handleSelect}
                        options={options}
                    />
                </div>
                
                {AnimateBtn()}
                
                
            </div>

            <div className="rightDiv"><Right val1={selectedOption} val2={animi}/></div>

        </div>
            
        

        
            
            
        </>
    )
}

export default Main;
