import { useEffect, useRef, useState } from "react";
import "./CartNavigation.css";

export default function CartNavigation({ state }) {
    const [length, setLength] = useState()

useEffect(() => {
   switch(state){
    case 0: 
     setLength(0)
     break
     case 1: 
     setLength(33)
     break
     case 2: 
     setLength(66)
     break
     case 3:
     setLength(100)
     break
   }
}, [state])

  return (
    <div className="cart-navigation">
      <div className="number">1</div>
      <div className="number">2</div>
      <div className="number">3</div>
      <div className="number">4</div>
      <div style={{width: length + '%'}} className="line"></div>
    </div>
  );
}
