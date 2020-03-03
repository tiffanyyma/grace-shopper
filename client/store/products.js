import axios from 'axios'

//Action types
const GET_PRODUCTS = 'GET_PRODUCTS'

const initialState = {
  allProducts: null,
  singleProduct: null
}

//Action creators
const gotProducts = allProducts => {
  return {
    type: GET_PRODUCTS,
    allProducts
  }
}

//Thunks
export const fetchProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products')
    dispatch(gotProducts(res.data))
  } catch (err) {
    console.error(err)
  }
}

//Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.allProducts
      }
    default:
      return state
  }
}
