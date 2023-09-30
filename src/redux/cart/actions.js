import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes"



export const AddToCartAction=(data)=>async(dispatch)=>{
    dispatch({
        type:ADD_TO_CART,
        payload:{
            ...data,
            datetime:new Date().toString(),
            statusCode:200,
            requests:ADD_TO_CART,
            response:"Added into Cart",
            componentName:"Cards",
    }})
    
}


export const RemoveFromCartAction=(id)=>async(dispatch)=>{
    dispatch({type:REMOVE_FROM_CART,payload:{id, datetime:new Date().toString(),
        statusCode:200,
        requests:REMOVE_FROM_CART,
        response:"Removed from Cart",
        componentName:"Cards",}})
}