import pensionReducer from './PensionerSlice';
import bankReducer from './BankSlice';
import pensionerReducer from './PensionSlice';
import { configureStore } from "@reduxjs/toolkit";

console.log('store');
const store = configureStore(
    {
        reducer: {
            pensioner: pensionerReducer,
            pension: pensionReducer,
            bank: bankReducer
            
        }
    }
);

export default store;