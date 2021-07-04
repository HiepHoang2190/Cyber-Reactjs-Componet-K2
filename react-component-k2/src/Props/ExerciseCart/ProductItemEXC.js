import React, { Component } from 'react';

class ProductItemEXC extends Component {
    render() {
        let { sanPhamProps } = this.props;
        return (
            <div className="card text-center">
                <img className="card-img-top" src={sanPhamProps.hinhAnh} alt={sanPhamProps.hinhAnh} style={{ width: 300, height: 300, marginLeft: 40 }} />
                <div className="card-body text-center">
                    <h4 className="card-title ">{sanPhamProps.tenSP}</h4>
                    <p className="card-text">{sanPhamProps.giaBan}</p>
                    <button onClick={() => { this.props.themGioHang(sanPhamProps) }} className="btn btn-success">Thêm giỏ hàng</button>
                </div>
            </div>

        );
    }
}

export default ProductItemEXC;