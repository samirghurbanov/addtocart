import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: []
    },
    reducers: {
        addProduct(state, {payload}){
            state.products.push(payload)
        },
        deleteProduct(state, {payload}){
            return{
                ...state, products: state.products.filter(item => item.id !== payload)
            }
        },
        increment(state, {payload}){
            state.products = state.products.filter(item => (item.id === payload) ? {...item, count: item.count < 10 ? item.count += 1 : 10} : item)
        },
        decrement(state, {payload}){
            state.products = state.products.filter(item => (item.id === payload) ? {...item, count: item.count > 1 ? item.count -= 1 : 10} : item)
        },
    }
})

export default productSlice.reducer
export const {addProduct,deleteProduct,increment,decrement} = productSlice.actions