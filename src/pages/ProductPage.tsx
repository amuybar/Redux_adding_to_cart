import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addToCart } from "../state/product/cartSlice"; 
import { RootState } from "../state/store"; 
import { product } from "../data/data";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { Box, Container } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/ProductPage.css";
import { Product } from "../state/product/productSlice";


const ProductPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productCount = useSelector((state: RootState) => state.cart.items.length); 

  const handleAddProduct = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-page">
       <div className="cart-button" onClick={() => navigate('/cart')}>
        <span>Cart</span>
        <span>{productCount}</span>
        </div>

      <Nav />
      <Box bg="gray.50">
        <Container maxW="container.lg" py={28}>
          <Hero
            title="Welcome to my app!"
            subtitle="This is a hero section with a picture, heading, and CTA."
            image="/images/alien_3.jpg"
          />
        </Container>
      </Box> 
      <div className="product-container">
        <h1>Product</h1>
        <div className="product-list">
          {product.map((product) => (
            <div key={product.id} className="product-item">
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} />
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <button onClick={() => handleAddProduct(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
