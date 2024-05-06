import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, decreaseQuantity, increaseQuantity, removeFromCart } from "../state/product/cartSlice";
import { RootState } from "../state/store";
import "../styles/CartPage.css";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items); // Access cart items from cartSlice
  const products = useSelector(selectAllProducts); // Access products from productSlice

  const totalPrice = cartItems.reduce((acc: number, item: CartItem) => {
    const product = products.find((p) => p.id === item.id);
    return acc + (product?.price || 0) * item.quantity; // Handle missing products gracefully
  }, 0);

  const handleRemoveItem = (item: CartItem) => {
    dispatch(removeFromCart(item));
  };

  const handleIncreaseQuantity = (productId: number) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId: number) => {
    dispatch(decreaseQuantity(productId));
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item: CartItem) => (
            <li key={item.id} className="cart-item">
              <div className="item-details">
                <h2>{item.name}</h2>
                <img src={item.image} alt={item.name} />
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
              </div>
              <div className="item-actions">
                
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <button onClick={() => handleRemoveItem(item)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="total-price">
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          {/* Add buttons for checkout or other actions (optional) */}
        </div>
      )}
    </div>
  );
};

export default CartPage;

// Selectors from productSlice (assuming you have them)
const selectAllProducts = (state: RootState) => state.cart.items;
