const SET_LOADING = 'SET_LOADING'

export type LoadingType = {
    isLoad: boolean,
}

export type LoadingActionType = {
    type: typeof SET_LOADING,
    isLoad: boolean,
}

const initState: LoadingType = {
    isLoad: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingType => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return {...state, isLoad: action.isLoad}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoad: boolean) => ({type: SET_LOADING, isLoad}) as const // fix any