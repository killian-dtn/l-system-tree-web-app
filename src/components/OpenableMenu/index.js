import './style.css'

import React from "react";

export default class OpenableMenu extends React.Component {
    constructor(props) {
        super();
        this.state = { open: props.open ?? false };
    }

    renderButton() {
        return (
            <button onClick={() => this.setState(state => ({ open: !(state.open) }))}>
                {this.state.open ? "▲" : "▼"}
            </button>
        );
    }

    render() {
        return (
            <section className={"menu " + this.props.className + (this.state.open ? " menu-open" : " menu-close")}>
                <div className="menu-head">
                    <div className="menu-head-props">{this.props.head}</div>
                    {this.renderButton()}
                </div>
                <div className="menu-body">
                    {this.props.children}
                </div>
            </section>
        );
    }
}