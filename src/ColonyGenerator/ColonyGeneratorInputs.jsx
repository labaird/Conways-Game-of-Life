export function ColonyGeneratorInputs(props) {
    const {rowsInput, setRowsInput, columnsInput, setColumnsInput} = props;

    function handleRowChange(event) {
        setRowsInput(event.target.value);
    }

    function handleColumnChange(event) {
        setColumnsInput(event.target.value);
    }

    return (
        <>
            <label htmlFor={"rowInput"}>Rows:</label>
            <input type={"number"} min={"0"} id={"rowInput"} value={rowsInput} onChange={handleRowChange}/>
            <label htmlFor={"columnInput"}>Columns:</label>
            <input type={"number"} min={"0"} id={"columnInput"} value={columnsInput} onChange={handleColumnChange}/>
        </>

    );
}