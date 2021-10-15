import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

const Message = (props:MessagePropsType) => {
    return (
        <div className={s.message_wrapper}>
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.text_wrapper}>
            <div className={s.name}>
                {props.name}
            </div>
            <div className={s.message}>
                {props.message}
            </div>
            <div className={s.time}>
                {props.time}
            </div>
            </div>
        </div>
    )
}

export default Message
