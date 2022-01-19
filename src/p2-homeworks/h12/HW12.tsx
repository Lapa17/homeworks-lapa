import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../h10/bll/selector";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { changeThemeC, themeTypeAction } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector(selectTheme); // useSelector

    const dispatch = useDispatch<Dispatch<themeTypeAction>>()

    // useDispatch, onChangeCallback

    const onChangeCallback = () =>{
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
                <SuperSelect options={themes} onChangeOption={onChangeCallback}/>
            <hr/>
        </div>
    );
}

export default HW12;
