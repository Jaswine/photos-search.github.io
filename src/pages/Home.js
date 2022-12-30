import React from 'react';

function Home() {
  return (
      <div className="home">
        <div className="home__left">
          <h1>Hi! :]</h1>
        </div>
        <div className="home__right">
          <a href='/unsplash' className="link home__right__link">Unsplash</a>
            <a href='/pexels' className="link home__right__link">Pexels</a>
            <a href='/instructions' className="link home__right__link">Instruction</a>
        </div>
      </div>
    )
}

export default Home