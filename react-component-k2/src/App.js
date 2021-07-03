import React, { Component } from 'react';
// import DemoProps from './Props/DemoProps';
// import ProductList from './Props/ProductList';
import dataJson from './Data/data.json';
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore';
// import DanhSachSanPham from './Props/DanhSachSanPham';
class App extends Component {
  render() {
    return (
      <div>

        <ExerciseCarStore />
      </div>

    );
  }
}

export default App;