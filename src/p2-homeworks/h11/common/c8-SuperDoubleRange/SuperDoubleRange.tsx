import React, {ChangeEvent} from 'react'
import './superDoubleStyles.css'
import {DefaultInputPropsType} from "../c7-SuperRange/SuperRange";





type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number
    max: number
    setValue:(num:number)=> void
    setValue2:(num:number)=> void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
        min, max, onChange,
        setValue, setValue2
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange([min,+e.currentTarget.value])
        if (+e.currentTarget.value >= min) {
            setValue(+e.currentTarget.value)
        }

    }
    const onChangeCallback2 = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange([+e.currentTarget.value,max])
        if (+e.currentTarget.value <= max) {
            setValue2(+e.currentTarget.value)
        }

    }


    return (
        <>
            <input
                type="range"
                min="0"
                max="100"
                value={min < max ? min : max}
                className="thumb thumb--zindex-3"
                onChange={onChangeCallback2}
            />
            <input
                type="range"
                min="0"
                max="100"
                value={max > min ? max : min}
                className="thumb thumb--zindex-4"
                onChange={onChangeCallback}
            />
            <div className="slider">
                <div className="slider__track"/>
                <div className="slider__range"/>
            </div>
        </>
    )
}

export default SuperDoubleRange
