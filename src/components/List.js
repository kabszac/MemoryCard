import React, {useRef, useState, } from 'react';
import arrayShuffle from 'array-shuffle'
import Listrender from './Listrender';
import Header from './Header';
import foods from './Object';

const List = () => {
    const people = [1,2,3,4,5,6,7,8]
    const [change, setChange] = useState(foods)
    const [score, setScore] = useState(0)
    const [highscore, setHighScore] = useState(0)
    const [addArr, setAddArr] = useState([])

      //const buttonRef = useRef(null)
    // const handleClick = () =>{
    //     for (let i = people.length -1; i >0; i--){
    //         let j = Math.floor(Math.random()  * (i+1))
    //         let temp = people[i]
    //         people[i] = people[j]
    //         people[j] = people[temp]
    //     }
    // } 

     
    const handleScore = () => {
        setScore((prevScore) => prevScore +1 )
    } 

    const handleHighscore = (score) => {
        setHighScore(score)
    }

    const handleArr = (cardName) => {
        setAddArr((prevArr) => [...prevArr, cardName])
        console.log(addArr)
    }

    const reset = () => {
        setScore(0);
        setAddArr([]);
      };

    const handleGameLogic = (cardName) => {
        if (!addArr.includes(cardName)){
            handleArr(cardName)
            handleScore()
            handleShuffled()
        }else{
            handleHighscore(score)
            reset()
            handleShuffled()
        }
    }

    const handleShuffled = () => {
        const shuffle = arrayShuffle(foods)
        console.log(shuffle)
        setChange(shuffle)
    }
    
    //useEffect(handleGameLogic, [])
    return (
        <div>
            <Header score={score} highScore={highscore}/>
            <div className='listDiv'>
                {change.map(food => <Listrender key= {food.id} food = {food} handleGameLogic= {handleGameLogic} />)}
            </div>
        </div>
    );
};

export default List;