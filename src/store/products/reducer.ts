import { createAction, createReducer } from "@reduxjs/toolkit";
import * as actionTypes from "./actionTypes"
import { productsInitialState } from "./state";

const setProducts = createAction<any>(actionTypes.SET_PRODUCTS);
const unshiftProduct = createAction<any>(actionTypes.UNSHIFT_PRODUCT);
const getProductsStatus = createAction<any>(actionTypes.GET_PROCUCTS_STATUS);
const postProductsStatus = createAction<any>(actionTypes.POST_PROCUCT_STATUS);

export default createReducer(productsInitialState,
  (builder) => {
    builder
      .addCase(setProducts, (state, action) => {
        state.products = action.payload;
      })
      .addCase(unshiftProduct, (state, action) => {
        state.products.unshift(action.payload);
      })
      .addCase(getProductsStatus, (state, action) => {
        state.requests.getProducts[action.payload.status] = action.payload.value;
      })
      .addCase(postProductsStatus, (state, action) => {
        state.requests.postProduct[action.payload.status] = action.payload.value;
      })
  }
);
