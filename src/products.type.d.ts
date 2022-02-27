type ProductState = {
    requests: {
        getProducts: IRequest
    },
    products: IProduct[]
}

interface IProduct {
    id: string
    title: string;
    image: string;
    value: number;
    description: string;
}