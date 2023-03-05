import { useNavigate } from 'react-router'
import './ProductCard.css'

export default function ProductCard({title, description, price, image, id}) {
  const navigate = useNavigate()
  return (
    <div className='product-card' onClick={() => navigate(`/product/${title}`)}>
        <img src={`../data/images/${image}`} alt="" />
        <div className='product-card__text'>
            <div className='product-card__text--title'>{title}</div>
            <div className='product-card__text--description'>{description}</div>
            <div className='product-card__text--price'>Price: ${price}</div>
        </div>
    </div>
  )
}
