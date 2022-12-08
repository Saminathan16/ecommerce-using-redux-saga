import { ADD_TO_CART } from "./constant"
import { REMOVE_TO_CART } from "./constant"
import { EMPTY_TO_CART } from "./constant"

export const addToCart=(data)=>{
    console.warn("add action is called",data)
    return {
        type:ADD_TO_CART,
        data
    }
}
export const removeToCart=(data)=>{
    console.warn("remove action is called",data)
    return {
        type:REMOVE_TO_CART,
        data
    }
}

export const emptyToCart=()=>{
    console.warn("empty action is called",)
    return {
        type:EMPTY_TO_CART,
        
    }
}