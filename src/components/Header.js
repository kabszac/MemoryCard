import React from 'react';
import memory from '../images/memory.jpg'
import 'animate.css';


const Header = ({score, highScore}) => {
    return (
        <header className='headerClass'>
            <div className='headerImage animate__animated animate__slideInLeft animate__delay-0.7' >
                <img src={memory} alt ='memory'/>
            </div>
            <div className='headerTitle animate__animated animate__bounceInDown animate__delay-0.9s'>
                Memory Card Game 
            </div>
            <div className='HeaderScore animate__animated animate__slideInRight animate__delay-0.5s'>
                <div className='score'>Score: {score}</div>
                <div className='highscore'>HighScore: {highScore}</div>
            </div>
        </header>
    );
};

export default Header;