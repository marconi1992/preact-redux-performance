import { useCallback, useReducer } from "react";
import Button from '../../components/MemoizedButton';
import TodoList from '../../components/TodoList';
import Input from "../../components/Input";

const initialState = {
    itemInputText: "",
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
                        text: state.itemInputText
                    }
                ],
                itemInputText: "", 
            };
        case "setItemInputText":
            return {
                ...state,
                itemInputText: action.payload.text,
            }
    }
}


const Example3 = () => {
    const [{ itemInputText, items }, dispatch] = useReducer(reducer, initialState); 

    const addItem = useCallback(() => dispatch({ type: "addItem"}), []);
    const setItemInputText = useCallback((evt) => dispatch({
        type: "setItemInputText",
        payload: { text: evt.target.value }
    }), []);

    const activeItems = items.filter((item) => item.status === "active")
 
    return (
        <div className="container-text mx-auto pt-6">
            <Input 
                className="mr-2"
                onChange={setItemInputText}
                value={itemInputText} />
            <Button onClick={addItem}>Add Item</Button>
            <div className="pt-4">
                <h3 className="font-medium">In Progress</h3>
                <TodoList className="mb-4" items={activeItems} />  
            </div>  
        </div>
    );
}

export default Example3;
