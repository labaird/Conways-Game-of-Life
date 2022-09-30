import {copyColony} from "../../utils/generateNext/generateNextColony";
import React, {useContext} from "react";
import {ReactComponent as GermIcon} from './germ-alive.svg';
import {ReactComponent as GermDeadIcon} from './germ-dead.svg';
import {ColonyContext} from "../../colonyContext";

export function Cell(props) {
    const {row, column} = props;
    let {isAlive} = props;
    const {colony, setColony} = useContext(ColonyContext);

    function handleClick() {
        const newColony = copyColony(colony);

        newColony[row][column] = !isAlive;

        setColony(newColony);
    }

    return (
        <button className={`cell ${isAlive ? 'alive' : 'dead'}`} onClick={handleClick}>
            {isAlive ? <GermIcon /> : <GermDeadIcon />}
        </button>
    );
}