import React from 'react'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: any) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = !error ? s.normal: s.error // need to fix with (?:)
    const errorClass = !error ? s.errorHide: s.errorMessage
    const wrapperClass= !error ? s.wrapper: s.wrapperWithEror

    return (
        <div className={wrapperClass}>
            {/*<input value={name} onChange={setNameCallback} className={inputClass}/>*/}
            {/*<span className={errorClass}>{error}</span>*/}
            <SuperInputText onChange={setNameCallback} value={name} className={inputClass} error={error}/>
            {/*<button onClick={addUser} className={s.addBtn}>Add</button>*/}
            <SuperButton onClick={addUser}>Add</SuperButton>
            <span className={s.counter}>Total users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
