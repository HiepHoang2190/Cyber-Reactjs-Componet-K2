const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/gameOanTuXi/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/gameOanTuXi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/gameOanTuXi/bao.png', datCuoc: true },
    ],
    ketQua: "I'm iron man, i love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'bao', hinhAnh: './img/gameOanTuXi/bao.png' },
}

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            // console.log(action);
            // Cách 1:
            // Reset mảng cược ,các trạng thái đặt cược về false hết
            /**
             *  let mangCuocUpdate = [...state.mangDatCuoc];
                mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                return { ...item, datCuoc: false }
            });
            console.log('mangCuocUpdate', mangCuocUpdate);
            // TÌm ra maCuoc để change trạng thái đặt cược ứng với mẵ cược đó
            let index = mangCuocUpdate.findIndex(qc => qc.ma === action.maCuoc);
            if (index !== -1) {
                mangCuocUpdate[index].datCuoc = true;
            }
             */


            // Cách 2 
            let mangCuocUpdate = [...state.mangDatCuoc];
            // Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền lên
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            });

            // ===============================
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state };
        }

        case 'RAN_DOM': {
            // console.log('random', action);
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            // console.log(quanCuocNgauNhien);
            state.computer = quanCuocNgauNhien;
            return { ...state };
        }

        default: return { ...state }
    }
}

export default BaiTapOanTuXiReducer;