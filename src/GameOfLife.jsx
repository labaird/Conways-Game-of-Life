import './App.css';
import React, {useState, useEffect} from "react";
import {Colony} from "./Colony/Colony";
import {generateNextColony} from "./utils/generateNext/generateNextColony";
import {ColonyGenerator} from "./ColonyGenerator/ColonyGenerator";
import {ReactComponent as Arrow} from './drawn-arrow.svg';
import {ColonyContext} from "./colonyContext";

//move all tests to jest
//design own starting colony
//automatically go through generations
//polish (remove everything from create react app and write my own)
//random germ colony generator

const defaultColony = [
    [true, true, true],
    [false, true, false],
    [true, false, true]
];

function GameOfLife() {
    const [colony, setColony] = useState(defaultColony);
    const [autoGenerateClicked, setAutoGenerateClicked] = useState(false);

    useEffect(() => {
        const nextColony = generateNextColony(colony);
        let timeoutId;

        if (autoGenerateClicked) {
            timeoutId = setTimeout(() => {
                setColony(nextColony);
            }, 1000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [colony, setColony, autoGenerateClicked]);

    function handleClick() {
        setColony(generateNextColony(colony));
    }

    function handleAutoGenerate () {
        setAutoGenerateClicked(!autoGenerateClicked);
    }

    return (
        <ColonyContext.Provider value={{colony, setColony}}>
            <div className='app'>
                <h1>Game of Life</h1>
                <ColonyGenerator/>
                <div className='gridBody'>
                    <Colony/>
                    <Arrow className='arrow'/>
                    <p>Click to change cells</p>
                </div>
                <button onClick={handleClick}>Next Generation</button>
                <button onClick={handleAutoGenerate}>{autoGenerateClicked ? 'Stop Auto-Generate' : 'Auto-Generate'}</button>
            </div>
        </ColonyContext.Provider>
    );
}

export default GameOfLife;
