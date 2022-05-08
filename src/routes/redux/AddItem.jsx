import Input from "../../components/Input";
import Button from "../../components/MemoizedButton";
import { useState, useCallback } from "react";
import { connect } from "react-redux";
import { addItem } from "./slice";

const AddItem = ({ addItem }) => {
    const [itemInputText, setItemInputText] = useState("");

    const onInputChange = useCallback((evt) => setItemInputText(evt.target.value), [setItemInputText]);

    const onAddItem = useCallback(() => {
        addItem(itemInputText);
        setItemInputText("")
    }, [addItem, setItemInputText, itemInputText]);

    return (
        <>
            <Input className="mr-2" onChange={onInputChange} value={itemInputText} />
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