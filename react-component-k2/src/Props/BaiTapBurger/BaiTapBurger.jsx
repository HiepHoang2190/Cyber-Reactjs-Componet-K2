import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BaiTapBurger.css'
class BaiTapBurger extends Component {

    renderBreadMid = () => {
        console.log('props-burger', this.props.burger); // xem props truyền vào

        let { burger } = this.props;
        // Sử dụng for-in

        console.log('burger', this.props);
        let content = []
        for (let propBuger in burger) {

            console.log(propBuger, burger[propBuger]) // Xem key và value
            let breadMid = [];
            for (let i = 0; i < burger[propBuger]; i++) {
                breadMid.push(<div key={i} className={propBuger}></div>)
            }
            content.push(breadMid);
        }
        return content;


        //Sử dụng cách 2: object entri

        /**
         *    console.log('object-entri', Object.entries(burger)); // 1 đối tượng thể hiện dưới dạng mảng
    
            return Object.entries(burger).map(([propsBurger, value], index) => {
                // console.log('item', propBurger, value)
                let breadMid = [];
                for (let i = 0; i < value; i++) {
                    breadMid.push(<div key={i} className={propsBurger}></div>)
                }
                return breadMid;
            })
         * 
         * 
         */

    }
    render() {
        return (
            <div className="container">
                <h3 className="display-4 text-success">Bài tập burger cybersoft</h3>
                <div className="row">
                    <div className="col-7">
                        <h3 className="text-center text-danger">Bánh burger của bạn</h3>
                        <div className="breadTop">
                        </div>
                        {this.renderBreadMid()}
                        <div className="breadBottom">
                        </div>
                    </div>
                    <div className="col-5">

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        burger: state.BurgerReducer.burger
    }
}

export default connect(mapStateToProps)(BaiTapBurger)