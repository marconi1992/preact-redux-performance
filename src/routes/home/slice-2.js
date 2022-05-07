import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    items: [
        { status: "active", text: "Learn React" },
        { status: "finished", text: "Relax" }
    ],
};

const slice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        addItem: (state, { payload }) => {
            state.items.push({
                status: "active",
                text: payload.text,
            });
        }
    }
})

export const { setItemInputText, addItem } = slice.actions

export default slice.reducer;