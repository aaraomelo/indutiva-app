import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getProducts } from './store/products/actionCreators';

type Props = MapStateToPropsTypes & MapDispatchToPropsTypes;

function App({ init }: Props) {
  useEffect(() => {
    init()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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

