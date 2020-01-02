import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };
  componentDidMount(){
      this.storeProducts();
  }
  storeProducts = () =>{
      let tempProducts=[];
      storeProducts.forEach(item =>{
          const singleItem = {...item};
          tempProducts = [...tempProducts,singleItem]
      })
      this.setState(() =>{
          return {products:tempProducts}
      })

  }
  hanldeDetail = () => {
    console.log("hello from detail");
  };
  addToCart = () => {
    console.log("hello from add to cart");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          hanldeDetail: this.hanldeDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
