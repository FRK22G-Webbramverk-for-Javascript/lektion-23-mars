const initialState = { // Här bestämmer vi allt som vi vill spara i vår Redux store i formen av ett objekt
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        default:
            return state
    }
}

export default reducer;