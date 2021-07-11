import React, { Component } from 'react';
import './BaiTapOanTuXi.css';
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import Player from './Player';
class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className="gameOneTuXi">
                <div className="row text-center mt-5">
                    <div className="col-4 mt-3">
                        <Player />
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi />
                        <button className="btn btn-success p-2 display-4 mt-5">Play game</button>
                    </div>
                    <div className="col-4 mt-3">
                        <Computer />
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiTapOanTuXi;