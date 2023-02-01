import React from "react";
import MiniAxiomRendered from "./MiniAxiomRendered";

export default class AxiomsMenuContent extends React.Component {
    render() {
        return (
            <ul>
                {this.props.data.map(axiom => (
                    <MiniAxiomRendered name={axiom.name} sentence={axiom.sentence} />
                ))}
            </ul>
        );
    }
}