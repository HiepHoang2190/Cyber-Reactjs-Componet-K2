import React, { Component } from 'react';
import ModelItem from './ModelItem';

class ModelList extends Component {
    render() {
        return (
            <div>
                <h3>Danh sách Idol</h3>
                <div className="row">
                    <div className="col-3">
                        <ModelItem />
                    </div>
                    <div className="col-3">
                        <ModelItem />
                    </div>
                    <div className="col-3">
                        <ModelItem />
                    </div>
                    <div className="col-3">
                        <ModelItem />
                    </div>

                </div>
            </div>
        );
    }
}

export default ModelList;