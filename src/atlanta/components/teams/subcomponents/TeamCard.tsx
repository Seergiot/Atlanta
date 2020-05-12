import React, { Component } from "react";
import TeamUser, {TeamUserData} from "./TeamUser";

type TeamData = {
    id:number,
    name: string,
    users: TeamUserData[]
    moreInfo: boolean
}

type TeamCardProps = {
    team: TeamData
}

export default class TeamCard extends Component<TeamCardProps>{
    
    render(){
        const {team} = this.props;
        const renderUsers = team.users.map((user, index) => {
            return <TeamUser 
                            user={user}
                            moreInfo={team.moreInfo} 
                            key={index}/>
        })
        return(<>
            <div className="col-md-6 col-sm-12">
        <h4>{team.name}</h4>
        <div className="">
          {renderUsers}
        </div>
        <br />
      </div>
        </>)
    }
}