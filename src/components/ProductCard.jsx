import { useNavigate } from 'react-router'
import './ProductCard.css'

export default function ProductCard({title, description, price, image, id, count}) {
  const navigate = useNavigate()
  return (
    <div onLoad={count} className='product-card' onClick={() => navigate(`/product/${title}`)}>
        <img  src={`https://hbrtheedcngbriamntkr.supabase.co/storage/v1/object/public/images/${image}`} alt="product" />
        <div className='product-card__text'>
            <div className='product-card__text--title'>{title}</div>
            <div className='product-card__text--description'>{description}</div>
            <div className='product-card__text--price'>Price: ${price}</div>
        </div>
    </div>
  )
}
