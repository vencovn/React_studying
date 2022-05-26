import {useState} from "react";

function useInput(defaultState = '') {
    let [value, setValue] = useState(defaultState);

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange
    }
}
export default useInput;