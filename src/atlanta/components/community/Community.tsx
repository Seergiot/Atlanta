import React, { Component } from "react";
import AtlantaApp from "../../AtlantaApp";

import { Helmet } from 'react-helmet';

export default class Community extends Component{

    componentDidMount(){
        AtlantaApp.LoadedComponents = true;
    }

    render(){
        return(<><Helmet><title>hola xd</title></Helmet>ola </>);
    }
}