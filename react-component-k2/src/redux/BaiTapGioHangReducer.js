
//setup State giỏ hàng trên store

const stateGioHang = {
    gioHang: []
}

const BaiTapGioHangReducer = (state = stateGioHang, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);

            if (index !== -1) {
                state.gioHang[index].soLuong += 1;
            } else {
                state.gioHang.push(action.spGioHang)
            }

            // SetState
            // console.log('gioHang', state.gioHang);
            // có ... state để tạo state mới thì mới thay đổi giao diện, nếu ko dùng ... thì thay đổi giá trị nhưng giao diện vẫn ko binding

            state.gioHang = [...state.gioHang];

            return { ...state };
        }
    }
    return { ...state }
}

export default BaiTapGioHangReducer;