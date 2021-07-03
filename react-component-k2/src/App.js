import React, { Component } from 'react';
// import DemoProps from './Props/DemoProps';
import ProductList from './Props/ProductList';
import dataJson from './Data/data.json';
class App extends Component {
  render() {
    return (
      <div className="container-fluid">

        {/* <DemoProps /> */}
        <div className="row">
          <div className="col-4">
            <div className="nav flex-column nav-pills justify-content-center" style={{ minHeight: 800 }} id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
              <a className="nav-link" id="v-pills-shop-tab" data-toggle="pill" href="#shop" role="tab" aria-controls="shop" aria-selected="false">Shop</a>
            </div>

          </div>
          <div className="productList col-8">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                Home
              </div>
              <div className="tab-pane fade" id="shop" role="tabpanel" aria-labelledby="v-pills-shop-tab">Shop</div>
            </div>
            <ProductList arrProduct={dataJson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;