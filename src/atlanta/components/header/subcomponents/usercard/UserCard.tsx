import React, { Component } from "react";
import { UserData } from "../../../../AtlantaApp";
import { Link } from 'react-router-dom';

type UserCardState = {
    userData: UserData;
}

export default class UserCard extends Component<UserCardState>{

    avatarImage(){
        return `//habbo.city/habbo-imaging/avatarimage?figure=${this.props.userData.look}&size=b&head_direction=3&gesture=sml`;
    }
    render(){
        const {userData} = this.props;

        const lastLogin = () =>{
            var date = new Date(userData.lastOnline * 1000);
            var day = ("0"+date.getDate()).substr(-2);
            var month = ("0"+(date.getMonth() +1)).substr(-2);
            var hours = ("0"+(date.getHours() +1)).substr(-2);
            var minutes = ("0"+(date.getMinutes() +1)).substr(-2);
            return day + '/' + month + '/' + date.getFullYear() + ' ' + hours + ':' + minutes;
        }

        const moneyList = userData.currencies.map((currency) => {
            var images = {1000: 'coins', 5: 'diamonds', 0: 'duckets'};    
            var keys = {1000: 'Moedas', 5: 'Diamantes', 0: 'Duckets'}
            if(!images[currency.type])
                return("");
            const amount = parseInt(currency.amount + "") > 999999999 ? "∞" : currency.amount
            return (
                <div className="variable" key={currency.type}><div className="icon"  style={{backgroundImage: "url(/images/"+images[currency.type]+".png)"}}></div><span>{amount}</span> {keys[currency.type]}</div>
            );
        });

        return (
            <>
                <div className="col-md-6 d-none d-sm-none d-md-block" style={{textAlign: "center"}}>
                    <img className="logo" alt="" style={{marginTop: "60px"}} src="/images/logo.png"/>
                    <Link to="/hotel" className="rounded-button large-button purple-button">Entrar no Hotel</Link>
                </div>
                <div className="col-md-6 col-sm-8">
                    <div className="row justify-content-md-center">
                        <div className="col-md-7 col-sm-7">
                            <div className="my-info">
                                <div className="gray-box">
                                    <div className="white-box">Seja bem vind@ de volta,<br/><span className="username">{userData.username}</span></div>
                                    <div className="white-box last-login">Último acesso em {lastLogin()}</div>
                                    <div className="avatar-area">
                                        <div className="avatar" style={{backgroundImage: "url("+this.avatarImage()+")"}}></div>
                                    </div>
                                    <div className="white-inverted-box">{userData.motto}</div>
                                </div>
                                <div className="wallet">
                                    {moneyList}
                                    <div className="variable" style={{borderBottomRightRadius: "4px"}}><div className="icon"  style={{backgroundImage: "url(/images/vip.png)"}}></div><span>∞</span> dias</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>);
    }
}