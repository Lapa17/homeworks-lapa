import {UserType} from "../HW8";


export const homeWorkReducer = (state: Array<UserType>, action: GeneralActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            switch (action.payload) {
                case "up":{

                    return [...state.sort(function (a, b) {
                        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0
                    })]
                }
                case "down": {
                    return [...state.sort(function (a, b) {
                        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                        if (nameA > nameB)
                            return -1
                        if (nameA < nameB)
                            return 1
                        return 0
                    })]
                }
                default: return state
            }
        }
        case 'check': {

            return [...state.filter(s => s.age >= action.payload)]
        }
        default: return state
    }
}

type GeneralActionType = SortUpPeropleACType | SortDownPeropleACType | CheckAgeOfPeropleACType

type SortUpPeropleACType = ReturnType<typeof SortUpPeopleAC>

export const SortUpPeopleAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}
type SortDownPeropleACType = ReturnType<typeof SortDownPeopleAC>

export const SortDownPeopleAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}

type CheckAgeOfPeropleACType = ReturnType<typeof CheckAgeOfPeopleAC>

export const CheckAgeOfPeopleAC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}