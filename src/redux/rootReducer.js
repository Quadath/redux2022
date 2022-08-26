export function rootReducer(state, action) {
    switch(action.type) {
        case "INC": {
            return state + 1
        }
        case "DEC": {
            return state - 1
        }
    }
    return state
}