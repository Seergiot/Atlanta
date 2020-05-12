import React,{ Component } from "react";
import FigureUtil from "../../../util/FigureUtil";
import TimeAgo from 'react-timeago';


import spanishFormats from 'react-timeago/lib/language-strings/es'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(spanishFormats);

export type TeamUserData = {
    acc: string;
    accountsr: number;
    banCount: number;
    country_code: string;
    country_name: string;
    isOnline: boolean;
    last_online: string;
    look: string;
    motto: string;
    muteCount: number;
    request_a: number;
    username: string;
}

export type TeamUserProps = {
    user: TeamUserData;
    moreInfo: boolean;
}

export default class TeamUser extends Component<TeamUserProps>{
  //'size=l&direction=3&head_direction=3&gesture=sml'
    render(){
        const {user, moreInfo} = this.props;
        const register_at = (new Date(parseInt(user.acc) * 1000)).toString();
        const last_online = (new Date(parseInt(user.last_online) * 1000)).toString();
        return (<>
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0">{user.username}</h3>
          <div className="mb-1 text-muted">{user.motto}</div>
          <p className="card-text mb-auto">Registrado <TimeAgo date={register_at} formatter={formatter}></TimeAgo></p>
          <p className="card-text mb-auto">Ultima conexion <TimeAgo date={last_online} formatter={formatter}></TimeAgo></p>
          { moreInfo && <><p className="card-text mb-auto">Baneos: {user.banCount}.</p>
              <p className="card-text mb-auto">Peticiones atendidas: {user.request_a}.</p>
              <p className="card-text mb-auto">Cuentas recuperadas: {user.accountsr}.</p>
              <p className="card-text mb-auto">Muteos: {user.muteCount}.</p></>
          }
          

        </div>
        <div className="col-auto d-none d-lg-block">
            <img alt="keko" draggable={false} src={FigureUtil.avatar(user.look, {size:"l", direction:3, head_direction: 3, gesture: "sml"})}/>
        </div>
      </div></>);
    }
}