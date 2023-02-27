import { useState } from "react"
import { Button } from "react-bootstrap"
import AddProduct from "./AddProduct"

const Buton = () => {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const handleShowAddProduct = () => {
    setShowAddProduct(!showAddProduct)
  }

  return (
    <>
      <Button variant="warning" onClick={handleShowAddProduct}>
        Show Product Bar
      </Button>
      {showAddProduct && <AddProduct />}
    </>
  )
}

export default Buton
