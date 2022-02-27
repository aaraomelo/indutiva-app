import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getProducts } from './store/products/actionCreators';
import ProductForm from './components/ProductForm/ProductForm';

type Props = MapStateToPropsTypes & MapDispatchToPropsTypes;

function App({ init }: Props) {
  useEffect(() => {
    init()
  }, [])

  return (
    <div className="container">
      <ProductForm />
    </div>
  );
}

interface MapStateToPropsTypes {

}

interface MapDispatchToPropsTypes {
  init: () => Promise<any>
}

function mapStateToProps(state: any) {
  return {

  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    init: () => dispatch(getProducts())
  }
}

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(
  mapStateToProps,
  mapDispatchToProps)
  (App);

