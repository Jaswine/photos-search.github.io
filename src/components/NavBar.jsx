import React from 'react'

function NavBar() {
  return (
    <header>
        <h2 className="header__logo">Photos Search</h2>
        <div className="header__menu">
            <a href='/unsplash' className="link">Unsplash</a>
        </div>
    </header>
  )
}

export default NavBar