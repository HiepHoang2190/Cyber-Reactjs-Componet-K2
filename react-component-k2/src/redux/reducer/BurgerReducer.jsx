
const burgerState = {
    burger: { salad: 1, cheese: 3, beef: 5 },  // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]
    menu: {
        salad: 10,
        cheese: 20,
        beef: 55
    },
    total: 85
}
// burger.salad = 3; burger['salad']=3

const BurgerReducer = (state = burgerState, action) => {

    return { ...state }
}

export default BurgerReducer;