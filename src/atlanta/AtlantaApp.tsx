import React, { Component } from 'react';
import './AtlantaApp.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ApiUtil from './util/ApiUtil';
import Home from './components/home/Home';
import NotFound from './components/notfound/NotFound';
import Loader from './components/loader/Loader';

import Header from './components/header/Header';
import InputUtil from './util/InputUtil';

import swal from 'sweetalert';
import Cookies from 'universal-cookie';
import Community from './components/community/Community';

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import swfobject from 'swfobject';
import Client from './components/client/Client';
import Hotel from './components/hotel/Hotel';
import Session from './app/sessions/Session';
import FlashNotFound from './components/client/flashnotfound/FlashNotFound';
import Teams from './components/teams/Teams';
import Gallery from './components/gallery/Gallery';
import Articles from './components/articles/Articles';
import Article from './components/articles/Article';


declare global {
  interface Window { AppSettings: any; }
}

export interface UserData {
  loggedIn: boolean,
  id: number,
  username: string,
  motto: string,
  look: string,
  gender: string,
  createDate: string,
  lastOnline: number,
  respect: number,
  currencies: any,
  badges:any,
  group:any,
  relations:any,
  token: string
}

const initialUserData = {
  loggedIn : false,
  id : -1,
  username : 'Guest',
  motto: '',
  look: '',
  gender: 'm',
  createDate: '',
  lastOnline: 0,
  respect: 0,
  currencies:[],
  badges:[],
  group:[],
  relations:[],
  token: ''
}

type AtlantaProps = {
};
type AtlantaState = {
    gameLoaded: boolean,
    loggedIn: boolean,
    error: string,
    userInitialized: boolean,
    loadingInfo: string,
    userData: UserData,
    showClient: boolean,
};
const initialState = {
    gameLoaded: false,
    loggedIn: false,
    error: '',
    loadingInfo: '',
    userData: initialUserData,
    userInitialized: false,
    showClient: false
};

const Api = new ApiUtil();

const cookies = new Cookies();
export default class AtlantaApp extends Component<any, AtlantaState>{

  static AtlantaContext = React.createContext({} as AtlantaState);

  static LoadedComponents = false;
  static OnLoadNewComponents = false; 

  static Session: Session = null;

  constructor(props: AtlantaProps){
    super(props);
    this.state = initialState;

  }

  UNSAFE_componentWillMount(){
    if(!this.state.userInitialized){
      this.loadUser();
    }
    
  }

  componentDidUpdate(){

    if(this.state.userInitialized){
      let int = setInterval(() => {
        if(this.state.gameLoaded){
          clearInterval(int);
        }
        if(this.state.userInitialized && AtlantaApp.LoadedComponents && !this.state.gameLoaded){
          this.setState({
            gameLoaded: true
          })
        }
      }, 10);
    }

    if(AtlantaApp.OnLoadNewComponents){
      AtlantaApp.OnLoadNewComponents = false;
      let int = setInterval(() => {
        if(this.state.gameLoaded){
          clearInterval(int);
        }
        if(AtlantaApp.LoadedComponents && !this.state.gameLoaded){
          console.log('setter?');
          this.setState({
            gameLoaded: true
          });
        }
      }, 10);
    }
  }

  loadUser(){
    let self = this;
    Api.getAsync('/user/me').then(res => {
      self.setState({
        userData: res.data,
        userInitialized: true,
        loggedIn: res.data.loggedIn
      });

      if(res.data.loggedIn){
        // TODO: Disabled websockets in Api TEST
        //AtlantaApp.Session = new Session();
      }
    }).catch(error => {
      self.setState({
        error: 'Error api load'
      })
    });
  }

  showClient(show: boolean){
    this.setState({
      showClient: show
    });
    this.loadPage();
  }

  loadPage(){
    AtlantaApp.LoadedComponents = false;
    AtlantaApp.OnLoadNewComponents = true;
    this.setState({
      gameLoaded: false
    })
  }

  login(evt: any){
    evt.preventDefault();
    var form = evt.target;
    
    var error =  false;

    if(InputUtil.checkInput(form.username)){
      InputUtil.inputError(form.username.parentNode);
      error = true;
    }

    if(InputUtil.checkInput(form.password)){
      InputUtil.inputError(form.password.parentNode);
      error = true;
    }

    if(error){
      console.log(error);
      return;
    }
    
    
    
    Api.post('/user/login', {username: form.username.value, password: form.password.value}, response => {

      swal({
        text: response.msg,
        icon: response.success ? "success": "error",
      });
      if(response.success){
        cookies.set('ATLANTA_SSID', response.ATLANTA_SSID, {expires : response.SESSION_SESSION_EXPIRES});
        cookies.set('ATLANTA_UID', response.ATLANTA_UID, {expires : response.SESSION_SESSION_EXPIRES});
        cookies.set('ATLANTA_STI', response.ATLANTA_STI, {expires : response.SESSION_SESSION_EXPIRES});
        this.loadUser();
      }
    })
}

  

  render() {

    const {error, userData} = this.state;
    const {Provider} = AtlantaApp.AtlantaContext;

    if(error !== ""){
      const update = function(){
        window.location.reload();
      }
      return (<>
      <Container>
        <Alert variant="danger">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => update()} variant="outline-success">
              Close me ya'll!
            </Button>
          </div>
        </Alert>
        </Container>
      </>);
    }

    const {showClient} = this.state;

    
    return (
      <div className="AtlantaApp">
        <Provider value={this.state}>
          <Router>
            <div>
              {
                (swfobject.hasFlashPlayerVersion("11.1.0") && userData.loggedIn) ? <Client show={showClient}></Client> : 
                  (!swfobject.hasFlashPlayerVersion("11.1.0") && userData.loggedIn) ? <FlashNotFound show={showClient}></FlashNotFound> : ''
              }
              <div className="Content">
                <Loader isLoaded={this.state.gameLoaded}></Loader>
                <Header userData={this.state.userData} refreshUser={()=> this.loadUser() } loadPage={() => this.loadPage() } loginUser={(evt:any) => this.login(evt)}></Header>
                
                <div className="real-content">
                  <div className="container">
                    <Switch>
                      {/*Home*/}
                      <Route exact path="/" render={() => <Home loginUser={(evt:any) => this.login(evt)}></Home>} />

                      {/*Community*/}
                      <Route exact path="/community" component={Community} />
                      <Route exact path="/community/gallery" component={Gallery} />
                      <Route path="/community/articles/:article" component={Article} />
                      <Route exact path="/community/articles" component={Articles} />

                      {/*Hotel*/}
                      <Route exact path="/hotel" render={() => <Hotel userData={this.state.userData} hotelShow={(show: boolean) => {this.showClient(show);} }></Hotel>}/>
                      
                      {/*Teams*/}
                      <Route path="/teams/:id" component={Teams}/>
                      <Route path="/teams" component={Teams}/>

                      <Route component={NotFound} />

                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}