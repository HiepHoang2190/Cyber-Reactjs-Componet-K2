import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <img style={{ width: 50 }} src={this.props.propSource} />
                <div style={{ width: 125 }} className="card text-left">
                    <img style={{ width: 25 }} className="card-img-top" src={this.props.propSource} alt={this.props.propSource} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.name}</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Child;