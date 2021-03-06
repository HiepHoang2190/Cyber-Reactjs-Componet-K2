
const burgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 },  // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]
    menu: {
        salad: 10,
        cheese: 20,
        beef: 55
    },
    total: 85
}
// burger.salad = 3; burger['salad']=3

const BurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case 'ADD_BREADMID': {
            console.log(action);
            // bóc tách phần tử 
            let { propsBurger, amount } = action;
            // Thay đổi số lượng
            if (amount === -1 && state.burger[propsBurger] < 1) {
                return { ...state }
            }
            let burgerUpdate = { ...state.burger };
            // Chưa bóc tách phần tử thì dùng như thế này
            // burgerUpdate[action.propsBurger] += action.amount;

            // Bóc tách phần tử ở trên rồi thì dùng như thế này
            burgerUpdate[propsBurger] += amount;
            state.burger = burgerUpdate;
            // Tính tổng tiền
            state.total += amount * state.menu[propsBurger];
            return { ...state };
        }
    }

    return { ...state }
}

export default BurgerReducer;