import React from 'react';
import RuleCard from './RuleCard';
import './style.css';

export default class RulesMenuContent extends React.Component {
    render() {
        return (
            <ul className={"rules-content-list"}>
                {this.props.data.map(rule => (
                    <RuleCard from={rule.from} to={rule.to} isEnabled={rule.isEnabled}/>
                ))}
            </ul>
        );
    }
}