import './style.css';

import React from "react";
import OpenableMenu from '../../OpenableMenu';

export default class Root extends React.Component {
    renderHeads() {
        return {
            canvas: <div className="menu-head-from-root">
                <div className="menu-title">
                    <span>🌳</span>
                </div>
            </div>,
            axioms: <div className="menu-head-from-root">
                <div className="menu-title">
                    <span>🌿</span>
                    <span>Axioms</span>
                </div>
                <button>+</button>
            </div>,
            rules: <div className="menu-head-from-root">
                <div className="menu-title">
                    <span>📜</span>
                    <span>Rules</span>
                </div>
                <button>+</button>
            </div>
        }
    }

    render() {
        let heads = this.renderHeads();

        return <>
            <OpenableMenu head={heads["canvas"]} body={null} open={true} className="rendered-tree-menu"/>
            <OpenableMenu head={heads["axioms"]} body={null} className="axioms-list-menu"/>
            <OpenableMenu head={heads["rules"]} body={null} className="rules-list-menu"/>
        </>;
    }
}