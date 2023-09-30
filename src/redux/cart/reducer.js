import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes"

const init={
    cart:[]
}

export const reducer=(state=init,{type,payload})=>{

    switch(type){
        case ADD_TO_CART:
            return {...state,cart:[...state.cart,{...payload,quantity:1}]}
        case REMOVE_FROM_CART:
            return {...state,cart:state.cart.filter((el)=>el.id!==payload.id)}
        default:
            return state
    }

}