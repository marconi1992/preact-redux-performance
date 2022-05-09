const WhyReact = () => {
    return (
        <div className="container-text mx-auto pt-6 pb-6">
            <section className="mb-6">
                <h1 className="text-4xl mb-3">Why React?</h1>
                <p className="text-lg">Apart from making UI development easier, React mutates the DOM efficiently throughout a process called&nbsp;
                <a className="underline" href="https://reactjs.org/docs/reconciliation.html">"Reconciliation"</a>.</p>
                <img className="pt-6 pb-6" src="/assets/reconciliation.png" alt="example component" />
                <a className="underline" href="https://playcode.io/893287">Demo</a>
            </section>
        </div>
    );
};

export default WhyReact; 