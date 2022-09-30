import {useContext, useState} from "react";
import {generateMatrix} from "../utils/generateMatrix";
import {ColonyGeneratorInputs} from "./ColonyGeneratorInputs";
import {ColonyContext} from "../colonyContext";

export function ColonyGenerator () {
    const {colony, setColony} = useContext(ColonyContext);
    const [rowsInput, setRowsInput] = useState(colony.length);

    let columns = 0;

    if (colony.length > 0) {
        columns = colony[0].length;
    }

    const [columnsInput, setColumnsInput] = useState(columns);

    function handleClick (isRandomized) {
        setColony(generateMatrix(rowsInput, columnsInput, isRandomized));
    }

    return (
        <div className={"colonyGenerator"}>
            <h2>Create your own colony</h2>
            <ColonyGeneratorInputs rowsInput={rowsInput} columnsInput={columnsInput} setRowsInput={setRowsInput} setColumnsInput={setColumnsInput} />
            <div className={"colonyGeneratorButtons"}>
                <button onClick={handleClick}>Create Colony</button>
                <button onClick={() => handleClick(true)}>Randomize Colony</button>
            </div>
        </div>
    );
}