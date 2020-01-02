import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductCosumer} from '../Context'

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart} = this.props.product
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
               <div className="card">
                   <div className="image-container p-5" onClick={()=>console.log("you clicked me on ")}>
                       <Link to='/details'>
                           <img src={img} alt="product" className="card-img-top"></img>
                       </Link>
                       <button className="card-btn" disabled={inCart?true:false} 
                       onClick={() =>{console.log('added tothe cart')}}>
                           {inCart?(<p className="text-capitalize mb-0" disabled>in cart</p>):(<i className="fa fa-cart-plus"/>)}
                       </button>
                       {}
                       
                   </div>
               </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div``
