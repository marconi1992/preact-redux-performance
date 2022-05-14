import { useState } from "react";
import Button from "../../components/MemoizedButton";

const Example2 = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="container-text mx-auto pt-6">
            <p className="mb-2">Counter: {count}</p>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
        </div>
    )
}

export default Example2;