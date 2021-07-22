import React, { Component } from 'react';
import Profile from './Profile';

class DemoPureComponent extends Component {
    state = {
        // like: 0
        like: { soLuong: 0 } // là object không phải dữ liệu nguyên thủy
    }
    // Không được lạm dụng PureComponent
    /**Lưu ý: chỉ sử dụng PureComponent, không nên lạm dụng vì có thể dẫn tới lỗi
     * Bản chất của Purecomponent là tự động kiểm tra xem nếu props và state của component đó thay đổi thì sẽ
     * render lại, không thì thôi. Nhưng sự so sánh thay đổi của react là so sánh tham chiếu(shallow comparison- so sánh nguyên thủy),
     * nếu như ta  truyền một object dưới dạng props, và thay đổi một thuộc tính nào đó thì react ko so sánh được, vì căn bản là cùng 1 object
     * 
     *  */

    likeImage = () => {
        let likeHienTai = this.state.like;
        likeHienTai.soLuong += 1;
        this.setState({
            // like: likeHienTai
            like: { ...likeHienTai }
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Profile Lê Thị A</h3>
                <Profile props={this.state.like} />
                <br />
                <div className="card text-white bg-default">
                    <h3 style={{ color: 'red' }} >Số lượt thả tim ({this.state.like.soLuong})</h3>
                    <div className="card-body">
                        <button className="btn" style={{ color: 'red', border: '3px solid red' }} onClick={() => {
                            this.likeImage()
                        }}>Thả tim <i class="fa fa-heart"></i></button>
                    </div>
                </div>

            </div>
        );
    }
}

export default DemoPureComponent;