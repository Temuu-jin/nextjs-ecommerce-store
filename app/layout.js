import './globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getCookie } from '../utils/cookies';
import AcceptCookies from './AcceptCookies';

export const metadata = {
  title: { default: 'Home page | EcomStore', template: '%s | EcomStore' },
  description: 'Next.js demo ecommerce store',
};

export default function RootLayout({ children }) {
  const cartCookie = getCookie('cart');
  const cart = cartCookie ? JSON.parse(cartCookie) : [];

  return (
    <html lang="en">
      <header>
        <AcceptCookies />
        <nav>
          <div>
            <a href="/" style={{ margin: 0 }}>
              <Image
                src="/yazulogo.png"
                alt="EcomStore"
                width={20}
                height={20}
              />
            </a>
          </div>
          <div style={{ alignItems: 'center' }}>
            <ul>
              <li>
                <Link href="/products" data-test-id="products-link">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" data-test-id="about-link">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" data-test-id="contact-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/cart" data-test-id="cart-link">
                  Cart
                  <span data-test-id="cart-count"> {cart.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {children}
      </header>
    </html>
  );
}
/* A header with a link to the Cart, showing the number of items in the cart
  - This header needs to appear on all pages
  - The header needs to use the HTML `<header>` element
  - The number of items is the sum of the quantity of all products (eg. if you have 2 apples and 3 bananas in your cart, the number of items is 5)
  - The number of items needs to update when you add or remove items from the cart
  - The link needs to have an HTML attribute `data-test-id="cart-link"`
  - The count needs to be contained in an element with the HTML attribute `data-test-id="cart-count"` */
