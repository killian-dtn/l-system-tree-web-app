import { Graphics, Stage } from '@pixi/react-pixi';
import { Point } from 'pixi.js';
import React from 'react';
import './style.css';

export default class MiniAxiomRendered extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOverlayOpen: false };

        this.updateOverlay = this.updateOverlay.bind(this);
    }
    
    updateOverlay = () => this.setState(state => ({ isOverlayOpen: !(state.isOverlayOpen) }))

    render() {
        const w = (this.props.width ?? 100);
        const h = (this.props.height ?? 100);

        return (
            <li className={"mini-axiom-container"}>
                <div className={"mini-axiom-overlay" + (this.state.isOverlayOpen ? " overlay-open" : " overlay-close")}>
                    <button className={"delete-axiom-button on-overlay-open"}>🗑</button>
                    <button className={"close-overlay-button on-overlay-open"} onClick={this.updateOverlay}>❌</button>
                    <button className={"edit-axiom-button on-overlay-open"}>✏</button>
                    
                    <span className={"mini-axiom-name on-overlay-close"}>{this.props.name}</span>
                    <button className={"open-overlay-button on-overlay-close"} onClick={this.updateOverlay}>⚙</button>
                    {/*this.state.isOverlayOpen ? <>
                        <button className={"delete-axiom-button"}>🗑</button>
                        <button onClick={this.updateOverlay} className={"close-overlay-button"}>❌</button>
                        <button className={"edit-axiom-button"}>✏</button>
                    </> : <>
                        <span className={"mini-axiom-name"}>{this.props.name}</span>
                        <button onClick={this.updateOverlay} className={"open-overlay-button"}>⚙</button>
                    </>*/}
                </div>
                <Stage width={w} height={h} options={{ backgroundAlpha: 0 }}>
                    {/*<Graphics draw={g => {
                        const rotate = (n, p) => new Point(
                            p.x * Math.cos(n) - p.y * Math.sin(n),
                            p.x * Math.sin(n) + p.y * Math.cos(n)
                        );
                        
                        const branchSize = h * (1 / 2);
                        const angle = Math.PI / 6;
                        
                        let curPos = new Point(w / 2, h);
                        let curDir = new Point(0, -1).multiplyScalar(branchSize);
                        let stack = [];
                        
                        g.clear()
                        .lineStyle(5, 0x002613, 1)
                        .moveTo(curPos.x, curPos.y);
                        
                        // F
                        curPos = curPos.add(curDir);
                        g.lineTo(curPos.x, curPos.y);
                        
                        // [
                            stack.push([curPos.clone(), curDir.clone()]);
                            
                            // -
                            curDir = rotate(-angle, curDir).normalize().multiplyScalar(branchSize);
                            
                            // F
                            curPos = curPos.add(curDir);
                            g.lineTo(curPos.x, curPos.y);
                            
                            // ]
                        [curPos, curDir] = stack.pop();
                        g.moveTo(curPos.x, curPos.y);

                        // +
                        curDir = rotate(angle, curDir).normalize().multiplyScalar(branchSize);
                        
                        // F
                        curPos = curPos.add(curDir);
                        g.lineTo(curPos.x, curPos.y);
                    }}/>*/}
                </Stage>
            </li>
        );
    }
}