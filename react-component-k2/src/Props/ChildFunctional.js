import React from 'react'

export default function ChildFunctional(props) {
    return (
        <div>
            <img style={{ width: 50 }} src={props.propSource} />
            <div style={{ width: 125 }} className="card text-left">
                <img style={{ width: 25 }} className="card-img-top" src={props.propSource} alt={props.propSource} />
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
        </div>
    )
}
