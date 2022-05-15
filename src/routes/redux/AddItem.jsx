import Input from "../../components/Input";
import Button from "../../components/MemoizedButton";
import { useState, useCallback } from "react";
import { connect } from "react-redux";
import { addItem } from "./slice";

const AddItem = ({ addItem }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = useCallback((evt) => setInputValue(evt.target.value), []);

    const onAddItem = useCallback(() => {
        addItem(inputValue);
        setInputValue("")
    }, [addItem, setInputValue, inputValue]);

    return (
        <>
            <Input className="mr-2" onChange={onInputChange} value={inputValue} />
            <Button className="mb-4" onClick={onAddItem}>Add item</Button>
        </>  
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem(text) {
        dispatch(addItem({ text }))
    }
});

export default connect(null, mapDispatchToProps)(AddItem)