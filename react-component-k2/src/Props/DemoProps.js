import React, { Component } from 'react';
import Parent from './Parent';

class DemoProps extends Component {

    // Props: là thuộc tính nhận giá trị component cha vào = > Props được truy xuất thông qua 
    //  thuộc tính this.props.propsname
    render() {
        return (
            <div>
                <Parent />
            </div>
        );
    }
}

export default DemoProps;