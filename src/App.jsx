import { useEffect, useState } from "react"
import Card from "./Components/Card"
import GlobalStyles from "./Components/GlobalStyles"
import styled from "styled-components"
import Header from "./Components/Header"

const AppContainer = styled.div`
  width:1280px;
  max-width:100%;
  margin: 0 auto;
  min-height:100vh;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`
const ProductsContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background: none;
    padding: 20px;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    justify-content: space-around;
`

const App = () => {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    getProducts()
  }, [])

  const handleSearchProduct =(e)=>{
    setSearch(e.target.value)
}

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header
          search={search}
          handleSearchProduct={handleSearchProduct} />
        <main>
          <section>
            <CardContainer>
              <ProductsContainer>
                {products
                .filter(product => {
                  return search === "" || product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                })
                  .map(({ id, title, price, description, category, image }) => {
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
              </ProductsContainer>
            </CardContainer>
          </section>
        </main>
      </AppContainer>
    </>
  )
}

export default App
