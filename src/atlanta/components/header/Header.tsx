import React, { Component } from "react";
import LoginHeader from "./subcomponents/login/LoginHeader";
import UserCard from "./subcomponents/usercard/UserCard";
import HeaderMenu from "./subcomponents/headermenu/HeaderMenu";
import ApiUtil from "../../util/ApiUtil";
import AnimateUtil from "../../util/AnimateUtil";
import AtlantaApp, { UserData } from "../../AtlantaApp";

type HeaderProps = {
    userData: UserData;
    loginUser: any;
    loadPage: Function;
    refreshUser: Function;
}

type HeaderState = {
    usersOnline: number;
}

const initialState = {
    usersOnline: 0
};

const api = new ApiUtil();

export default class Header extends Component<HeaderProps, HeaderState>{

    timer: any = 0;
    i:any = 0;
    element: any = null;
    constructor(props){
        super(props);
        this.state = initialState;
    }

    componentDidMount(){
        this.tick();

        this.timer = setInterval(() => this.tick(), 15000);
    }

    tick(){
        if(!AtlantaApp.LoadedComponents){
            return;
        }

        api.get("/misc/serverstatus", (data) => {

            if(data.users_online === this.state.usersOnline)
                return;
            this.setState(data);
            
            AnimateUtil.animateCSS(this.element, 'flash', '');
        });
        
    }
    render(){
        const {userData, loginUser, loadPage, refreshUser} = this.props;
        return (<>
            <div className="main-header">
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col col-md-10 col-sm-12">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 users-online" ref={(c) => {this.element = c;}}>
                            {this.state.usersOnline} usuário(s) online
                        </div>
                        {
                           ( (!userData.loggedIn ) ? <LoginHeader loginUser={loginUser}></LoginHeader> : <UserCard userData={userData}></UserCard> )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    <HeaderMenu loadPage={loadPage} refreshUser={refreshUser} userData={userData}></HeaderMenu>
        </>
            );
    }
}