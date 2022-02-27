import * as actionTypes from "./actionTypes"
import { base_url, GET } from "../requests";

const uri = `${base_url}/products`

export const setProducts = (payload: any) =>
    ({ type: actionTypes.SET_PRODUCTS, payload })

export const getProductsStatus = (payload: any) =>
    ({ type: actionTypes.GET_PROCUCTS_STATUS, payload })

export const getProducts = () => (dispatch: any) => {
    const url = `${uri}/`;
    return GET(url, dispatch, getProductsStatus)
     .then((response) => {
        dispatch(setProducts(response.data))
     })
}
