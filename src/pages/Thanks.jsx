import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { stateActions } from '../store/StateSlice';
import { personalInfoActions } from '../store/PersonalInfoSlice';
import { shippingActions } from '../store/ShippingSlice';
import { cartActions } from '../store/CartSlice';
import spinner from '../icons/spinner.svg'

import './Thanks.css'

export default function Thanks() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [hasProcessed, setHasProcessed] = useState(false)

    useEffect(() => {
        if(!hasProcessed) return
        setTimeout(() => {
            dispatch(stateActions.setState(0))
            dispatch(personalInfoActions.setPersonalInfo(null))
            dispatch(shippingActions.setShipping({ shipping: 'Express shipping', cost: 5.53 }))
            dispatch(cartActions.emptyCart())
            navigate('/')
        }, 3500);
    }, [hasProcessed])

    useEffect(() => {
        setTimeout(() => {
            setHasProcessed(true)
        }, 2000);
    }, [])

  return (
    <div className='thanks'>
        {hasProcessed && <div className='thanks-processed'>
            <h1>Thank you for your order!</h1>
            <p>Your order has been processed.</p>
            <p>Redirecting...</p>
        </div>}
        {!hasProcessed && <div className='thanks-processed'>
            <h1>Processing your order...</h1>
            <img className='spinner' src={spinner} alt="" />
            <p>Please wait</p>
        </div>}
    </div>
  )
}
