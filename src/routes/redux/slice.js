import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    items: [
        { status: "active", text: "Learn React" },
        { status: "finished", text: "Relax" }
    ],
    itemInputText: "",
};

const slice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        setItemInputText: (state, { payload }) => {
            state.itemInputText = payload.text;
        },
        addItem: (state) => {
            state.items.push({
                status: "active",
                text: state.itemInputText,
            });
            state.itemInputText = "";
        }
    }
})

export const { setItemInputText, addItem } = slice.actions

export default slice.reducer;