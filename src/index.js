import './styles.css'
import { createStore } from './createStore'
import { rootReducer } from './redux/rootReducer'

const store = createStore(rootReducer, 0)

window.store = store;

store
