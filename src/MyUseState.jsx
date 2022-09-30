let state = undefined;


function myUseState (defaultState) {
    state = defaultState;

    function changeState (newState) {
        state = newState;
    }

    return [state, changeState];
}

//create a state called x with init of 1
//log init value
//change state of x to 2
//log new value

const [x, setX] = myUseState({value: 1});
console.log(x);
setX({value: 2});
console.log(x);