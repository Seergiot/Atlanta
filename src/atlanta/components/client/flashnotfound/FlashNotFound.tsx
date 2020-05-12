import React, { Component } from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import {Link} from 'react-router-dom';

type FlashNotFoundProps = {
    show: boolean
}

type FlashNotFoundState = {
    showModal: boolean,
    modalPersistent: boolean
}

const defaultState = {
    showModal:  true,
    modalPersistent: false
}

export default class FlashNotFound extends Component<FlashNotFoundProps, FlashNotFoundState>{

    constructor(props){
        super(props);
        this.state = defaultState;
    }

    setShow(state: boolean){
        this.setState({
            showModal: state,
            modalPersistent: !state
        })
    }

    

    render(){

        const handleClose = () => this.setShow(false);
        
        var state = this.state.showModal;

        if(!state){
            
            state = this.props.show;
        }

        return (<>
        <Modal size="lg" show={state} onHide={handleClose} dialogClassName="flash-modal" centered>
            <Modal.Body className="text-center">
                <h1 className="display-4 text-center">¡Ya casi estás dentro!</h1>
                <p className="lead">
                    No hemos podido encontrar Flash en tu navegador o quizás está desactivado <br />
                    Tenemos una extensión para Chrome y activar automaticamente Flash cuando entres a Haddoz
                </p>
                <a href="https://chrome.google.com/webstore/detail/atlanta-flash-enabler/mhnpkmeebbfbkfngldjjcfihmpimibjd" target="_blank" rel="noopener noreferrer"className="rounded-button large-button purple-button">
                    Descargar extensión
                </a> <br/>
                <p className="lead"style={{marginTop:"1rem"}}>
                    Si no deseas descargar la extensión puedes seguir los siguientes pasos <br />
                    Clickea el candado alado de la URL <img src="https://i.imgur.com/Apl0vc4.png" alt=""/> &rarr; Click en configuración de Sitio Web &rarr; Click en permitir Flash Player <img src="https://i.imgur.com/oHPlCEV.png" alt=""/>
                </p>
                <div className="row">
                    <div className="col-12 text-center">

                    <img src="https://i.imgur.com/O7RQ76A.png" alt=""/> <img src="https://i.imgur.com/qHoTLJd.png" alt=""/>
                    </div>
                </div>

                <Button as={Link} to="/" variant="secondary"className="btn btn-success btn-lg" style={{width: '100%', fontSize: '22px'}} onClick={handleClose}>
                    Close
                </Button>
            </Modal.Body>
        </Modal>
        </>);
    }
}