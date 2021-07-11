import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BaiTapGameXucXac.css';
import ThongTinTroChoi from './ThongTinTroChoi';
import XucXac from './XucXac';
class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className="game">
                <div className="title-game text-center mt-5 display-4">
                    Game đổ xúc xắc
                </div>
                <div className="row text-center">
                    <div className="col-5">
                        <button className="btnGame">Tài</button>
                    </div>
                    <div className="col-2">
                        <XucXac />
                    </div>
                    <div className="col-5">
                        <button className="btnGame">Xỉu</button>
                    </div>
                </div>
                <div className="thongTinTroChoi text-center">
                    <ThongTinTroChoi />
                    <button className="btn btn-success p-2 display-4 mt-5">Play game</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        soBanThang: state.BaiTapGameXucXacReducer.soBanThang
    }
}

export default connect(mapStateToProps)(BaiTapGameXucXac);