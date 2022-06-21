import { legacy_createStore as createStore} from 'redux';
//import { configureStore } from "@reduxjs/toolkit";
const intState = {counter:0,showCounter:true}

const counterReducer =(state =intState,action) => {
    if(action.type ==='increment'){
        return{
            counter:state.counter +1,
            showCounter:state.showCounter
        }
    };
    if(action.type ==='increase'){
        return{
            counter:state.counter +action.amount,
            showCounter:state.showCounter
        }
    }
    if(action.type ==='decrement'){
        return{
            counter:state.counter -1,
            showCounter:state.showCounter
        }
    };
    if(action.type ==='toggle'){
        return{
            counter:state.counter,
            showCounter:!state.showCounter
        }
    }
return state;

}

const store =createStore(counterReducer);

export default store;