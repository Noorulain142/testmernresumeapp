import styles from './styles.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const navbar = ({ portfolioData }) => {

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }
  return (
    <div>
      <nav className={styles.navbar}>
        <h1>User Portfolio App</h1>
        <span className="navbar-text">
        </span>
        <Link to='/portfolio' state={{ portfolioData }}><button className={styles.white_btn} >Portfolio</button></Link>
        <button className={styles.white_btn} onClick={handleLogout}>log out</button>
      </nav>
    </div>
  )
}

export default navbar




