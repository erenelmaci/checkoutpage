import { Button, Card } from "react-bootstrap"
import { BsTrash } from "react-icons/bs"
import "../style/CardTotal.css"

const ProductCard = ({
  Product_Name,
  Product_Quantity,
  Product_Image_URL,
  Product_price
}) => {
  return (
    <div>
      <Card className="card">
        <Card.Body>
          <img
            src={Product_Image_URL}
            alt="img"
          />
          <div className="remove-quantitiy">
            <Card.Title>{Product_Name}</Card.Title>
            <Card.Subtitle className="new-old-pirce mb-2 text-dark">
              <h4 className="old-price text-warning">
                $<span>{Product_price}</span>
              </h4>{" "}
              <del>1100.00</del>
            </Card.Subtitle>
            <div className="shadow product-quantitiy">
              <Button className="plus-minus-button" variant="secondary">
                -
              </Button>
              <h6 className="quantitiy">{Product_Quantity}</h6>
              <Button className="plus-minus-button" variant="secondary">
                +
              </Button>
            </div>
            <Button className="shadow remove-button" variant="danger">
              {" "}
              <BsTrash /> Remove
            </Button>
            <p className="product-total-p">
              Product Total $<span>880.00</span>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCard
//https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661