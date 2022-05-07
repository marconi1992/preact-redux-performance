import { useState } from "react";
import Button from "../../components/MemoizedButton";

const Part2 = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="container mx-auto pt-6">
            <p>Counter: {count}</p>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
        </div>
    )
}

export default Part2;