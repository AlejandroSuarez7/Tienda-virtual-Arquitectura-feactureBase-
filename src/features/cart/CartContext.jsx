import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      // Cada adición es una entrada individual
      return {
        ...state,
        items: [...state.items, { ...action.payload, cartItemId: Date.now() + Math.random() }],
      };
    }
    case 'REMOVE_FROM_CART': {
      // Eliminar solo la entrada específica por cartItemId
      return {
        ...state,
        items: state.items.filter(item => item.cartItemId !== action.payload),
      };
    }
    case 'CLEAR_CART': {
      return initialState;
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = product => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = cartItemId => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: cartItemId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const total = state.items.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
