import './styles.css'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer'
import { INCREMENT, DECREMENT } from './redux/types'
import { asyncIncrement, decrement, increment } from './redux/actions'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, 0, applyMiddleware(thunk))
window.store = store;

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state;
})
store.dispatch({ type: "START" })

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', () => {
    
})
