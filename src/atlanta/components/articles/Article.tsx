import React,{ Component } from "react";
import AtlantaApp from "../../AtlantaApp";

export default class Article extends Component{
    componentDidMount(){
        
        AtlantaApp.LoadedComponents = true;
    }

    render()
    {
        return(<>Articulo</>);
    }
}