import React, { Component } from 'react';
import { ModelContext } from './_Context/ModelContext';

class ModelProfile extends Component {
    render() {
        return (
            <ModelContext.Consumer>
                {(value) => {
                    return <div className=" mt-5">
                        <div>
                            <h3>Profile</h3>
                            <div className="card text-white bg-dark" style={{ width: 300 }}>


                                <img className="card-img-top" src="https://anh.24h.com.vn/upload/2-2020/images/2020-04-24/1587664061-778-nu-sinh-viet-19-tuoi-mac-ao-sieu-tao-bao-94270777_718462938899238_2452930847234326528_n-1587612005-width774height960.jpg" alt />
                                <div className="card-body">
                                    <h4 className="card-title">Tên : Lung Thị Linh</h4>
                                    <p className="card-text">Tuổi : 18</p>
                                    <span style={{ color: 'pink' }}>{value.stateLike} <i className="fa fa-heart"></i></span>
                                </div>


                            </div>
                        </div>

                    </div>
                }
                }

            </ModelContext.Consumer>
        );
    }
}

export default ModelProfile;