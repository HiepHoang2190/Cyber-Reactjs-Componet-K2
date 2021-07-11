import React, { Component } from 'react';
import './BaiTapOanTuXi.css';
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import Player from './Player';
import { connect } from 'react-redux';
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
                        <button className="btn btn-success p-2 display-4 mt-5" onClick={() => { this.props.playGame() }}>Play game</button>
                    </div>
                    <div className="col-4 mt-3">
                        <Computer />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {

            let count = 0;
            // Khai báo hàm lặp đi lặp lại
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RAN_DOM'
                })
                count++;
                if (count >= 10) {
                    // Dừng hàm setInterval
                    clearInterval(randomComputerItem);
                }
            }, 100)

        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);