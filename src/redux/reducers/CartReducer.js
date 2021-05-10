const CartReducer = (state = [], action) => {
    const { type}  = action
    if (type === 'ADD_TO_CART') {
        const newItem = {
            ...action.payload,
            quantity: 1
        }
        return [...state, newItem]
    } else {
        return state
    }
}

export default CartReducer