import ShippingOption from '../components/ShippingOption'
import './Shipping.css'

export default function Shipping(){

  return (
    <div className='shipping'>
      <h3>Choose a shipping option</h3>
        <ShippingOption id={123} price={5.53} image='https://hbrtheedcngbriamntkr.supabase.co/storage/v1/object/public/images/express-shipping.png' title='Express shipping' time={'1 - 2 days'} description='Choose express shipping when you’re sending a time-sensitive package or freight shipment that needs to be delivered by a certain deadline.'/>
        <ShippingOption id={234} price={2.99} image='https://hbrtheedcngbriamntkr.supabase.co/storage/v1/object/public/images/ground-shipping.png' title='Ground shipping' time={'1 - 5 days'} description='Choose ground shipping for reliable, low-cost shipping rates every day of the week.'/>
        <ShippingOption id={345} price={4.32} image='https://hbrtheedcngbriamntkr.supabase.co/storage/v1/object/public/images/worldwide-shipping.png' title='International shipping' time={'1 - 2 weeks'} description='Get your shipment on the next available flight for delivery within 24 hours to most international countries and territories.'/>
        <ShippingOption id={456} price={10.55} image='https://hbrtheedcngbriamntkr.supabase.co/storage/v1/object/public/images/same-day-shipping.png' title='Same-day delivery' time={'1 - 2 days'} description='Choose same-day shipping for a reliable door-to-door delivery within hours, across town or across the country.'/>
    </div>
  )
}
