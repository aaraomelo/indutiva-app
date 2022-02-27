import { createAction, createReducer } from "@reduxjs/toolkit";
import * as actionTypes from "./actionTypes"
import { productsInitialState } from "./state";

const setProducts = createAction<any>(actionTypes.SET_PRODUCTS);
const getProductsStatus = createAction<any>(actionTypes.GET_PROCUCTS_STATUS);

export default createReducer(productsInitialState,
  (builder) => {
    builder
      .addCase(setProducts, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProductsStatus, (state, action) => {
        state.requests.getProducts[action.payload.status] = action.payload.value;
      })
  }
);
