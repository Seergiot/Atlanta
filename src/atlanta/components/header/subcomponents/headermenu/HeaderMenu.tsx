import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

import { Link } from 'react-router-dom';
import { UserData } from "../../../../AtlantaApp";
import ApiUtil from "../../../../util/ApiUtil";
import Cookies from "universal-cookie";

type HeaderMenuProps = {
    loadPage: Function,
    userData: UserData,
    refreshUser: Function
};
type HeaderMenuState = {
    currentLocation: String;
}

const initialState = {
    currentLocation: "",
}

const api = new ApiUtil();

const cookies = new Cookies();
export default class HeaderMenu extends Component<HeaderMenuProps, HeaderMenuState>{

    constructor(props){
        super(props);
        this.state = initialState;
    }

    updatePath(path: string){
        if(window.location.pathname === path){
            return;
        }

        this.setState({
            currentLocation:path
        });

        this.props.loadPage();
    }

    getNavLinkClass(path){
        var currentLocation = window.location.pathname;

        if(path === "/" && currentLocation === path)
            return 'active';

        return path !== "/" && currentLocation.indexOf(path) > -1 ? 'active' : '';
    }

    logoutUser()
    {
        api.post("/user/logout", {token: this.props.userData.token}, (data) => {
            if(data.success){
                cookies.remove('ATLANTA_SSID');
                cookies.remove('ATLANTA_UID');
                cookies.remove('ATLANTA_STI');
                this.props.refreshUser();
            }
        })
    }

    render(){
        const {userData} = this.props;
        return(
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Container>
        <Nav className="mr-auto">
            <Nav.Link as={Link} onClick={() => this.updatePath("/")} to="/" className={this.getNavLinkClass("/")}>Home</Nav.Link>
            <NavDropdown title="Comunidad" id="collasible-nav-dropdown" className={this.getNavLinkClass("/community")}>
                <NavDropdown.Item as={Link} onClick={() => this.updatePath("/community/gallery")} to="/community/gallery">Galería</NavDropdown.Item>
                <NavDropdown.Item as={Link} onClick={() => this.updatePath("/community/articles")} to="/community/articles">Noticias</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Teams" id="collasible-nav-dropdown" className={this.getNavLinkClass("/teams")}>
                <NavDropdown.Item as={Link} onClick={() => this.updatePath("/teams/staffs")} to="/teams/staffs">Staffs</NavDropdown.Item>
                <NavDropdown.Item as={Link} onClick={() => this.updatePath("/teams/inters")} to="/teams/inters">Inters</NavDropdown.Item>
                <NavDropdown.Item as={Link} onClick={() => this.updatePath("/teams/gamemasters")} to="/teams/gamemasters">Game Masters</NavDropdown.Item>
                <NavDropdown.Item as={Link} onClick={() => this.updatePath("/teams/bots")} to="/teams/bots">Bots</NavDropdown.Item>
                <NavDropdown.Item as={Link} onClick={() => this.updatePath("/teams/alphas")} to="/teams/alphas">Alfas</NavDropdown.Item>
                <NavDropdown.Item as={Link} onClick={() => this.updatePath("/teams/colaboradores")} to="/teams/colaboradores">Colaboradores</NavDropdown.Item>
                
            </NavDropdown>
        </Nav>
        <Nav>
            {
                userData.loggedIn ? <Nav.Link onClick={() => this.logoutUser()}>Logout</Nav.Link> : ''
            }
            <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link>
        </Nav>
    
    </Container>
  </Navbar.Collapse>
</Navbar>
        </>
        );
    }
}