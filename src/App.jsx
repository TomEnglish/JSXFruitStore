import { useState } from 'react'
import './App.css'

// ## App Component (Parent)
// - [x ] Initialize state using useState to store product list
// - [x ] Create products with id, name, price, and description attributes
// - [x ] Pass product list as props to ProductList component
// - [x ] Apply custom CSS styling for main app layout

function App() {
  // Sample product data object
  const sampleProducts = [
    { id: 1, name: 'Dragon Fruit', price: 5.99, description: 'Stunningly vibrant pink skin with green scales, revealing white or red flesh speckled with tiny black seeds. Mildly sweet taste.', imageUrl: 'https://placehold.co/300x200/FF1493/FFF?text=Dragon+Fruit', category: 'Tried Before' },
    { id: 2, name: 'Rambutan', price: 4.50, description: 'Exotic fruit covered in soft, hair-like red spines. Inside, a translucent white flesh surrounds a single seed, offering a sweet, slightly tart flavor.', imageUrl: 'https://placehold.co/300x200/DC143C/FFF?text=Rambutan', category: 'New' },
    { id: 3, name: 'Mangosteen', price: 7.25, description: 'Known as the "Queen of Fruits," features a thick purple rind protecting fragrant, juicy white segments with a sweet-tart, complex flavor.', imageUrl: 'https://placehold.co/300x200/8A2BE2/FFF?text=Mangosteen', category: 'Tried Before' },
    { id: 4, name: 'Durian', price: 12.00, description: 'Infamous for its pungent aroma, this large, spiky fruit holds rich, custardy yellow flesh with a unique sweet, savory, and slightly bitter taste.', imageUrl: 'https://placehold.co/300x200/BDB76B/FFF?text=Durian', category: 'Tried Before' },
    { id: 5, name: 'Lychee', price: 3.99, description: 'Small, round fruit with rough, reddish-brown skin. Peels easily to reveal fragrant, sweet, translucent white pulp with a floral note.', imageUrl: 'https://placehold.co/300x200/FF6347/FFF?text=Lychee', category: 'Tried Before' },
    { id: 6, name: 'Jackfruit', price: 9.50, description: 'The world\'s largest tree fruit, its bumpy green exterior hides fibrous yellow pods with a sweet taste reminiscent of mango and pineapple.', imageUrl: 'https://placehold.co/300x200/9ACD32/FFF?text=Jackfruit', category: 'Favorite' },
    { id: 7, name: 'Passion Fruit', price: 2.75, description: 'Round or oval fruit with a tough outer rind, typically purple or yellow. Contains aromatic, jelly-like pulp filled with edible seeds. Tart and sweet.', imageUrl: 'https://placehold.co/300x200/FF8C00/FFF?text=Passion+Fruit', category: 'Tried Before' },
    { id: 8, name: 'Star Fruit (Carambola)', price: 3.15, description: 'Distinctive five-pointed star shape when sliced. Waxy yellow-green skin, crisp texture, and a sweet-tart taste similar to citrus and apple.', imageUrl: 'https://placehold.co/300x200/FFD700/333?text=Star+Fruit', category: 'New' },
    { id: 9, name: 'Cherimoya', price: 6.80, description: 'Heart-shaped green fruit with scale-like skin. Creamy white flesh has a tropical flavor blend of pineapple, banana, and strawberry. Often called "custard apple."', imageUrl: 'https://placehold.co/300x200/90EE90/333?text=Cherimoya', category: 'New' },
    { id: 10, name: 'Soursop (Guanabana)', price: 8.00, description: 'Large, prickly green fruit with soft spines. Creamy, fibrous white pulp offers a unique sweet and tangy flavor, combining citrus and strawberry notes.', imageUrl: 'https://placehold.co/300x200/3CB371/FFF?text=Soursop', category: 'New' }
  ];


  const [products, setProducts] = useState(sampleProducts); //Do we do anything with useState/setProducts here?
  // adding a new state variable to track the selected category
  const [selectedCategory, selectedSetCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(
   v => v.category === selectedCategory);

  return (
    
    <div className="App">
      <h1>Exotic Fruit Market</h1>
      <div>
      <h2 classname="filter-header">Filter Fruit By Category:</h2>
     </div>
      <div className="filter-buttons">
        <button className="filter-button" onClick={() => selectedSetCategory('All')}>All</button>
        <button className="filter-button" onClick={() => selectedSetCategory('Tried Before')}>Tried Before</button>
        <button className="filter-button" onClick={() => selectedSetCategory('New')}>New</button>
        <button className="filter-button" onClick={() => selectedSetCategory('Favorite')}>Favorite</button>
      </div>
      
      
      <ProductList x={filteredProducts} />
  
      
    </div>
  );
}

// ## ProductList Component
// - [ x] Create ProductList component that accepts products as props
// - [ x] Implement .map() method to iterate over products
// - [ x] Render a ProductItem component for each product
// - [ x] Apply custom CSS styling for product list layout

function ProductList({ x:fruitList }) {
  return (
    <div className="product-list">
      {fruitList.map((fruit) => {

        return <ProductItem fruitProduct={fruit} />;
      // Copilot keeps suggesting I use key={fruit.id} in the retunr for the benefit of React.  
      // Its not something we've gone through and my site seems to work the same without.
      })}
    </div>
  )
}

// ## ProductItem Component
// - [ x] Create ProductItem component that accepts individual product data
// - [ x] Display product name
// - [ x] Display product price
// - [ x] Display product description
// - [ ] Style each product with visually distinct CSS  ???


function ProductItem({ fruitProduct }) {
  return (
    <div className="product-item">
      {/* Display the image using the imageUrl from props */}
      <img src={fruitProduct.imageUrl} alt={fruitProduct.name} className="product-image" />
      {/* Access properties from the 'fruitProduct' prop to display the data */}
      <h2>{fruitProduct.name}</h2>
      <p>{fruitProduct.description}</p>
      <p>${fruitProduct.price.toFixed(2)}</p>
      <p>Category: {fruitProduct.category}</p>
    </div>
  )
}


export default App
