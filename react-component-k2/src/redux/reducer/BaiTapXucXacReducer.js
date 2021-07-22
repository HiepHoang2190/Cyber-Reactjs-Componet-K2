

const stateDefault = {
    taiXiu: false, // True: là tài (12<)- False: là xỉu (3->11)
    mangXucXac: [
        { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
        { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
        { ma: 1, hinhAnh: './img/gameXucXac/1.png' },
    ],
    soBanThang: 0,
    tongSoBanChoi: 0
}


const BaiTapGameXucXacReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'DAT_CUOC':
            state.taiXiu = action.taiXiu;
            return { ...state }

        case 'PLAY_GAME': {
            //Bước 1 xử lý random xúc xắc
            let mangXucXacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                // Mỗi lần lập random ra số ngẫu nhiên từ 1->6
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                // Tạo ra 1 đối tượng xúc xắc từ số ngẫu nhiên
                let xucXacNgauNhien = { ma: soNgauNhien, hinhAnh: `./img/gameXucXac/${soNgauNhien}.png` };
                // Push vào mảng xúc xắc ngẫu nhiên
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            state.mangXucXac = mangXucXacNgauNhien;
            // Xử lý tăng só bàn chơi
            state.tongSoBanChoi += 1;
            // Xử lý số bàn thắng
            let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, XucXac, index) => {
                return tongDiem += XucXac.ma;
            }, 0);
            // console.log(tongSoDiem);
            // Xét điều kiện để người dùng thắng game
            if ((tongSoDiem > 11 && state.taiXiu === true) || (tongSoDiem <= 11 && state.taiXiu === false)) {
                state.soBanThang += 1;
            }
            return { ...state };
        }
        default: return { ...state }
    }
}

export default BaiTapGameXucXacReducer;