import { useState } from 'react'
import './App.css'

// ## App Component (Parent)
// - [x ] Initialize state using useState to store product list
// - [x ] Create products with id, name, price, and description attributes
// - [ ] Pass product list as props to ProductList component
// - [ ] Apply custom CSS styling for main app layout

function App() {
  // Sample product data object
  const sampleProducts = [
    { id: 1, name: 'Dragon Fruit', price: 5.99, description: 'Vibrant pink skin...', imageUrl: 'https://placehold.co/300x200/FF1493/FFF?text=Dragon+Fruit' },
    { id: 2, name: 'Rambutan', price: 4.50, description: 'Red, hairy exterior...', imageUrl: 'https://placehold.co/300x200/DC143C/FFF?text=Rambutan' },
    { id: 3, name: 'Mangosteen', price: 7.25, description: 'Purple rind, sweet segments...', imageUrl: 'https://placehold.co/300x200/8A2BE2/FFF?text=Mangosteen' },
    { id: 4, name: 'Durian', price: 12.00, description: 'Strong aroma, creamy flesh...', imageUrl: 'https://placehold.co/300x200/BDB76B/FFF?text=Durian' },
    { id: 5, name: 'Lychee', price: 3.99, description: 'Rough reddish skin, white pulp...', imageUrl: 'https://placehold.co/300x200/FF6347/FFF?text=Lychee' },
    { id: 6, name: 'Jackfruit', price: 9.50, description: 'Largest tree fruit, sweet pods...', imageUrl: 'https://placehold.co/300x200/9ACD32/FFF?text=Jackfruit' },
    { id: 7, name: 'Passion Fruit', price: 2.75, description: 'Tough rind, juicy center...', imageUrl: 'https://placehold.co/300x200/FF8C00/FFF?text=Passion+Fruit' },
    { id: 8, name: 'Star Fruit (Carambola)', price: 3.15, description: 'Waxy, forms star shapes...', imageUrl: 'https://placehold.co/300x200/FFD700/333?text=Star+Fruit' },
    { id: 9, name: 'Cherimoya', price: 6.80, description: 'Green, heart-shaped, creamy...', imageUrl: 'https://placehold.co/300x200/90EE90/333?text=Cherimoya' },
    { id: 10, name: 'Soursop (Guanabana)', price: 8.00, description: 'Prickly green, creamy pulp...', imageUrl: 'https://placehold.co/300x200/3CB371/FFF?text=Soursop' }
  ];

  // === State Management ===
  // 'products' state variable holds the array of fruit objects to be displayed.
  // 'setProducts' is the function to update this state (not used currently, but available).
  // useState(sampleProducts) initializes the state with our predefined fruit data.
  // This state is managed by the App component, making it the "source of truth".
  const [products, setProducts] = useState(sampleProducts);
  return (
    <div className="App">
      <h1>Exotic Fruit Market</h1>
      {/* === Prop Drilling === */}
      {/* The 'products' state array is passed down as a prop */}
      {/* to the ProductList component. This is how child components */}
      {/* receive data from their parent. */}
      <ProductList products={products} />
    </div>
  );
}

// ## ProductList Component
// - [ x] Create ProductList component that accepts products as props
// - [ x] Implement .map() method to iterate over products
// - [ x] Render a ProductItem component for each product
// - [ x] Apply custom CSS styling for product list layout

// === ProductList Component ===
// This component receives the list of products via props.
// It's a "presentational" component focused on displaying the list.
// It destructures 'products' directly from the props object ({ products }).
function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => {
        // For each 'product' in the 'products' array (received via props),
        // render a ProductItem component.
        // - 'key={product.id}': Essential for React lists. Helps React efficiently
        //   update the list when items change. Must be unique among siblings.
        // - 'product={product}': Pass the individual product object down
        //   as a prop to the ProductItem component.
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  )
}

// ## ProductItem Component
// - [ x] Create ProductItem component that accepts individual product data
// - [ x] Display product name
// - [ x] Display product price
// - [ x] Display product description
// - [ ] Style each product with visually distinct CSS

// === ProductItem Component ===
// This component receives an individual 'product' object via props.
// It's responsible for displaying the details of a single product.
// It destructures 'product' directly from the props object ({ product }).
function ProductItem({ product }) {
  return (
    <div className="product-item">
      {/* Display the image using the imageUrl from props */}
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      {/* Access properties from the 'product' prop to display the data */}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p> {/* Format price to 2 decimal places */}
    </div>
  )
}


export default App
