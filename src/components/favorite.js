import { useState } from "react";
import pic from '../Images/n1.jpeg'
import pic2 from '../Images/n2.jpeg'

function Favorite() {
    let [color,setColor]=useState("White")
    let [pict,Setpic]=useState(pic)
    return(<>
        <h1>My Favorite Color is {color}</h1>
        <button onClick={()=>{setColor("Blue")}}>Change color</button>
        <img src={pict}></img>
        <button onClick={()=>{Setpic(pic2)}}>Change img</button>
        </>) 
}

export default Favorite;

