import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {

    renderProductItem = () => {
        // thuộc tính this.props.productsData lấy từ ExerciseCarStore
        return this.props.productsData.map((product, index) => {
            return <div className="col-3" key={index}>
                <ProductItem xemChiTiet={this.props.xemChiTiet} item={product} />
            </div>
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProductItem()}
                </div>
            </div>
        );
    }
}

export default ProductList;