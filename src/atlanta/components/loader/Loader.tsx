import React, { Component } from "react";
import './Loader.scss';

type LoaderProps = {
    isLoaded : boolean
}

export default class Loader extends Component<LoaderProps>{

    render(){

        let className = 'loader';
        if (this.props.isLoaded) {
            className += ' loaded';
        }
        
        return (
            <div className={className}>
                <div className="s-loader"></div>

                <div className="loader-section section-left"></div>
                <div className="loader-section section-right"></div>
            </div>
        );
    }
}