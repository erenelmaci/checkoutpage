import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { BsTrash } from "react-icons/bs"
import "../style/CardTotal.css"

const ProductCard = ({
  id,
  setProducts,
  Product_Name,
  Product_Quantity,
  Product_Image_URL,
  Product_price,
}) => {
  const [quantity, setQuantity] = useState(Product_Quantity)
  const [productTotal, setproductTotal] = useState(
    Product_price * Product_Quantity
  )
  useEffect(() => {
    setproductTotal(Product_price * quantity)
  }, [quantity, Product_price])

  const handleMinusClick = () => {
    setQuantity(quantity - 1)
    if (quantity <= 1) {
      alert("Ürün silindi")
      handleRemoveClick()
    }
  }
  const handlePlusClick = () => {
    quantity < 15
      ? setQuantity(quantity + 1)
      : alert("No more than 15 of this product can be added.")
  }
  const handleRemoveClick = async () => {
    const BASE_URL = "https://63f757b2e8a73b486af5c406.mockapi.io/checkout"
    try {
      await axios.delete(`${BASE_URL}/${id}`)
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      )
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Card className="card">
        <Card.Body>
          <img src={Product_Image_URL} alt="img" />
          <div className="remove-quantitiy">
            <Card.Title>{Product_Name}</Card.Title>
            <Card.Subtitle className="new-old-pirce mb-2 text-dark">
              <h4 className="old-price text-warning">
                $<span>{Product_price}</span>
              </h4>{" "}
              <del>
                {(+Product_price + (+Product_price * 35) / 100).toFixed(2)}
              </del>
            </Card.Subtitle>
            <div className="shadow product-quantitiy">
              <Button
                className="plus-minus-button"
                variant="secondary"
                onClick={handleMinusClick}
              >
                -
              </Button>
              <h6 className="quantitiy">{quantity}</h6>
              <Button
                className="plus-minus-button"
                variant="secondary"
                onClick={handlePlusClick}
              >
                +
              </Button>
            </div>
            <Button
              className="shadow remove-button"
              variant="danger"
              onClick={handleRemoveClick}
            >
              {" "}
              <BsTrash /> Remove
            </Button>
            <p className="product-total-p">
              Product Total $<span>{productTotal}</span>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCard
