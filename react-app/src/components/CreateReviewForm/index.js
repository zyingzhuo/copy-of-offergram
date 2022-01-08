

import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useHistory} from 'react-router';
import { createReview } from '../../store/review';
import {Rating, RatingView} from 'react-simple-star-rating'
import './CreateReviewForm.css'



function CreateReviewForm(){
   
    const {productId}=useParams()
    const dispatch = useDispatch()
    const history=useHistory()
    const userId=useSelector(state=>state.session.user.id)
    const currentProduct=useSelector(state=>state.product[productId])
    const sellerId=currentProduct?.sellerId
    // const seller=useSelector(state=>state.user[sellerId])
    const [rating, setRating]=useState(0)
    const [comment, setComment]=useState('')

   const handleRating=(rate)=>{
     setRating(rate)
   }

  
    const handleSubmit= async(e)=>{
        e.preventDefault();
     
        const payload={
          reviewerId:userId,
          revieweeId:sellerId,
          comment,
          rating,
        }
        const review=await dispatch(createReview(payload));
        if(review) {
            history.push(`/products/${productId}`)
        }
        setComment('')
        setRating(0)
    }
    return(
    <>
        <form onSubmit={handleSubmit}>
              <div className='createReviewContainer'>
                  <label>
                    comment
                  </label>
                  <textarea
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    style={{height:'5rem', borderRadius:'5px'}}
                  />
                
                  <label>
                    rating
                  </label>
                
                  <Rating onClick={handleRating} ratingValue={rating} size='2rem'/>
                  
                  <button type="submit" className='askContainer'>
                    Submit your review
                  </button>
        </div>
     </form>
    </>
   )
}

export default CreateReviewForm