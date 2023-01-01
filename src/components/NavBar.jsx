import React from 'react'

function NavBar() {
  return (
    <header>
      <a href="/"><h2 className="header__logo">Photos Search</h2></a>
        <div className="header__menu">
            <a href='/unsplash' className="link">Unsplash</a>
            <a href='/pexels' className="link">Pexels</a>
            <a href='/pixebay' className="link">Pixebay</a>
        </div>
    </header>
  )
}

export default NavBar