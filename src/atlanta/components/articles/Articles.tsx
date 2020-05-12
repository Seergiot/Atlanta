import React,{ Component } from "react";
import AtlantaApp from "../../AtlantaApp";

export default class Articles extends Component{
    
    componentDidMount(){
        
        AtlantaApp.LoadedComponents = true;
    }


    render()
    {
        return(<>Articulos</>);
    }
}