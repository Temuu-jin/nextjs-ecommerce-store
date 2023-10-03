import { useEffect, useState } from 'react';
import {
  clearCartCookie,
  getCartCookie,
  setCartCookie,
} from '../../utils/cookies';
import styles from '../page.module.scss';

export default function Cart() {
  const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
      const cartFromCookie = JSON.parse(getCartCookie('cart'));
      setCart(cartFromCookie || []);
    }, []);

    const addToCart = (product) => {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      setCartCookie('cart', JSON.stringify(updatedCart), {
        maxAge: 3600,
        path: '/',
      });
    };

    const clearCart = () => {
      setCart([]);
      clearCartCookie('cart');
    };

    return (
      <div>
        <h1>Shopping Cart</h1>
        {cart.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
        <button onClick={() => addToCart({ id: 1, name: 'Product 1' })}>
          Add to Cart
        </button>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    );
  };
}
/* A Cart page (containing a list where products appear when you click on the "Add to cart" button on the single product page), which also shows the total price of all products
  - Each product needs to be contained in an element with the HTML attribute `data-test-id="cart-product-<product id>"`
    - Inside the product element:
      - the product name needs to be be visible
      - the quantity needs to be visible, as the only content inside an element with the HTML attribute `data-test-id="cart-product-quantity-<product id>"`
      - the product subtotal needs to be visible (price × quantity)
      - the remove button needs to have the HTML attribute `data-test-id="cart-product-remove-<product id>"`
  - The total price (the number without any currency symbol) needs to be directly inside an element with the HTML attribute `data-test-id="cart-total"`
  - The checkout button needs to have the HTML attribute `data-test-id="cart-checkout"`
  - Negative quantity values should not be possible
  - Clicking on the checkout button should navigate to the checkout page */
