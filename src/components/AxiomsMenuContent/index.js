import React from "react";
import AxiomThumbnail from "./AxiomThumbnail";
import './style.css';

export default class AxiomsMenuContent extends React.Component {
    render() {
        return (
            <ul className="axiom-content-list">
                {this.props.data.map(axiom => (
                    <AxiomThumbnail name={axiom.name} sentence={axiom.sentence} />
                ))}
            </ul>
        );
    }
}