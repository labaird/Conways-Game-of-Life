import React, {useContext} from 'react';
import {Cell} from "./Cell/Cell";
import {ColonyContext} from "../colonyContext";


export function Colony () {
    const {colony, setColony} = useContext(ColonyContext);
    const rows = [];

    for (let row = 0; row < colony.length; row = row + 1) {
        const buttons = [];

        for (let column = 0; column < colony[row].length; column = column + 1) {
            buttons.push(<Cell key={`r${row}c${column}`} isAlive={colony[row][column]} row={row} column={column}/>);
        }

        const newRow = <div key={`r${row}`} className={'row'}>{buttons}</div>

        rows.push(newRow);
    }


    return <div className={'grid'}>{rows}</div>;
}