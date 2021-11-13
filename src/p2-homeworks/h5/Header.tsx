import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routes'
import s from './Header.module.css'

function Header() {

    
    return (
        <div className={s.wrapper}>
            <NavLink className={({ isActive }) =>(isActive ? s.active+' '+ s.link : s.link)} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink className={({ isActive }) =>(isActive ? s.active+' '+ s.link : s.link)} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={({ isActive }) =>(isActive ? s.active+' '+ s.link : s.link)} to={PATH.JUNIOR_PlLUS}>JuniorPlus</NavLink>
            <div className={s.menuBtn}></div>

        </div>
    )
}

export default Header
