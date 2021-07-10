import React, { Component } from 'react';

import { connect } from 'react-redux';
class ProductItemRedux extends Component {
    render() {
        let { product } = this.props
        return (
            <div className="card text-left">
                <img style={{ width: 320, height: 350 }} className="card-img-top" src={product.hinhAnh} alt={product.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <p className="card-text">{product.giaBan.toLocaleString()}</p>
                    <button onClick={() => { this.props.themGioHang(product) }} className="btn btn-success">Thêm giỏ hàng</button>
                </div>
            </div>

        );
    }
}

// Hàm gửi dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPham) => {
            //Tạo ra sp giỏ hàng
            let spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                hinhAnh: sanPham.hinhAnh,
                soLuong: 1,
                gia: sanPham.giaBan
            }
            // console.log('spGioHang', spGioHang);
            // Tạo ra action 
            let action = {
                type: 'THEM_GIO_HANG',
                spGioHang // Thuộc tính bắt buộc của action
            }

            // Dùng hàm dispatch từ redux => gửi dữ liệu lên reducer
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductItemRedux);