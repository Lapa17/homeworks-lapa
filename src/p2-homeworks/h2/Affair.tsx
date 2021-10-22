import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {}// need to fix
    //props.deleteAffairCallback(affair._id)

    return (
        <div>
            <span>тест текст</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
