import React, { Component } from "react";
import RegisterModal from "../registermodal/RegisterModal";

type LoginHeaderProps = {
    loginUser: any;
}

type LoginHeaderState = {
    showRegisterModal: boolean
}

const initialState = {
    showRegisterModal: false
}

export default class LoginHeader extends Component<LoginHeaderProps, LoginHeaderState>{
    constructor(props){
        super(props);
        this.state = initialState;
    }

    showModal(show: boolean){
        this.setState({
            showRegisterModal: show
        })
    }

    render(){
        const handleClick = () => this.showModal(true);
        return(<>
            <RegisterModal show={this.state.showRegisterModal} handleModal={(v) => this.showModal(v)}></RegisterModal>
            <div className="col-md-12 col-sm-12 centerText">
                <img className="logo" alt="" src="/images/logo.png"/>
            </div>
            <div className="col-md-6 col-sm-12 centerText">
                <div className="sub-logo">Conheça pessoas de todo o mundo.<br/>Divirta-se participando de eventos<br/>e construindo seu próprio espaço no Hotel!</div>
                <button onClick={handleClick} className="rounded-button large-button purple-button no-border">Crie sua conta!</button>
            </div>
            <div className="col-md-6 col-sm-12 d-none d-sm-none d-md-block">
                <form method="post" onSubmit={ (evt) => this.props.loginUser(evt) }>
                    <h3 className="login-heading">Acesse sua conta!</h3>
                    <div className="row" style={{marginBottom: "0"}}>
                        <div className="col-md-6 col-sm-6">
                            <div className="input-group large">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" name="username" placeholder="Usuário"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="input-group large">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                </div>
                                <input type="password" className="form-control" name="password" placeholder="Senha"/>
                            </div>
                        </div>
                    </div>
                    <a className="forgot-password" href="#hola" data-toggle="modal" data-target="#forgotpass-modal">Esqueceu sua senha?</a><br/>
                    <button className="rounded-button purple-button no-border" style={{float: "right"}}>Entrar</button>
                </form>
            </div></>)
    }
}