import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

// Sample product data (needed for filtering)
const PRODUCTS = [
  { id: 1, name: "Apple", price: "$1.00", category: "Fruits", inStock: true },
  { id: 2, name: "Banana", price: "$1.20", category: "Fruits", inStock: true },
  { id: 3, name: "Milk", price: "$2.50", category: "Dairy", inStock: true },
  { id: 4, name: "Cheese", price: "$3.00", category: "Dairy", inStock: false }
]

const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false)

  // Cart state
  const [cart, setCart] = useState([])

  // Category filter state
  const [category, setCategory] = useState("all")

  // Add to cart function
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  // Filter products based on category
  const filteredProducts =
    category === "all"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === category)

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <h1> Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark mode.
      </p>

      {/*  Dark Mode Toggle */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/*  Category Filter */}
      <div style={{ margin: "10px 0" }}>
        <label>Filter by Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      {/*  Product List */}
      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

      {/*  Cart */}
      <Cart cart={cart} />
    </div>
  )
}

export default App