import { useState } from 'react';
import initialState from '../data/initialState';

export const useInitialState = () => {

  const [state, setState] = useState(initialState);

  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }

  const removeFromCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.id !== payload.id)
    })
  }

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
    addToBuyer
  }

}