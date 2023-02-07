import React from "react";
import './style.css';

export default class RuleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToolboxOpen: false };

        this.updateToolbox = this.updateToolbox.bind(this);
    }

    updateToolbox = () => this.setState(state => ({ isToolboxOpen: !(state.isToolboxOpen) }))

    render() {
        return (
            <li className={"rule-card"}>
                <div className={"rule-informations"}>
                    <span>{this.props.from}</span>
                    <span>→</span>
                    <span>{this.props.to}</span>
                </div>
                <div className={"rule-toolbox " + (this.state.isToolboxOpen ? "toolbox-open" : "toolbox-close")}>
                    <button className="toolbox-edit-button">✏</button>
                    <button className="toolbox-delete-button">🗑</button>
                    <button onClick={this.updateToolbox} className="toolbox-button">{this.state.isToolboxOpen ? <>❌</> : <>⚙</>}</button>
                </div>
            </li>
        );
    }
}