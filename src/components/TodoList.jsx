import { memo } from "react";

const TodoList = ({ className, items }) => {
    return (
        <ul className={className}>
            {items.map(({ text }) => (<li key={text}>{text}</li>))}
        </ul>
    )
};

export default memo(TodoList);