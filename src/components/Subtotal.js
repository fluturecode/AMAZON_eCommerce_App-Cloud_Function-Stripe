import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/Reducer";

function Subtotal() {
	// Pull the basket from useStateValue
	const [{ basket }] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						{/* Value gets passed as a render prop */}
						<p>
							Subtotal ({basket.length} items):
							<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
