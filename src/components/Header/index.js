import { Component } from "react";
import './style.css';

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                {this.props.backButtonVisible ? <span>←</span> : null}
                <span>GitHub Repo</span>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/killian-dtn/l-system-web-app">↑</a>
            </header>
        );
    }
}
