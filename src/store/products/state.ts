export const productsInitialState: ProductState = {
  requests: {
    getProducts: {
      pending: false,
      failed: false,
      suceeded: false,
    },
    postProduct: {
      pending: false,
      failed: false,
      suceeded: false,
    }
  },
  productForm: {
    title: "title react",
    image: "image react",
    value: 100,
    description: "description react"
  },
  products: [],
}