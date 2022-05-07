import { createSelector } from "@reduxjs/toolkit"

const selectItems = (state) => state.items;

export const selectActiveItems = createSelector(
    selectItems,
    (items) => items.filter((item) => item.status === "active")
)

export const selectFinishedItems = createSelector(
    selectItems,
    (items) => items.filter((item) => item.status === "finished")
)