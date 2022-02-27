type ProductState = {
    requests: {
        getProducts: IRequest
        postProduct: IRequest
    },
    products: IProduct[]
    productForm: IProduct
}

interface IProduct {
    id?: string
    title: string;
    image: string;
    value: number;
    description: string;
}