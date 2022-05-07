import { useState } from "react";
import Button from "../../components/Button";

const Part1 = () => {
    const [message, setMessage] = useState("");

    return (
        <div className="container-text mx-auto pt-6">
            <p>{message}</p>
            <Button onClick={() => setMessage("Hello React")}>Click here</Button>
        </div>
    )
}

export default Part1;