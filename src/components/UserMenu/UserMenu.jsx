import React from 'react'
import css from './UserMenu.module.scss'

const UserMenu = () => {
  return (
    <div className={css.userMenu}>
      <img src="/images/SVG/user.svg" alt="" className={css.userMenuImg} width={44} height={44}></img>
      <p className={css.userMenuName}>Name</p>
      <button className={css.userMenuBtn}><img src="/images/SVG/align-justify.svg" alt="" className={css.userMenuImg} width={32} height={32}></img></button>
    </div>
  )
}

export default UserMenu
