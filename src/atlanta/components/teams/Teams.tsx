import React, { Component } from "react";
import AtlantaApp from "../../AtlantaApp";
import ApiUtil from "../../util/ApiUtil";
import { Redirect } from 'react-router-dom'
import TeamCard from "./subcomponents/TeamCard";

type TeamsState = {
    initialized: boolean,
    teams: any,
    error
};

const initialState = {
    teams: [],
    initialized: false,
    error: false
};

const api = new ApiUtil();
export default class Teams extends Component<any, TeamsState>{

    constructor(props){
        super(props);
        this.state = initialState;
    }

    UNSAFE_componentWillMount(){
        const { id } = this.props.match.params;
        this.loadTeamData(id);
            //this.loadNews();
    }
    
    componentDidUpdate(prevProps){
        if(this.props.match.params.id !== prevProps.match.params.id){
            this.loadTeamData(this.props.match.params.id);
            
        }
    }

    loadTeamData(teamId)
    {
        if(typeof teamId === "undefined")
            teamId = "staff";
        api.getAsync("/teams/"+teamId)
            .then((res) => {
                this.setState({ teams: res.data });
                AtlantaApp.LoadedComponents = true;
            })
            .catch(() => {
                this.setState({error: true});
            })
    }

    render()
    {
        const {teams} = this.state;
        if(this.state.error){
            return <Redirect to='/notfound' />;
        }

        var teamList = "";

        if(teams.ranks){
            teamList = this.state.teams.ranks.map((team, index) => {
                console.log(team);
                return <TeamCard team={team} key={index}></TeamCard>;
            });
        }

        return(<>
            <div className="row">
            <div className="col-12">
              <h4>Equipe Staff</h4>
              <div className="card">
                <div className="card-body" style={{textAlign: 'center'}}>
                  <div className="image-window" title="Emblema da Equipe" data-toggle="tooltip" style={{background: 'url(http://metropolys.ovh/c_imagenes/album1584/STAFHLV.gif) center no-repeat', margin: '0 auto', float: 'none'}} /><br />
                  A Equipe Habblive está sempre à sua disposição em prol de ajudar o máximo de usuários possíveis em meio a quaisquer tipo de desafio acontecido dentro da comunidade.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
             {teamList}
          </div>
        </>);
    }
}