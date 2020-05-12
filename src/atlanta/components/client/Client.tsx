import React, { Component } from "react";

import './Client.scss';
import { Link } from "react-router-dom";

type ClientProps = {
    show:boolean
}

export default class Client extends Component<ClientProps>{

    render(){
        const {show} = this.props;

        var clientClass = "ClientContainer";
        if(show)
            clientClass += " show";

        return(<div className={clientClass}>
            <div className="buttons">
                <Link to="/" className="rounded-button purple-button">Back</Link>
            </div>
            <iframe title="client-container" id="client-container" src="./iframe.html"></iframe>
        </div>);
    }
}