import React, { Component } from "react";
import AtlantaApp, { UserData } from "../../AtlantaApp";

type HotelProps = {
    userData: UserData
    hotelShow:any
}

export default class Hotel extends Component<HotelProps>{


    componentDidMount(){
        this.props.hotelShow(true);
        AtlantaApp.LoadedComponents = true;
    }

    componentWillUnmount(){
        
        this.props.hotelShow(false);
        AtlantaApp.LoadedComponents = false;
    }

    render(){
        return (<></>)
    }
}