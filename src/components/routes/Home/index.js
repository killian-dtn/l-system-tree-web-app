import './style.css';

import React from "react";
import OpenableMenu from '../../OpenableMenu';
import GraphicsRendering from '../../GraphicsRendering';
import AxiomsMenuContent from '../../AxiomsMenuContent';
import RulesMenuContent from '../../RulesMenuContent';

export default class Home extends React.Component {
    renderHead({ icon, title }) {
        return (
            <div className="menu-head-from-root">
                <div className="menu-title">
                    {icon !== null ? <span>{icon}</span> : <></>}
                    {title !== null ? <span>{title}</span> : <></>}
                </div>
            </div>
        );
    }

    renderHeads() {
        return {
            canvas: this.renderHead({ icon: "🌳" })/*<div className="menu-head-from-root">
                <div className="menu-title">
                    <span>🌳</span>
                </div>
            </div>*/,
            axioms: this.renderHead({ icon: "🌿", title: "Axioms" })/*<div className="menu-head-from-root">
                <div className="menu-title">
                    <span>🌿</span>
                    <span>Axioms</span>
                </div>
                <button>+</button>
            </div>*/,
            rules: this.renderHead({ icon: "📜", title: "Rules" })/*<div className="menu-head-from-root">
                <div className="menu-title">
                    <span>📜</span>
                    <span>Rules</span>
                </div>
                <button>+</button>
            </div>*/
        }
    }

    render() {
        let heads = this.renderHeads();

        let axioms_ph = [];
        for (let i = 0; i < 8; i++)
            axioms_ph.push({ name: "axiom-" + i, sentence: "F[-F]+F" });
        
        let rules_ph = [];
        for (let i = 0; i < 8; i++)
            rules_ph.push({ from: "Line", to: "axiom-" + i, isEnabled: false })

        return (
            <>
                <OpenableMenu head={heads["canvas"]} body={<GraphicsRendering className="rendered-tree" />} open={true} className="rendered-tree-menu"/>
                <OpenableMenu head={heads["axioms"]} body={<AxiomsMenuContent data={axioms_ph}/>} className="axioms-list-menu"/>
                <OpenableMenu head={heads["rules"]} body={<RulesMenuContent data={rules_ph}/>} className="rules-list-menu"/>
            </>
        );
    }
}