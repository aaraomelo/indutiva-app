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
    title: "",
    image: "",
    value: 0,
    description: ""
  },
  products: [],
  validations: {
    title: [],
    image: [],
    value: [],
    description: []
  },
  isValidProduct: false
}