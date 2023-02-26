import { Button, Form, InputGroup } from "react-bootstrap"
import { SlBasketLoaded } from "react-icons/sl"

const AddProduct = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Product Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="number" placeholder="Product Price" />
        </Form.Group>
        <Form.Label htmlFor="basic-url">Product Image URL</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            https://example.com/
          </InputGroup.Text>
          <Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder="Product Image URL" />
        </InputGroup>
        <Button variant="success" type="submit">
          <SlBasketLoaded />&nbsp;&nbsp;
          Add To Card
        </Button>
      </Form>
    </>
  )
}

export default AddProduct
