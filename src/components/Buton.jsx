import { useState } from "react"
import { Button } from "react-bootstrap"
import AddProduct from "./AddProduct"

const Buton = () => {
  const [showAddProduct, setShowAddProduct] = useState(true)
  const handleShowAddProduct = () => {
    setShowAddProduct(!showAddProduct)
  }

  return (
    <>
      <Button variant="warning" onClick={handleShowAddProduct}>
        {showAddProduct ? "Hide" : "Show"} Product Bar
      </Button>
      {showAddProduct && <AddProduct />}
    </>
  )
}

export default Buton
