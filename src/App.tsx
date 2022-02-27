import React, { useEffect } from 'react';
import './App.css';
import ProductForm from './components/ProductForm/ProductForm';
import ProductsTable from './components/ProductsTable/ProductsTable';

function App() {
  return (
    <div className="container">
      <ProductForm />
      <ProductsTable />
    </div>
  );
}

export default App
