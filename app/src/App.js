import logo from './logo.svg';
import React from 'react';
import './App.css';
import ProductList from './components/ProductList'
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className="App">
      <ProductList/>
      <EmployeeList/>
    </div>
  );
}

export default App;
