import { createStore } from "redux";

const initialState = {
    name:"",
    age:"",
    users:[{
        id:"1",
        pic:"pic10.jpeg",
        username:"Jan Thomas",
        userage:20
    },{
        id:"2",
        pic:"pic2.jpeg",
        username:"Kelin Nickola",
        userage:23
    }]
}

const crudReducer = (state=initialState,action) => {
    if(action.type === 'name'){
        return {
            ...state,
            name: action.value,
        }
    }
    if(action.type === 'age'){
        return {
            ...state,
            age: action.value,
        }
    }
    if(action.type === 'users'){
        return {
            ...state,
            users:action.value
        }
    }
    if(action.type === 'photo'){
        return {
            ...state,
            photo:action.value
        }
    }

    return state;
}

const crudStore = createStore(crudReducer);
export default crudStore;