import React, { Component } from 'react';
import Child from './Child';
import ChildFunctional from './ChildFunctional';

class Parent extends Component {

    src = "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png";
    name = "nike air max"

    render() {
        return (
            <div>
                <input type="text" />
                {/* <Child propSource={this.src}
                    name={this.name}
                />
                <Child propSource={this.src}
                    name={'nike air max x2'}
                />
                <Child propSource={this.src}
                    name={'nike air max x4'}
                />
                <Child propSource={this.src}
                    name={'nike air max x555'}
                /> */}

                {/* ChildFunctional */}
                <ChildFunctional propSource={this.src}
                    name={this.name} />
            </div>
        );
    }
}

export default Parent;