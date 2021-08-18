import React from 'react'
import "./style.css"
import {useDispatch,useSelector} from 'react-redux'
import {AnimateAction} from "./Actions/index"

function Right({val1,val2}) {
    const dispatch=useDispatch();
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
        dispatch(AnimateAction(false))
    }

    const selector=useSelector(state=>state.ReducerFunction)

    return (
        <>
            {arr.map(ele=>{
                console.log(selector)
                return <div className={`circle ${selector ? 'fade':''}`} key={ele}
                 onAnimationEnd={handleClick}
         
                ></div>
            })
        }
        </>
    )
}

export default Right
