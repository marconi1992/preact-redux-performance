import { connect } from "react-redux";
import TodoList from "../../components/TodoList";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { setItemInputText, addItem } from "./slice";

const Kanban = ({ items, itemInputText, setItemInputText, addItem }) => {
    const activeItems = items.filter((item) => item.status === "active");
    const finishedItems = items.filter((item) => item.status === "finished");

    return (
        <div className="container-text mx-auto pt-6">
            <Input className="mr-2" onChange={(evt) => setItemInputText(evt.target.value)} value={itemInputText} />
            <Button className="mb-4" onClick={addItem}>Add item</Button>
            <h3 className="font-medium">In Progress</h3>
            <TodoList items={activeItems} />
            <h3 className="font-medium">Done</h3>
            <TodoList items={finishedItems} />
        </div>
    );
};  

const mapStateToProps = (state) => ({
    items: state.items,
    itemInputText: state.itemInputText,
});

const mapDispatchToProps = (dispatch) => ({
    setItemInputText(text) {
        dispatch(setItemInputText({ text }))
    },
    addItem() {
        dispatch(addItem())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);