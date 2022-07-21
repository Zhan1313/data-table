const SET_ITEMS = 'SET_ITEMS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initState = {
    items: [],
    currentPage: 1,
    offSet: 10,
    totalCount: 0,
    startIndex: 0,
    perPage: 10
}

export const goodsReducer = (state = initState, action) => {
    switch(action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.items.length,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
                startIndex: (action.payload - 1) * state.offSet,
            }
        default:
            return state
    }
}

export const setItems = items => ({
    type: SET_ITEMS,
    payload: items
})

export const setCurrentPage = page => ({
    type: SET_CURRENT_PAGE,
    payload: page
})