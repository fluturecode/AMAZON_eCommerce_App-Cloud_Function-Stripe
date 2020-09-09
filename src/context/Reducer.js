export const initialState = {
	basket: [],
};

// Use a 'Selector' to add up all item prices
// together and then returns it together

export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BASKET":
			//get the previous state and add it to the current state and return
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		default:
			return state;
	}
};

export default reducer;
