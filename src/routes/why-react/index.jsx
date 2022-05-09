import { useEffect } from "react";
import init from "./example"

const WhyReact = () => {
    useEffect(() => {
        const interval = init();

        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        
    }, [])
    return (
        <div className="container-text mx-auto pt-6 pb-6">
            <section className="mb-6">
                <h1 className="text-4xl mb-3">Why React?</h1>
                <p className="text-lg">Apart from making UI development easier, React improves performance by mutating the DOM efficiently throughout a process called&nbsp;
                <a className="underline" href="https://reactjs.org/docs/reconciliation.html">"Reconciliation"</a>.</p>
                <img className="pt-6 pb-6" src="/assets/reconciliation.png" alt="example component" />
            </section>
            <p className="text-lg mb-3">Example</p>
            <div id="dom" className="mb-4" />
            <div id="preact" />
        </div>
    );
};

export default WhyReact; 