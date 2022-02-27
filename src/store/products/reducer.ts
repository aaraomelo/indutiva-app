import { createAction, createReducer } from "@reduxjs/toolkit";
import { haveMessages, validateModel } from "../validations";
import * as actionTypes from "./actionTypes"
import { productsInitialState } from "./state";
import { validate } from "./validate";

const setProducts = createAction<any>(actionTypes.SET_PRODUCTS);
const unshiftProduct = createAction<any>(actionTypes.UNSHIFT_PRODUCT);
const getProductsStatus = createAction<any>(actionTypes.GET_PROCUCTS_STATUS);
const postProductsStatus = createAction<any>(actionTypes.POST_PROCUCT_STATUS);
const setProductFormField = createAction<any>(actionTypes.SET_PRODUCT_FORM_FIELD);
const validateProductForm = createAction<any>(actionTypes.VALIDATE_PRODUCT_FORM);
const setProductsSearch = createAction<any>(actionTypes.SET_PRODUCTS_SEARCH);

export default createReducer(productsInitialState,
  (builder) => {
    builder
      .addCase(setProducts, (state, action) => {
        state.products = action.payload.reverse();
        state.search = state.products;
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
      .addCase(setProductFormField, (state, action) => {
        state.productForm[action.payload.field] = action.payload.value;
        state.validations[action.payload.field] = validate(action.payload);
      })
      .addCase(validateProductForm, (state, action) => {
        state.validations = validateModel(state.productForm, state.validations, validate, action.payload.field)
        state.isValidProduct = haveMessages(state.validations);
      })
      .addCase(setProductsSearch, (state, action) => {
        state.search = state.products.filter((product) =>
          product.title.includes(action.payload.search)
        )
      })
  }
);
