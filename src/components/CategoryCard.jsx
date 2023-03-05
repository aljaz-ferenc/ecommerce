import React, { useEffect } from 'react'
import './CategoryCard.css'
import cat0 from '../images/categories/cat0.jpg'
import cat1 from '../images/categories/cat1.jpg'
import cat2 from '../images/categories/cat2.jpg'
import cat3 from '../images/categories/cat3.jpg'
import cat4 from '../images/categories/cat4.jpg'
import cat5 from '../images/categories/cat5.jpg'

import { useDispatch } from 'react-redux'
import { categoryActions } from '../store/CategorySlice'
import { Navigate, useNavigate } from 'react-router'
import { redirect } from 'react-router'
import { getCategories } from '../../supabase/supabase'

const images = [cat0, cat1, cat2, cat3, cat4, cat5]

const CategoryCard = ({name, id, text}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  function handleCategory(){
    dispatch(categoryActions.setCategory({name, text}))
    navigate(`/${name}`)
  }



  return (
    <div className='category-card' onClick={handleCategory}>
    <span className='category-card__title'>{name}</span>
    <img className='category-card__img' src={images[id - 1]} alt="" />
    </div>
  )
}

export default CategoryCard