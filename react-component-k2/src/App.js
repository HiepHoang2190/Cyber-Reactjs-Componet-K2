import React, { Component } from 'react';
// import DemoProps from './Props/DemoProps';
// import ProductList from './Props/ProductList';
import dataJson from './Data/data.json';
import DemoProps from './Props/DemoProps';
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore';
import Parent from './Props/Parent';
import DanhSachSanPham from './Props/DanhSachSanPham'
// import DanhSachSanPham from './Props/DanhSachSanPham';
class App extends Component {
  refParent = React.createRef();
  changeTitle = () => {
    this.refParent.current.changeTitle();
  }
  render() {

    return (
      <div>
        <button onClick={this.changeTitle}>Change title</button>
        <Parent ref={this.refParent}>
          <DanhSachSanPham />
          <h3>Hello cyber learn</h3>
          <DanhSachSanPham />
          <DanhSachSanPham />
        </Parent>
      </div>

    );
  }
}

export default App;