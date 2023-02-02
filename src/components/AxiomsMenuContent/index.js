import React from "react";
import MiniAxiomRendered from "./MiniAxiomRendered";
import './style.css';

export default class AxiomsMenuContent extends React.Component {
    render() {
        return (
            <ul className="axiom-content-list">
                {this.props.data.map(axiom => (
                    <MiniAxiomRendered name={axiom.name} sentence={axiom.sentence} />
                ))}
            </ul>
        );
    }
}