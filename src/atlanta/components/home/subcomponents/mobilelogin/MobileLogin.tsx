import React, { Component } from "react";
type MobileLoginProps = {
  loginUser: any;
}
export default class MobileLogin extends Component<MobileLoginProps>{
    render(){
        return (<><div className="row d-block d-sm-block d-md-none">
        <div className="col-sm-12" style={{marginBottom: '20px', borderBottom: '1px solid rgba(0,0,0,.1)', paddingBottom: '20px'}}>
          <h3 className="login-heading-m">Acesse sua conta!</h3>
          <form method="post" onSubmit={ (evt) => this.props.loginUser(evt) }>
          <div className="row">
            <div className="col-sm-6">
              <div className="input-group large mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user" /></span>
                </div>
                <input type="text" className="form-control" name="username" placeholder="Usuário" />
              </div>
            </div>
            <div className=" col-sm-6">
              <div className="input-group large mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-lock" /></span>
                </div>
                <input type="password" className="form-control" name="password" placeholder="Senha" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <a className="forgot-password-m" href="#">Esqueceu sua senha?</a>
            </div>
            <div className="col-md-6 col-sm-6">
              <button className="rounded-button purple-button no-border" style={{float: 'right'}}>Entrar</button>
            </div>
          </div>
            </form>
        </div>
      </div></>);
    }
    
  }