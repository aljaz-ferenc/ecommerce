import './ErrorPage.css'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='error'>
        <p className='error-message'>Looks like this page doesn't exist 🤔</p>
        <Link className='error-link' to='/'>Go back</Link>
    </div>
  )
}
