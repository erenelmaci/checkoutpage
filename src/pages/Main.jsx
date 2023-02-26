import React, { useState } from "react"
import Button from "../components/Buton"
import CardTotal from "../components/CardTotal"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import axios from "axios"

const Main = () => {
  const [product, setProduct] = useState([])
  const BASE_URL = "https://63f757b2e8a73b486af5c406.mockapi.io/checkout"

  const getData = async () => {
    try {
      const productData = await axios.get(BASE_URL)
      setProduct(productData.data)
      console.log(productData.data)
    } catch (error) {
      console.log(error)
    }
  }
    getData()
  return (
    <>
      <Header />
      <Button />
      {product.map((product) => (
        <ProductCard {...product} />
      ))}

      <CardTotal />
    </>
  )
}

export default Main
