import React, { useEffect, useState } from "react"
import Button from "../components/Buton"
import CardTotal from "../components/CardTotal"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import axios from "axios"

const Main = () => {
  const [product, setProducts] = useState([])
  const BASE_URL = "https://63f757b2e8a73b486af5c406.mockapi.io/checkout"

  useEffect(() => {
    const getData = async () => {
      try {
        const productData = await axios.get(BASE_URL)
        setProducts(productData.data)
        console.log(productData.data)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [BASE_URL])
  return (
    <>
      <Header />
      <Button />
      {product.map((product) => (
        <ProductCard
          key={product.Product_Name}
          id={product.id}
          {...product}
          setProducts={setProducts}
        />
      ))}

      <CardTotal />
    </>
  )
}

export default Main
