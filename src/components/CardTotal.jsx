import axios from "axios"
import { useEffect, useState } from "react"
import "../style/CardTotal.css"

const CardTotal = () => {
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    axios
      .get("https://63f757b2e8a73b486af5c406.mockapi.io/checkout")
      .then((response) => {
        const total = response.data.reduce(
          (accumulator, item) =>
            accumulator + item.Product_price * item.Product_Quantity,
          0
        )
        setTotalPrice(total)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <div className="total-price">
        <span className="total-p-group">
          <h6>SubTotal</h6>
          <p>${totalPrice}</p>
        </span>
        <hr />
        <span className="total-p-group">
          <h6>Tax(18%)</h6>{" "}
          <p>${(+totalPrice + (totalPrice * 18) / 100).toFixed(2)}</p>
        </span>
        <hr />
        <span className="total-p-group">
          <h6>Shipping</h6> <p>$25.00</p>
        </span>
        <hr />
        <span className="total-p-group">
          <h6>Total</h6>{" "}
          <p>${(+totalPrice + (totalPrice * 18) / 100 + 25).toFixed(2)}</p>
        </span>
        <hr />
      </div>
    </>
  )
}

export default CardTotal
