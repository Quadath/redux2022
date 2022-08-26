import './styles.css'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer'
import { asyncIncrement ,changeTheme, decrement, disableButtons, increment } from './redux/actions'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, applyMiddleware(thunk))
window.store = store;

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})


asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
    store.dispatch(disableButtons())
})

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
    ? 'dark'
    : 'light'
    store.dispatch(changeTheme(newTheme))
})

//https://www.youtube.com/watch?v=YdYyYMFPa44

store.subscribe(() => {
    const state = store.getState()
    console.log(state)
    counter.textContent = state.counter;
    document.body.className = state.theme.value;

    [addBtn, subBtn, themeBtn, asyncBtn].forEach(btn => {
        typeof(state.theme.disabled)
        btn.disabled = state.theme.disabled
    })
})
store.dispatch({ type: "START" })