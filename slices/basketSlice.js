import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items :[] 
}

export const basketSlice  =createSlice({
    name: "basket",
    initialState,
    reducers : {
        addToBasket : (state , action)=>{
            state.items = [...state.items, action.payload]
        },
        removeFromBasket:(state,action)=>{
            // console.log(basketItem.id)
            const index = state.items.findIndex(basketItem =>{
                basketItem.id === action.payload
            })

            let newBasket = [...state.items];
            if(index >= 0){

                newBasket.splice(index,1)

            }else{
                console.warn(
                    `Can't remove product (id : ${action.payload}) as it is not in the basket`
                )
            }

        state.items = newBasket;

        },
    }
}); 

export const {addToBasket , removeFromBasket} = basketSlice.actions;

export const selectItems = (state)=>state.basket.items;
export default basketSlice.reducer;