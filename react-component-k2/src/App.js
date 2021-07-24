import React, { Component } from 'react';
// import DemoProps from './Props/DemoProps';
// import ProductList from './Props/ProductList';
import dataJson from './Data/data.json';
import DemoProps from './Props/DemoProps';
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore';
import Parent from './Props/Parent';
import DanhSachSanPham from './Props/DanhSachSanPham'
import ExerciseCart from './Props/ExerciseCart/ExerciseCart';
import BaiTapGioHangRedux from './BaiTapGioHangRedux/BaiTapGioHangRedux';
import BaiTapGameXucXac from './BaiTapRedux/BaiTapGameXucXac';
import BaiTapOanTuXi from './BaiTapRedux/BaiTapOanTuXi/BaiTapOanTuXi';
import BaiTapBookingTicket from './BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket';
import DemoPureComponent from './DemoPureComponent/DemoPureComponent';
import ContextDemo from './ContextDemo/ContextDemo';
import ExContextModelList from './ContextDemo/ExContextModelList/ExContextModelList';
// import DanhSachSanPham from './Props/DanhSachSanPham';
class App extends Component {

  render() {

    return (
      <div>
        <ExContextModelList />
      </div>

    );
  }
}

export default App;