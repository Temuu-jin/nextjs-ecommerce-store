import 'server-only';

const products = [
  {
    id: 1,
    name: 'Nigiri',
    description: 'description1',
    image: '/aburi.jpg',
    price: 6,
    type: 'Seared Salmon and Truffle Mayo',
    slug: 'Aburi-Salmon',
  },
  {
    id: 2,
    name: 'Hosomaki',
    description: 'description2',
    image: '/hosomaki.jpg',
    price: 3,
    type: 'Avocado',
    slug: 'Avocado-Hosomaki',
  },
  {
    id: 3,
    name: 'Uramaki',
    description: 'description3',
    image: '/uramaki.jpg',
    price: 4,
    type: 'Prawn Tempura',
    slug: 'Prawn-Tempura-Uramaki',
  },
  {
    id: 4,
    name: 'Temaki',
    description: 'description4',
    image: '/temaki.jpg',
    price: 5,
    type: 'Tuna Cucumber',
    slug: 'Tuna-Cucumber-Temaki',
  },
];

export function getProducts() {
  return products;
}

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}
