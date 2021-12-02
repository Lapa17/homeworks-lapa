import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    filter: string
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={s.wrapper}>

            {mappedAffairs}
            <div>
                <SuperButton onClick={setAll} className={props.filter === 'all' ? s.active : ''}>All</SuperButton>
                <SuperButton onClick={setHigh} className={props.filter === 'high' ? s.active : ''}>High</SuperButton>
                <SuperButton onClick={setMiddle} className={props.filter === 'middle' ? s.active : ''}>Middle</SuperButton>
                <SuperButton onClick={setLow} className={props.filter === 'low' ? s.active : ''}>Low</SuperButton>
                {/*<button onClick={setAll}>All</button>*/}
                {/*<button onClick={setHigh}>High</button>*/}
                {/*<button onClick={setMiddle}>Middle</button>*/}
                {/*<button onClick={setLow}>Low</button>*/}
            </div>
        </div>
    )
}

export default Affairs
