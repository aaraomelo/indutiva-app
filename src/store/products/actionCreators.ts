import * as actionTypes from "./actionTypes"
import { base_url, GET, POST } from "../requests";

const uri = `${base_url}/products`

export const setProducts = (payload: any) =>
  ({ type: actionTypes.SET_PRODUCTS, payload })

export const unshiftProduct = (payload: any) =>
  ({ type: actionTypes.UNSHIFT_PRODUCT, payload })

export const getProductsStatus = (payload: any) =>
  ({ type: actionTypes.GET_PROCUCTS_STATUS, payload })

export const postProductStatus = (payload: any) =>
  ({ type: actionTypes.POST_PROCUCT_STATUS, payload })

export const setProductFormField = (payload: any) =>
  ({ type: actionTypes.SET_PRODUCT_FORM_FIELD, payload })

export const validateProductForm = (payload?: any) =>
  ({ type: actionTypes.VALIDATE_PRODUCT_FORM, payload });

export const setProductsSearch = (payload?: any) =>
  ({ type: actionTypes.SET_PRODUCTS_SEARCH, payload });

export const getProducts = () => (dispatch: any) => {
  const url = `${uri}/`;
  return GET(url, dispatch, getProductsStatus)
    .then((response) => {
      dispatch(setProducts(response.data))
    })
}

export const postProduct = () => (dispatch: any, getState: () => any) => {
  const state = getState()
  const url = `${uri}/`;
  const data = state.productsState.productForm
  return POST(url, data, dispatch, postProductStatus)
    .then((response) => {
      dispatch(unshiftProduct(response.data))
    })
}
