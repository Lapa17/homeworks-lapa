import React from 'react'
import s from '../../p2-homeworks/styles/Page404.module.css'

function Error404() {
    return (
        <div className={s.mainWrapper}>
            <div className={s.wrapper}>
                <div className={s.item}>
                    <h1 className={s.errorHeader}>Oops!</h1>
                    <p>It seems like wrong page</p>
                </div>
                <img src="https://public-assets.toggl.com/b/static/404Image-3aea842baa39f40a21036fa29832c57d.svg" />

            </div>
        </div>
    )
}

export default Error404
