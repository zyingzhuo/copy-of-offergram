import React from 'react';
import { NavLink , useHistory} from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../store/session"
import { useState } from 'react';

import { useEffect } from 'react';
import { getUsers } from '../store/user';
import { getMessages } from '../store/message';
import Search from '../components/Search';
import loadProducts from '../store/product'
import { getQuery, productsCategory } from '../store/search';

const NavBar = () => {
  const history=useHistory()
  const sessionUser=useSelector(state=>state.session.user)
  const [msgList, setMsgList]=useState(false)
  const dispatch=useDispatch()
  const allProducts=useSelector(state=>Object.values(state.product))
  const mediaProducts=allProducts.filter(product=>product.category==='Electronics & Media')
  const homeProducts=allProducts.filter(product=>product.category==='Home & Garden')
  const clothesProducts=allProducts.filter(product=>product.category==='Clothing,Shoes,& Accessories')
 
  
  
  const onClick=async(e)=>{
    e.preventDefault()
    await dispatch(productsCategory(mediaProducts))
    history.push(`/search`)
}


  const onClickC2=async(e)=>{
    e.preventDefault()
    await dispatch(productsCategory(homeProducts))
    history.push(`search`)
  }
 
  const onClickC3=async(e)=>{
    e.preventDefault()
    await dispatch(productsCategory(clothesProducts))
    history.push(`search`)
  }
  // const searchHome=async()=>{
  //   await dispatch(loadProducts(homeProducts))
  //   history.push(`/search?query=${Home & Garden}`)
  // }

  // const searchClothes=async()=>{
  //   await dispatch(loadProducts(clothesProducts))
  //   history.push(`/search?query=${Clothing,Shoes,& Accessories}`)
  // }

  useEffect(()=>{
    dispatch(getUsers())
    
},[dispatch])

  const allUsers=useSelector(state=>Object.values(state.user))

  // const onClick = (e) => {
  //   e.preventDefault();
  //   return dispatch(sessionActions.login('demo@aa.io', 'password'))

  // }


  return (
   
    <nav >
      
        <div className='navContainer'>
          <div className='upper-nav'>
            <div className='logo'>
              <NavLink to='/'style={{textDecoration:'none', color:'rgb(0, 168, 126)'}}>OfferGram</NavLink>
            </div>
            {/* <div className='searchContainer'>
            <div><input placeholder='search'></input><button type="submit" style={{backgroundColor:'#00a87e', border: 'none', borderRadius:'10%'}}><i className="fa fa-search" style={{color: 'white'}}></i></button></div>
            <div><select> <option   value=''> -- select a city -- </option><option value='Los Angels'>Los Angels</option><option value="New York City">New York City</option></select></div>
            </div> */}
          
            {sessionUser ? (
            <>
                <Search />
                <div className='rightNav'>
                    <div className='sellNav'>
                        <i className="fas fa-funnel-dollar"></i>
                        <NavLink to='/selling'style={{textDecoration:'none',fontSize:'20px', color: 'rgb(0, 168, 126)'}}>Selling</NavLink>
                    </div>
                    <div className='dropdown'>
                        <i className="fas fa-envelope-open-text" ></i>
                        <span  className='dropbtn'style={{fontSize:'20px',textAlign:'center',color: 'rgb(0, 168, 126)'}}>Message</span>
                        <div style={{fontSize:'10px'}} className='contentDropdown'>
                        {allUsers?.map((user,ind)=>(
                          <div key={ind}><NavLink to={`/messages/sender/${sessionUser.id}/receiver/${user.id}`}>{user.username}</NavLink></div>
                        ))}
                        </div>
                    </div>

                    {/* <div>welcome {sessionUser?.username}</div> */}
                    
                    <div className='dropdown'>
                        <img className='dropbtn' src={(sessionUser?.profilePic)} style={{height:"40px",width:'40px', borderRadius:'50%'}} />
                        <div className='contentDropdown'><div>{sessionUser?.username}</div><LogoutButton /></div>
                    </div>
                </div>
            </>) : (
              
              <div className='rightContainer'>
                {/* <button onClick={onClick} className='demoword'>Demo</button> */}
                <div style={{display:'flex', justifyContent:'space-around'}}>
                <a href='https://github.com/zyingzhuo' target="_blank" rel='noreferrer' style={  {textDecoration:'none',marginRight:'15%', color:'#00a87e'}}>
                                <i className="fab fa-github fa-2x tech2" ></i>
                </a>
                <a href='https://www.linkedin.com/in/yingjia-zhuo-25a474170/' target="_blank" rel='noreferrer' style={{  textDecoration: 'none',color:'#00a87e', marginRight:'10%' }}>
                             <i className="fab fa-linkedin fa-2x tech2" ></i>
                </a>
                </div>
                <div><NavLink to='/login' exact={true} activeClassName='active' className='loginword'>Login</NavLink></div>
                <div><NavLink to='/sign-up' exact={true} activeClassName='active' className='signupword'>Sign Up</NavLink></div>
                
              </div>
              
            )}
          </div>
          <div className='bottom-nav'>
              <p3  onClick={onClick}>Electronics & Media</p3>
              <p3 onClick={onClickC2}>Home & Garden</p3>
              <p3 onClick={onClickC3}>Clothing,Shoes,& Accessories</p3>
              <p3 >Baby&Kids</p3>
              <p3 >Vehicles</p3>
              <p3 >Toys,Games,&Hobbies</p3>
              <p3 >Sports&Outdoors</p3>
              <p3 >Collectibles&Art</p3>
              <p3 >Pet supplies</p3>
              <p3 >More</p3>
          </div>
        </div>
       
      
      
    </nav>
    
  );
}

export default NavBar;
