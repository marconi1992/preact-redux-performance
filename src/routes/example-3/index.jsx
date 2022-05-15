import { useCallback, useReducer } from "react";
import Button from '../../components/MemoizedButton';
import TodoList from '../../components/TodoList';
import Input from "../../components/Input";

const initialState = {
    inputValue: "",
    items: [
        { status: "active", text: "Learn React" },
        { status: "finished", text: "Relax" }
    ]
};

const reducer = (state, action) => {
    switch(action.type) {
        case "addItem":
            return { 
                ...state, 
                items: [
                    ...state.items,
                    {
                        status: "active",
                        text: state.inputValue
                    }
                ],
                inputValue: "",
            };
        case "setInputValue":
            return {
                ...state,
                inputValue: action.payload.text,
            }
    }
}


const Example3 = () => {
    const [{ inputValue, items }, dispatch] = useReducer(reducer, initialState);

    const addItem = useCallback(() => dispatch({ type: "addItem"}), []);
    const setInputValue = useCallback((evt) => dispatch({
        type: "setInputValue",
        payload: { text: evt.target.value }
    }), []);

    const activeItems = items.filter((item) => item.status === "active")
 
    return (
        <div className="container-text mx-auto pt-6">
            <Input 
                className="mr-2"
                onChange={setInputValue}
                value={inputValue} />
            <Button onClick={addItem}>Add Item</Button>
            <div className="pt-4">
                <h3 className="font-medium">In Progress</h3>
                <TodoList className="mb-4" items={activeItems} />  
            </div>  
        </div>
    );
}

export default Example3;
