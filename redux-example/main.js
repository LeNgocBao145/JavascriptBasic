// import { createStore } from 'https://cdn.skypack.dev/redux';

const initialState = 0;

function createStore(reducer){
    let state = reducer(undefined, {});
    const subscribe = [];
    return {
        getState(){
            return state;
        },
        dispatch(action){
            state = reducer(state, action)
            subscribe.forEach(subscriber => subscriber())
        },
        subscribe(subscriber){
            subscribe.push(subscriber)
        }
    }
}

// Actions
function actionDeposit(payload){
    return {
        type: 'DEPOSIT',
        payload: payload
    }
}

function actionWithdraw(payload){
    return {
        type: 'WITHDRAW',
        payload: payload
    }
}

//Reducer
function reducer(state = initialState, action){
    switch (action.type){
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            if (state > 0){
                return state - action.payload;
            }
        default:
            return state;
    }
}

//Store
const store = createStore(reducer);

const heading = document.querySelector('#balance')
const deposit = document.querySelector('#deposit')
const withdraw = document.querySelector('#withdraw')

deposit.onclick = () => {
    store.dispatch(actionDeposit(10));
}

withdraw.onclick = () => {
    store.dispatch(actionWithdraw(10));
}

store.subscribe(render);

function render(){
    
    heading.innerText = store.getState();
}

render();