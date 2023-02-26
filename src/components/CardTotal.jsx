import "../style/CardTotal.css"

const CardTotal = () => {
  return (
    <>
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
