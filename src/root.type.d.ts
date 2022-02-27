

interface IRootState {
  productsState: ProductState;
};

interface IRequest {
  pending: boolean
  failed: boolean
  suceeded: boolean
  [key: string]: any
}

type ReducerAction = {
  type: string;
  payload: any;
  error: any;
}

type ReducerState = {
  [key: string]: any;
}

type DispatchType = (args: ReducerAction) => ReducerAction
