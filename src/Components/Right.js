import React from 'react'
import "./style.css"
function Right({val1,val2,onChildClick}) {
    console.log(val1)
    const value=val1;
    let nameClass=val2;
    console.log(value)
    console.log(nameClass)
    const arr=[];
    for(let i=0;i<value;i++)
    {
        arr.push(i);
    }

    function handleClick(event)
    {
        onChildClick(false)
    }

    return (
        <>
            {arr.map(ele=>{
                return <div className={`circle ${nameClass ? 'fade':''}`} key={ele}
                 onAnimationEnd={handleClick}
         
                ></div>
            })
        }
        </>
    )
}

export default Right
