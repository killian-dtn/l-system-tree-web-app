import './style.css';

import React from "react";
import OpenableMenu from '../../OpenableMenu';
import GraphicsRendering from '../../GraphicsRendering';
import AxiomsMenuContent from '../../AxiomsMenuContent';

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
        let axioms_ph = [];
        for (let i = 0; i < 15; i++)
            axioms_ph.push({ name: "axiom-" + i, sentence: "F[-F]+F" })

        return <>
            <OpenableMenu head={heads["canvas"]} body={<GraphicsRendering className="rendered-tree" />} open={true} className="rendered-tree-menu"/>
            <OpenableMenu head={heads["axioms"]} body={<AxiomsMenuContent data={axioms_ph}/>} className="axioms-list-menu"/>
            <OpenableMenu head={heads["rules"]} body={null} className="rules-list-menu"/>
        </>;
    }
}