import {useEffect, useState} from "react";
import * as axios from 'axios'
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";


export const RequestComponent = () => {

    const [check, setCheck] = useState(false)
    const [reqResult, setReqResult] = useState('')

    const sendRequest = () => {
        const body = {success: check}
        axios.default.post(
            'https://neko-cafe-back.herokuapp.com/auth/test', body).then(response => {
            const { errorText, info } = response.data;
            console.log(response)
            setReqResult(errorText)
        }).catch(error => {
            console.error('There was an error!', error);
            setReqResult('There was an error!')
            });

    };

    return (
        <>
            <h1>HW13</h1>
            <SuperCheckbox checked={check} onChangeChecked={setCheck}/>
            <SuperButton onClick={sendRequest}>Send request</SuperButton>
            <div>{reqResult}</div>
        </>


    )
}