import { connect } from "react-redux"
import { setItemInputText } from "./slice";
import Input from "../../components/Input";

const ItemInputText = ({setItemInputText, itemInputText}) => {
    return (
        <Input 
            className="mr-2"
            onChange={(evt) => setItemInputText(evt.target.value)}
            value={itemInputText}
        />
    );
}

const mapStateToProps = (state) => ({
    itemInputText: state.itemInputText,
});

const mapDispatchToProps = (dispatch) => ({
    setItemInputText(text) {
        dispatch(setItemInputText({ text }))
    },
}); 

export default connect(mapStateToProps, mapDispatchToProps)(ItemInputText);