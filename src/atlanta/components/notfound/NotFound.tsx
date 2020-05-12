import React, { Component } from "react";
import AtlantaApp from "../../AtlantaApp";

export default class NotFound extends Component{

    componentDidMount(){
        AtlantaApp.LoadedComponents = true;
    }

    render(){
        return (
            <div className="NotFound">
                Not found
            </div>
        );
    }
}