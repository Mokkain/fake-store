import React from "react"


const Card = ({id, title, price, description, category, image, products, setProducts}) => {

    const handleDeleteProduct = (id) => {
        console.log("Eliminar producto", id)
        const updatedProducts = products.filter((product) => product.id !== id)
        setProducts(updatedProducts)
    }


    return (
        <li key={id}>
            <h1>{title}</h1>
            <img style={{ width: "5rem" }} src={image} alt={title} />
            <p><strong>Price: </strong>{price}</p>
            <p>{description}</p>
            <p><strong>Category: </strong>{category}</p>
            <button onClick={() => handleDeleteProduct(id)}>Eliminar</button>
        </li>
    )
}

export default Card