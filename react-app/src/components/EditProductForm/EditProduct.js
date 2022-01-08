import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { useHistory } from 'react-router';
import { createProduct, getProducts } from '../../store/product';
import { useEditProductForm } from '../../context/EditProductContext';
import { editProduct } from '../../store/product';

function EditProductForm({productId}) {
    
    const dispatch= useDispatch();
    const history=useHistory()
    const {editForm, setEditForm}=useEditProductForm()
    const userId=useSelector(state=>state.session.user.id)
    const currentProduct=useSelector(state=>state.product[productId])
   
    const[name, setName]=useState(currentProduct.name)
    const[image, setImage]=useState(currentProduct.image)
    const[location, setLocation]=useState(currentProduct.location)
    const[description, setDescription]=useState(currentProduct.description)
    const[price, setPrice]=useState(currentProduct.price)
    const[category, setCategory]=useState(currentProduct.category)
    const [lng, setLng] = useState(currentProduct.lng);
	  const [lat, setLat] = useState(currentProduct.lat);

   useEffect(()=>{
     dispatch(getProducts())
   },[dispatch])


    const handleSubmit= async(e)=>{
        e.preventDefault();
     
        const payload={
            sellerId: userId,
            name,
            image,
            location,
            description,
            price,
            category,
            lng,
            lat
        }
        const product=await dispatch(editProduct(payload, productId));
        if(product) {
            dispatch(getProducts())
            setEditForm(false)
            history.push(`/products/${product.id}`)
        }
       
    }
    return (
        <form onSubmit={handleSubmit} >
        <div  className='createProductContainer' style={{marginBottom:'3%'}}>
          <label>
            Name of your product
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='input-area'
          />
          
          <label>
            Image
          </label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          
          <label>
            location
          </label>
          <select value={location} onChange={(e)=>setLocation(e.target.value)} className='input-area'>
            <option value="Los Angeles">Los Angeles</option>
            <option value="New York City">New York City</option>
          </select>
          
          <label>
            Longtitude
          </label>
          <input
              type="number"
              required
              value={lng}
              onChange={(e) => setLng(e.target.value)}
              className='input-area'
            />
          <label>
            Latitude
          </label>
          <input
              type="number"
              required
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              className='input-area'
            />
          <label>
            description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className='input-area'
          />
          
          <label>
            price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className='input-area'
          />
         
          <label>
            category
          </label>
          <select value={category} onChange={(e)=>setCategory(e.target.value)} className='input-area'>
              <option value="Electronics & Media" >Electronics & Media</option>
              <option value="Home & Garden"  >Home & Garden</option>
              <option value="Clothing,Shoes,& Accessories"  >Clothing,Shoes,& Accessories</option>
          </select>
          
          <button type="submit" className='submit-button'>
            Confirm edit
          </button>
        </div>
      </form>
    )
}

export default EditProductForm