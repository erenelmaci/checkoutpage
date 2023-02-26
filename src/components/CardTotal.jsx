import { Button, Card } from "react-bootstrap"
import { BsTrash } from "react-icons/bs"
import "../style/CardTotal.css"

const CardTotal = () => {
  return (
    <>
      <Card className="card">
        <Card.Body>
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661"
            alt="mac"
          />
          <div className="remove-piece">
            <Card.Title>Mack Book M1 Air 16gb</Card.Title>
            <Card.Subtitle className="new-old-pirce mb-2 text-dark">
              <h4 className="old-price text-warning">
                $<span>880</span>
              </h4>{" "}
              <del>1100.00</del>
            </Card.Subtitle>
            <div className="product-piece">
              <Button className="plus-minus-button" variant="secondary">
                +
              </Button>
              <h6 className="piece">1</h6>
              <Button className="plus-minus-button" variant="secondary">
                -
              </Button>
            </div>
            <Button className="remove-button" variant="danger">
              {" "}
              <BsTrash /> Remove
            </Button>
            <p className="product-total-p">Product Total $<span>880.00</span></p>
          </div>
        </Card.Body>
      </Card>
      <div className="total-price">
        <span className="total-p-group">
          <h6>SubTotal</h6>
          <p>$880.0</p>
        </span>
        <hr />
        <span className="total-p-group">
          <h6>Tax(18%)</h6> <p>$880.0</p>
        </span>
        <hr />
        <span className="total-p-group">
          <h6>Shipping</h6> <p>$25.0</p>
        </span>
        <hr />
        <span className="total-p-group">
          <h6>Total</h6> <p>$880.0</p>
        </span>
        <hr />
      </div>
    </>
  )
}

export default CardTotal
