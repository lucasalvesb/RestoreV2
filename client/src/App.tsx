import { useEffect, useState } from "react"
import { Product } from "./product"

function App() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setProducts(data)
    }
  )
  }, [])

  return (
  <div>
    <h1>ReStore</h1>
    <ul>
      {products.map((item, index) => (
        <li key={index}>
          {item.name} - {item.price}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default App