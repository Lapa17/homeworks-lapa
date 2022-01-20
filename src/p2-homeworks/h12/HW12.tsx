import React, {Dispatch} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectTheme, selectThemes} from "../h10/bll/selector";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC, themeTypeAction} from "./bll/themeReducer";
import s from "./HW12.module.css";

function HW12() {

    const theme = useSelector(selectTheme); // useSelector
    const themes = useSelector(selectThemes); // useSelector


    const dispatch = useDispatch<Dispatch<themeTypeAction>>()

    // useDispatch, onChangeCallback

    const onChangeCallback = (value: string) => {

        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themes} onChangeOption={onChangeCallback} value={theme}/>
            <hr/>
        </div>
    );
}

export default HW12;
