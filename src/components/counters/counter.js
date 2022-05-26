import useCounter from "../../hooks/useCounter";

function Counter () {

    let {count, add, subtract} = useCounter();

    return (
        <div>
            <div>Счетчик: {count}</div>
            <br />
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
        </div>
    );
}

export default Counter;