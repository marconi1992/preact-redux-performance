const WastedRenders = () => {
    return (
        <div className="container-text mx-auto pt-6 pb-6">
            <section className="mb-6">
                <h1 className="text-4xl mb-3">What is a wasted render?</h1>
                <p className="text-lg">The rendering process consists of getting the elements (output) from a component by calling the "render" function.</p>
                <img src="/assets/example.png" alt="example component" />
                <p className="text-lg mb-2">A <strong>"wasted render"</strong> would happen when the component renders again but the output is the same.</p>
            </section>
            <section className="mb-6">
                <h1 className="text-3xl mb-3">When a component renders again?</h1>
                <p className="text-lg mb-2">React components automatically renders again whenever:</p>
                <ul className="list-disc list-inside pl-4">
                    <li>The parent component gets updated</li>
                    <li>The component state changes</li>
                    <li>The component props change</li>
                </ul>
            </section>
        </div>
    )

}

export default WastedRenders;