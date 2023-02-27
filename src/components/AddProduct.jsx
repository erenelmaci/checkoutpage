import axios from "axios"
import { useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"
import { SlBasketLoaded } from "react-icons/sl"

const AddProduct = () => {
  const [productName, setProductName] = useState("")
  const [productQuantity, setProductQuantity] = useState("")
  const [productImageUrl, setProductImageUrl] = useState("")
  const [productPrice, setProductPrice] = useState("")

  const BASE_URL = "https://63f757b2e8a73b486af5c406.mockapi.io/checkout"

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newProduct = {
      Product_Name: productName,
      Product_Quantity: productQuantity,
      Product_Image_URL: productImageUrl,
      Product_price: productPrice,
    }

    try {
      await axios.post(BASE_URL, newProduct)
    } catch (error) {
      console.log(error)
    }
    e.target.reset()
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Product Price"
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control
            max={15}
            type="number"
            placeholder="Product Quantity"
            onChange={(e) => setProductQuantity(e.target.value)}
          />
        </Form.Group>
        <Form.Label htmlFor="basic-url">Product Image URL</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text type="url" id="basic-addon3">
            https://example.com/
          </InputGroup.Text>
          <Form.Control
            id="basic-url"
            aria-describedby="basic-addon3"
            placeholder="Product Image URL"
            onChange={(e) => setProductImageUrl(e.target.value)}
          />
        </InputGroup>
        <Button variant="success" type="submit" onClick={handleSubmit}>
          <SlBasketLoaded />
          &nbsp;&nbsp; Add To Card
        </Button>
      </Form>
    </>
  )
}

export default AddProduct
