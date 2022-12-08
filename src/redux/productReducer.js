import { SET_PRODUCT_LIST } from "./constant";

export const productData=(data=[],action)=>{
    // if(action.type===ADD_TO_CART)
    // {
    //     console.warn("add to cart",action)
    //     return data;
    // }
    // else
    // {
    //     return "no action called";
    // }
    // return 200;
    switch(action.type)
    {
        case SET_PRODUCT_LIST:
            console.warn("product",action)
            return [...action.data];
        default:
            return data;
    }
}