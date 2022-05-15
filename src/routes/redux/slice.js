import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    inputValue: "",
    items: [
        { status: "active", text: "Learn React" },
        { status: "finished", text: "Relax" }
    ],
};

const slice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        setInputValue: (state, { payload }) => {
            state.inputValue = payload.text;
        },
        addItem: (state) => {
            state.items.push({
                status: "active",
                text: state.inputValue,
            });
            state.inputValue = "";
        }
    }
})

export const { setInputValue, addItem } = slice.actions

export default slice.reducer;