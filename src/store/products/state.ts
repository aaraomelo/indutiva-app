export const productsInitialState: ProductState = {
  requests: {
    getProducts: {
      pending: false,
      failed: false,
      suceeded: false,
    }
  },
  products: []
}