import React from 'react'
import './superDoubleStyles.css'
import {DefaultInputPropsType} from "../c7-SuperRange/SuperRange";





type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number
    max: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
        min, max, onChange
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <input
                type="range"
                min="0"
                max="1000"
                className="thumb thumb--zindex-3"
            />
            <input
                type="range"
                min="0"
                max="1000"
                className="thumb thumb--zindex-4"
            />
            <div className="slider">
                <div className="slider__track"/>
                <div className="slider__range"/>
            </div>
        </>
    )
}

export default SuperDoubleRange
