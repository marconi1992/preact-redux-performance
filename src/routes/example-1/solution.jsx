import { useState, useCallback } from "preact/hooks";
import Button from "../../components/MemoizedButton";

const Example1 = () => {
    const [message, setMessage] = useState("");

    const showMessage = useCallback(() => setMessage("Hello React"), [])

    return (
        <div className="container-text mx-auto pt-6">
            <p className="mb-2">{message}</p>
            <Button onClick={showMessage}>Click here</Button>
        </div>
    )
}

export default Example1;