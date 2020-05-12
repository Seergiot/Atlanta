import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import ApiUtil from "../../../../util/ApiUtil";

type RegisterModalProps = {
    show: boolean;
    handleModal: any;
}
type RegisterModalState = {
}

const initialState = {
}

const Api = new ApiUtil();
export default class RegisterModal extends Component<RegisterModalProps, RegisterModalState>
{
    constructor(props){
        super(props);
        this.state = initialState;
    }

    /*UNSAFE_componentWillReceiveProps(nextProps){
        this.setState({
            showModal: nextProps.show
        })
    }*/

    handleClose(show:boolean){
        this.setState({
            showModal: show
        })
    }

    handleClickRegister(){
       // Api.post("/api")
    }

    render(){
        const handleClose = () => this.props.handleModal(false);

        return (<><Modal show={this.props.show} onHide={handleClose} dialogClassName="register-modal" centered>
            <Modal.Body >
                <button type="button" className="close" onClick={handleClose} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <Modal.Title style={{fontSize:"1.25rem", marginBottom:"15px"}}>Registre-se</Modal.Title>
                <form>
                    <div className="form-group">
                        <label>Nome de Usuário:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>E-mail:</label>
                        <input type="text" className="form-control" />
                        <small style={{color: '#FFF'}} className="form-text">Você só poderá recuperar sua senha através do e-mail.</small>
                    </div>
                    <div className="row" style={{marginBottom: 0}}>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label>Senha:</label>
                                <input type="password" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <label>Confirmar Senha:</label>
                                <input type="password" className="form-control" />
                            </div>
                        </div>
                    </div>
                </form>
                <button type="button" onClick={()=> this.handleClickRegister()} className="btn btn-success btn-lg" style={{width: '100%', fontSize: '22px'}}>JOGAR</button>
              <small style={{marginTop: '10px'}} className="form-text">Ao se registrar você concorda com os <a href="#a" style={{color: '#FFF', textDecoration: 'underline'}}>Termos e Condições de Uso</a>.</small>
            </Modal.Body>
          </Modal></>);
    }
}