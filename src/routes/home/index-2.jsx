import { connect } from "react-redux";
import TodoList from "../../components/TodoList";
import { selectActiveItems, selectFinishedItems } from "./selectors";
import AddItem from "./AddItem";

const Kanban = ({ activeItems, finishedItems}) => {
    return (
        <div className="container mx-auto pt-6">
            <AddItem />
            <h3 className="font-medium">In Progress</h3>
            <TodoList items={activeItems} />
            <h3 className="font-medium">Done</h3>
            <TodoList items={finishedItems} />
        </div>
    );
};  

const mapStateToProps = (state) => ({
    activeItems: selectActiveItems(state),
    finishedItems: selectFinishedItems(state),
});

export default connect(mapStateToProps)(Kanban);