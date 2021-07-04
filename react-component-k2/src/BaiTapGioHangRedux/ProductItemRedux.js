import React, { Component } from 'react';

class ProductItemRedux extends Component {
    render() {
        let { product } = this.props
        return (
            <div className="card text-left">
                <img style={{ width: 320, height: 350 }} className="card-img-top" src={product.hinhAnh} alt={product.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <p className="card-text">{product.giaBan.toLocaleString()}</p>
                    <button onClick={() => { }} className="btn btn-success">Thêm sản phẩm</button>
                </div>
            </div>

        );
    }
}

export default ProductItemRedux;