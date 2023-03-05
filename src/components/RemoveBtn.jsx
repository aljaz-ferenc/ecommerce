import { useDispatch } from "react-redux";
import { cartActions } from "../store/CartSlice";

export default function RemoveBtn({id, amount}) {
  const dispatch = useDispatch()

  function handleRemove(){
    if(amount === 1){
      dispatch(cartActions.removeFromCart(id))
    }else{
      dispatch(cartActions.addToCart({id, amount: -1}))
    }
  }
    return (
      <svg
      style={{width: 3 + 'rem'}}
      onClick={handleRemove}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    );
  }