import React, { Component } from 'react';
import ProductListEXC from './ProductListEXC';
import CartModal from './CartModal';
class ExerciseCart extends Component {

    state = {
        /**
         * tạo ban đầu có giá trị mặc định để dễ hình dung, xong thì xóa đi để rỗng
         *  gioHang: [
            { maSP: 1, hinhAnh: '', tenSP: 'tên mặc định', soLuong: 1, donGia: 0 }
        ]
         */

        gioHang: [

        ]
    }
    themGioHang = (sanPham) => {
        console.log(sanPham);

        let spGioHang = {
            maSP: sanPham.maSP,
            tenSP: sanPham.tenSP,
            donGia: sanPham.giaBan,
            soLuong: 1,
            hinhAnh: sanPham.hinhAnh
        }
        //TÌm xem sản phẩm đã có trong giỏ hàng chưa
        let index = this.state.gioHang.findIndex(spGH => spGH.maSP === spGioHang.maSP)

        if (index != -1) {
            // tìm thấy sản phẩm được click chứa trong giỏ hàng => Tăng số lượng
            this.state.gioHang[index].soLuong += 1;
        } else {
            // Không tìm thấy sản phẩm trong giỏ hàng chứa sp đó => thêm sp đó vào giỏ
            this.state.gioHang.push(spGioHang);
        }

        /**
         *  push vào state.gioHang
         let gioHangCapNhat = [...this.state.gioHang, spGioHang]; cái này khi chưa có tìm sản phẩm mà cứ push vào, dẫn dến sản phẩm trùng cũng push vô hàng riêng chứ ko cộng số lượng
         */

        let gioHangCapNhat = this.state.gioHang;
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    render() {

        return (
            <div className="container-fluid">
                <h3 className="text-center" >BÀI TẬP GIỎ HÀNG</h3>
                <div className="text-right">
                    <span style={{ width: 17, cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">
                        <i className="fa fa-cart mr-5"><i class="fa fa-cart-arrow-down"></i>(0) Giỏ hàng</i>
                    </span>
                </div>
                <CartModal gioHang={this.state.gioHang} />
                <ProductListEXC themGioHang={this.themGioHang} />
            </div>
        );
    }
}

export default ExerciseCart;