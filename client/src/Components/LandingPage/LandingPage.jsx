import React from 'react';
import {Link} from 'react-router-dom';
import style from './LandingPage.module.css';


function LandingPage() {
    return (
      <div className={style.landingpage}>
        <div className={style.msgContainer}>
          <p className={style.title}>Welcome to Videogames</p>
          <p className={style.text}>Press Start to play</p>
          <Link to='/home'>
            <button className={style.button} type='submit'>Start</button>
          </Link>
        </div>
      </div>
    );
}
  
export default LandingPage;