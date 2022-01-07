import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useState } from 'react';
import { useHistory } from 'react-router';
import { createProduct } from '../../store/product';
import './CreateProductForm.css'


function CreateProductForm () {
    const dispatch= useDispatch();
    const history=useHistory()
    const userId=useSelector(state=>state.session.user.id)

   
    const[name, setName]=useState('')
    const[image, setImage]=useState('')
    const[location, setLocation]=useState('')
    const[description, setDescription]=useState('')
    const[price, setPrice]=useState('')
    const[category, setCategory]=useState('')
    const [validationErrors, setValidationErrors]=useState([])
    const [lng, setLng] = useState(1);
	  const [lat, setLat] = useState(1);

    const validate=()=>{
      const validationErrors=[]
      if(name.length>50) validationErrors.push('name must be less than 50 characters');
      if(price<0) validationErrors.push('price must be greater than 0')
      return validationErrors
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
     
        const payload={
            sellerId: userId,
            name,
            file:image,
            location,
            description,
            price,
            category,
            lat,
            lng
        }
        
        const errors=validate();
        if(errors.length>0) {
          setValidationErrors(errors)
        } else {
          setValidationErrors([])
        const product=await dispatch(createProduct(payload));
        if(product) {
         
            history.push(`/products/${product.id}`)
        }
      }
        // if (!product) {
        //   setErrors(product);
        // } else {
        //   history.push(`/products/${product.id}`)
        // }
      };
    


    return (
      <>
      {validationErrors.length>0 && (
        <div className='errors'>
          <p>The following errors were found:</p>
          <ul style={{textDecoration:'none'}}>
            {validationErrors.map(error=><li className='error-list'>{error}</li>)}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit} style={{marginTop:'5%'}}>
        
              <div className='createProductContainer' style={{ width:'350px', display:'flex', flexDirection:'column'}}>
                  <div >
                      <label >
                        Name of your product
                      </label>
                      <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                      />
                  </div>
                  <div >
                    <label >
                      Image
                      </label>
                    <input
                        type="file"
                        accept='image/*'
                        // value={image}
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                      />
                </div>
                <div >
                  <label >
                    location
                    </label>
                  <select value={location} onChange={(e)=>setLocation(e.target.value)}>
                      <option  value='' > -- select a city -- </option>
                      <option value="Los Angeles">Los Angeles</option>
                      <option value="New York City">New York City</option>
                    </select>
                </div>
                <div>
                  <label>Longtitude</label>
                  <input
                      type="number"
                      required
                      value={lng}
                      onChange={(e) => setLng(e.target.value)}
                    />
                </div>
                <div>
                  <label>Latitude</label>
                  <input
                      type="number"
                      required
                      value={lat}
                      onChange={(e) => setLat(e.target.value)}
                    />
                </div>
                <div >
                  <label >
                    description
                    </label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                </div>
                  <label>
                    price
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    category
                    <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                      <option  value=''> -- select a category -- </option>
                      <option value="Electronics & Media" >Electronics & Media</option>
                      <option value="Home & Garden"  >Home & Garden</option>
                      <option value="Clothing,Shoes,& Accessories"  >Clothing,Shoes,& Accessories</option>
                  </select>
                  </label>
                  
                  <button type="submit" style={{border:'1px solid',borderColor:'#00a87e', backgroundColor:'#ffffff',borderRadius:'4px',marginTop:'2%',width:'100px',marginLeft:'20%'}} >Create your product listing</button>
                </div>
      
    </form>
      </>
    )
}

export default CreateProductForm