import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {selectLoading} from "./bll/selector";
import {Dispatch} from "redux";
import {loadingAC, LoadingActionType} from "./bll/loadingReducer";
import { Puff } from 'react-loading-icons'
import s from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector(selectLoading)
    const dispatch = useDispatch<Dispatch<LoadingActionType>>();


    const setLoading = () => {
        dispatch(loadingAC(!loading))
        setTimeout(()=>dispatch(loadingAC(loading)), 2000)
        console.log('loading...')
    };

    return (
        <div >
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.wrapper}><Puff  stroke="#c284ff" width='50px' height='50px'/></div>
                ) : (
                    <div className={s.wrapper}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
