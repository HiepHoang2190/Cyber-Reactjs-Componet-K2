import React, { Component } from 'react';
import Child from './Child';
import ChildFunctional from './ChildFunctional';

class Parent extends Component {

    product = {
        id: 1,
        name: "nike air max",
        src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png",
        desc: 'Giày nhập ngoại',
        price: 1000,
        size: [36, 37, 38, 39, 40]

    }

    size = [36, 37, 38, 39, 40]

    showInfo = (name) => {
        alert(name)
    };
    render() {
        return (
            <div>
                <input type="text" />

                <Child
                    productItem={this.product}
                    shoesSize={this.size}
                    showAlert={this.showInfo}
                />
                {/* ChildFunctional */}
                {/* <ChildFunctional productItem={this.product}
                /> */}
            </div>
        );
    }
}

export default Parent;