import { ADD_TO_CART, REMOVE_TO_CART,EMPTY_TO_CART } from "./constant";

export const cartData=(data=[],action)=>{
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
        case ADD_TO_CART:
            console.warn("add to cart",action)
            return [action.data, ...data];
        case REMOVE_TO_CART:
            console.warn("remove to cart",action)
            //data.length=data.length?data.length-1:[];
            const remainingItems=data.filter((items)=>
                items.id!==action.data
            )
            return [...remainingItems];
        case EMPTY_TO_CART:
            console.warn("empty to cart",action)
            data=[];
            return [...data];
        default:
            return data;
    }
}