const CHANGE_THEME = 'CHANGE_THEME'

export type themeTypeAction = {
    type: typeof CHANGE_THEME
    themeValue: string
}

export type themesType = {
    theme: string,
    themes: Array<string>
}

const initState: themesType = {
    theme: 'some',
    themes: ['dark', 'red', 'some']
};

export const themeReducer = (state = initState, action: themeTypeAction): themesType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, theme: action.themeValue};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string) => ({type: CHANGE_THEME, themeValue: theme}) as const; // fix any