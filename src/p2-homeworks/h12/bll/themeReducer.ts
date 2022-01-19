import { type } from "os";

const CHANGE_THEME = 'CHANGE_THEME'

export type themesType = 'dark'| 'red' | 'some' | string


export type themeTypeAction = {
    type: typeof CHANGE_THEME
    themeValue:themesType
}

const initState = 'some';

export const themeReducer = (state = initState, action: themeTypeAction): themesType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return state = action.themeValue;
        }
        default: return state;
    }
};

export const changeThemeC = (theme:themesType) => ({type:CHANGE_THEME,themeValue: theme }) as const; // fix any