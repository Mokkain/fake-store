import React from "react"
import styled from "styled-components"


const ProductCard = styled.li`
  background: #f2f2f2;
  padding: 20px;
  width: 100%; 
  flex: 0 0 300px; 
  list-style: none; 
  border-radius: 9px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
`

const Title = styled.h1`
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;;
`
const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  background: none;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
`

const Price = styled.p`
  font-size: 20px;
  margin: 10px 0;
  font-weight: 700;
`

const Description = styled.p`
  font-size: 18px;
  color: #201e1e;
  margin-bottom: 10px;
  text-align: justify;
`

const Category = styled.p`
  font-weight: bold;
  font-size: 18px;
  font-style: italic;
  text-align: start;
  color: #8a4914;
  span{
        width: 212px;
        color: #3b3838;
        font-weight: 400;
        font-style: normal;
    }
`

const DeleteButton = styled.button`
  background-color: #7959cf;
  margin-top: 20px;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #6f3bc3f8;
  }
`


const Card = ({ id, title, price, description, category, image, products, setProducts }) => {

    const handleDeleteProduct = (id) => {
        console.log("Eliminar producto", id)
        const updatedProducts = products.filter((product) => product.id !== id)
        setProducts(updatedProducts)
    }


    return (
            <ProductCard key={id}>
                <Title>{title}</Title>
                <Image src={image} alt={title} />
                <Price>Price: {price}</Price>
                <Description>{description}</Description>
                <Category>Category: <span>{category}</span></Category>
                <DeleteButton onClick={() => handleDeleteProduct(id)}>Eliminar</DeleteButton>
            </ProductCard>
    )
}

export default Card