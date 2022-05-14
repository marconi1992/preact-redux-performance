import { useCallback, useReducer } from "react";
import Button from "../../components/MemoizedButton";

const reducer = (state, action) => {
    switch(action.type) {
        case "INCR":
            return state + 1;
        default:
            return state;
    }
}

const Example2 = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    const increment = useCallback(() => dispatch({ type: "INCR" }), []);

    return (
        <div className="container-text mx-auto pt-6">
            <p className="mb-2">Counter: {count}</p>
            <Button onClick={increment}>Increment</Button>
        </div>
    )
}

export default Example2;