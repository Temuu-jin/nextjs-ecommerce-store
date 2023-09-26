import './globals.scss';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: { default: 'Home page | EcomStore', template: '%s | EcomStore' },
  description: 'Next.js demo ecommerce store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header className={inter.className}>
        <nav>
          <div style={{ alignItems: 'left' }}>
            <Image src="/logo.png" alt="EcomStore" width={100} height={100} />
          </div>
          <div style={{ alignItems: 'center' }}>
            <Link href="/">Home</Link>
            <Link href="/products" data-test-id="products-link">
              Products
            </Link>
            <Link href="/about" data-test-id="about-link">
              About us
            </Link>
            <Link href="/contact" data-test-id="contact-link">
              Contact
            </Link>
          </div>
          <div style={{ alignItems: 'right' }}>
            <Link href="/login" data-test-id="login-link">
              Login
            </Link>
            <Link href="/signup" data-test-id="signup-link">
              Sign up
            </Link>
            <Link href="/cart" data-test-id="cart-link">
              Cart
            </Link>
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
