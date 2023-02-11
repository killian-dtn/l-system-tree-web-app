import './style.css';

import React from "react";
import OpenableMenu from '../../OpenableMenu';
import GraphicsRendering from '../../GraphicsRendering';
import AxiomsMenuContent from '../../AxiomsMenuContent';
import RulesMenuContent from '../../RulesMenuContent';

class MenuHead extends React.Component {
    render() {
        return (
            <div className="menu-head-from-root">
                <div className="menu-title">
                    {this.props.icon && <span>{this.props.icon}</span>}
                    {this.props.title && <span>{this.props.title}</span>}
                </div>
                {this.props.btnEvent && <button onClick={this.props.btnEvent}>+</button>}
            </div>
        );
    }
}

export default class Home extends React.Component {
    render() {
        let axioms_ph = [];
        for (let i = 0; i < 8; i++)
            axioms_ph.push({ name: "axiom-" + i, sentence: "F[-F]+F" });
        
        let rules_ph = [];
        for (let i = 0; i < 8; i++)
            rules_ph.push({ from: "Line", to: "axiom-" + i, isEnabled: false })

        return (
            <>
                <OpenableMenu head={<MenuHead icon={"🌳"}/>} className="rendered-tree-menu" open={true}>
                    <GraphicsRendering className="rendered-tree" />
                </OpenableMenu>
                
                <OpenableMenu head={<MenuHead icon={"🌿"} title={"Axioms"} btnEvent={() => alert("axioms")}/>} className="axioms-list-menu">
                    <AxiomsMenuContent data={axioms_ph}/>
                </OpenableMenu>
                
                <OpenableMenu head={<MenuHead icon={"📜"} title={"Rules"} btnEvent={() => alert("rules")}/>} className="rules-list-menu">
                    <RulesMenuContent data={rules_ph}/>
                </OpenableMenu>
            </>
        );
    }
}
