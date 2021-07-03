import React, { Component } from 'react';

class SanPham extends Component {
    render() {
        let { sanPhamProps } = this.props;
        // console.log('data', { sanPhamProps });
        return (
            <div className="card  text-center" >
                <img className="card-img-top" style={{ width: '250px', height: '250px', marginLeft: 50 }} src={sanPhamProps.hinhAnh} alt={sanPhamProps.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{sanPhamProps.tenSP}</h4>
                    <p className="card-text">{sanPhamProps.giaBan.toLocaleString()}</p>
                    <button onClick={() => { this.props.xemChiTiet(sanPhamProps) }} className="btn btn-success">Xem chi tiết</button>
                </div>
            </div>
        );
    }
}

export default SanPham;