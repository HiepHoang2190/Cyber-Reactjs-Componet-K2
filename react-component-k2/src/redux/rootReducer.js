import { combineReducers } from 'redux';
import BaiTapGioHangReducer from '../redux/BaiTapGioHangReducer'
import BaiTapGameXucXacReducer from '../redux/BaiTapXucXacReducer'

const rootReducer = combineReducers({ //store tổng của ứng dụng
    stateGioHang: BaiTapGioHangReducer,  // state giỏ hàng
    BaiTapGameXucXacReducer  //state baì tập game xúc xắc
})

export default rootReducer;