
import { useState } from "react";

function List() {
    const [list, setList] = useState([]);
    const [count,setCount] = useState(1);


    function Increment(){
        console.log('function called');
        const itemname = 'item'+count;
        setList((previousvalue)=>{return [...previousvalue,itemname]});
        setCount((previous)=>{ return previous+1}); 

    }

    return (
        <>
            <h2>List Details</h2>
            <button onClick={()=>Increment()}>Click me</button>
            <ul>
                {list.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
            <ul>
                
            </ul>
        </>
    );
}

export default List;
