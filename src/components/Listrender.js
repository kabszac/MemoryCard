import React from 'react';

const Listrender = ({food, handleGameLogic}) => {
    return (

        <div className='foodDiv'>
            <button className='listButton' onClick={() => handleGameLogic(food)}> <img className='listImage' src={food.image}/> <div className='listFood'>{food.name} </div></button>
        </div>
        
    );
};

export default Listrender;