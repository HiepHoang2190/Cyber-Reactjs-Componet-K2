import React, { Component, PureComponent } from 'react';

class Profile extends PureComponent {

    render() {
        console.log('load');
        return (

            <div>
                <div className="card text-white bg-primary" style={{ width: 250 }}>
                    <img style={{ width: 250, height: 300 }} className="card-img-top" src="https://anh.24h.com.vn/upload/2-2020/images/2020-04-24/1587664061-778-nu-sinh-viet-19-tuoi-mac-ao-sieu-tao-bao-94270777_718462938899238_2452930847234326528_n-1587612005-width774height960.jpg" alt="123" />
                    <div className="card-body">
                        <h3>Số lượng tim: <i className='fa fa-heart'>{this.props.like}</i></h3>
                        <h4 className="card-title">Họ ten: Lê Thị A</h4>
                        <p className="card-text">Tuổi: 18</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Profile;