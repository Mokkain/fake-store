import { useEffect, useState } from "react"
import Card from "./Components/Card"
import GlobalStyles from "./Components/GlobalStyles"
import styled from "styled-components"

const App = () => {

  const [products, setProducts] = useState([])


  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    getProducts()
  }, [])

  return (
    <>
    <GlobalStyles />
      <main>
  
        <section>
          <div>
            <ul>
              {products.map(({ id, title, price, description, category, image}) => {
                return (
                  <Card
                    key={id}
                    id={id} 
                    title={title}
                    price={price}
                    description={description}
                    image={image}
                    category={category}
                    products={products} 
                    setProducts={setProducts}               
                  />
                )
              })}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
