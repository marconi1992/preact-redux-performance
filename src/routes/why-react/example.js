import { render } from 'preact';

const renderDOM = () => {
    const div = document.createElement("div");
    div.className = "font-medium max-w-sm rounded overflow-hidden border p-2";

    const pre = document.createElement("pre");
    pre.innerText = (new Date()).toLocaleTimeString();

    div.append(
        "Rendering with DOM API",
        pre
    )

    document.getElementById("dom").replaceChildren(
        div
    )
}

const renderPreact = () => {
    render(
        <div className="font-medium max-w-sm rounded overflow-hidden border p-2">
            Rendering timer with Preact
            <pre>{(new Date()).toLocaleTimeString()}</pre>
        </div>,
        document.getElementById("preact"),
    )
}

const renderBoth = () => {
    renderDOM()
    renderPreact();
}

export default () => {
    renderBoth();
    return setInterval(() => {
        renderBoth();
    }, 1000)
}