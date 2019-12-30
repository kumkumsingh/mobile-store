import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    state={
        products:[]
    }
    render() {
        return (
            <div>
            <Product/>
            </div>
        )
    }
}
