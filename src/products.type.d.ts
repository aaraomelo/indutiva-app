type ProductState = {
    requests: {
        getProducts: IRequest
        postProduct: IRequest
    },
    products: IProduct[]
    productForm: IProduct
    validations: IProductValidations
    isValidProduct: boolean
}

interface IProduct {
    id?: string
    title: string;
    image: string;
    value: number;
    description: string;
    [key: string]: any;
}

interface IProductValidations {
    title: string[];
    image: string[];
    value: string[];
    description: string[];
    [key: string]: any;
}