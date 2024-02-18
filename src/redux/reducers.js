import {createReducer} from '@reduxjs/toolkit';

export const cartReducer = createReducer ({
    cartItems: [],
    shipping:0,
    tax:0,
    subTotal:0,
    total:0,
},
(builder)=>{
    builder
    .addCase('addToCart', (state, action) =>{
        const item=action.payload;
        const itemExist=state.cartItems.find((i)=>i.id===item.id);
        if(itemExist){
            state.cartItems.forEach(i=>{
                if(i.id===item.id){
                    i.quantity+=1;
                }
            })
        }
        else{
            state.cartItems.push(item);
        }
    })

    .addCase('decrement',(state,action) =>{
        const item = state.cartItems.find((i)=>i.id===action.payload);
        if(item.quantity>1){
            state.cartItems.forEach((i)=>{
                if(i.id===item.id){
                    i.quantity-=1;
                }
            })
        }
    })
    
    .addCase('removeFromCart',(state, action) => {
        state.cartItems=state.cartItems.filter((i)=>i.id!==action.payload)
    })

    .addCase('calculatePrice',(state)=>{
        let sum=0;
        state.cartItems.forEach((i)=>sum+=i.price*i.quantity);
        state.subTotal=sum;
        state.shipping= state.subTotal>100 ? 0 :30;
        state.tax=+(state.subTotal*0.18).toFixed();
        state.total= state.subTotal +state.shipping +state.tax;
    })
})


