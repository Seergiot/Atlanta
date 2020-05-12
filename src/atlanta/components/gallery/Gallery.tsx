import React, { Component } from "react";
import AtlantaApp from "../../AtlantaApp";

export default class Gallery extends Component{

    componentDidMount(){
        
        AtlantaApp.LoadedComponents = true;
    }

    render(){
        return (<>
        <div className="row">
        <div className="col-12">
          <h4>Galeria</h4>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="card gallery-picture">
                <div className="heading" style={{backgroundImage: 'url(http://atlantaphotography.site/public/purchased/habblive/5cf87d5c8c25ab12e3dd2565c5f3a220.png)'}}>
                  <span className="badge badge-dark">
                    <i className="far fa-clock" /> Há 40 minutos atrás
                  </span>
                  <div className="writer" style={{backgroundImage: 'url(http://habblive.in/imager.php?user=Alice&size=l&head_direction=3&gesture=sml)'}} />
                  <div className="information">
                    Por <a href="#">Alice</a>
                  </div>
                </div>
                <div className="options">
                  <a href="#" data-id="A1"><i className="fas fa-thumbs-up" /> Curtir (15)</a>
                  <a href="#"><i className="fas fa-thumbs-down" /> Descurtir (2)</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card gallery-picture">
                <div className="heading" style={{backgroundImage: 'url(http://atlantaphotography.site/public/purchased/habblive/5cf87d5c8c25ab12e3dd2565c5f3a220.png)'}}>
                  <span className="badge badge-dark">
                    <i className="far fa-clock" /> Há 40 minutos atrás
                  </span>
                  <div className="writer" style={{backgroundImage: 'url(http://habblive.in/imager.php?user=Alice&size=l&head_direction=3&gesture=sml)'}} />
                  <div className="information">
                    Por <a href="#">Alice</a>
                  </div>
                </div>
                <div className="options">
                  <a href="#" data-id="A1"><i className="fas fa-thumbs-up" /> Curtir (15)</a>
                  <a href="#"><i className="fas fa-thumbs-down" /> Descurtir (2)</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card gallery-picture">
                <div className="heading" style={{backgroundImage: 'url(http://atlantaphotography.site/public/purchased/habblive/5cf87d5c8c25ab12e3dd2565c5f3a220.png)'}}>
                  <span className="badge badge-dark">
                    <i className="far fa-clock" /> Há 40 minutos atrás
                  </span>
                  <div className="writer" style={{backgroundImage: 'url(http://habblive.in/imager.php?user=Alice&size=l&head_direction=3&gesture=sml)'}} />
                  <div className="information">
                    Por <a href="#">Alice</a>
                  </div>
                </div>
                <div className="options">
                  <a href="#" data-id="A1"><i className="fas fa-thumbs-up" /> Curtir (15)</a>
                  <a href="#"><i className="fas fa-thumbs-down" /> Descurtir (2)</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card gallery-picture">
                <div className="heading" style={{backgroundImage: 'url(http://atlantaphotography.site/public/purchased/habblive/5cf87d5c8c25ab12e3dd2565c5f3a220.png)'}}>
                  <span className="badge badge-dark">
                    <i className="far fa-clock" /> Há 40 minutos atrás
                  </span>
                  <div className="writer" style={{backgroundImage: 'url(http://habblive.in/imager.php?user=Alice&size=l&head_direction=3&gesture=sml)'}} />
                  <div className="information">
                    Por <a href="#">Alice</a>
                  </div>
                </div>
                <div className="options">
                  <a href="#" data-id="A1"><i className="fas fa-thumbs-up" /> Curtir (15)</a>
                  <a href="#"><i className="fas fa-thumbs-down" /> Descurtir (2)</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card gallery-picture">
                <div className="heading" style={{backgroundImage: 'url(http://atlantaphotography.site/public/purchased/habblive/5cf87d5c8c25ab12e3dd2565c5f3a220.png)'}}>
                  <span className="badge badge-dark">
                    <i className="far fa-clock" /> Há 40 minutos atrás
                  </span>
                  <div className="writer" style={{backgroundImage: 'url(http://habblive.in/imager.php?user=Alice&size=l&head_direction=3&gesture=sml)'}} />
                  <div className="information">
                    Por <a href="#">Alice</a>
                  </div>
                </div>
                <div className="options">
                  <a href="#" data-id="A1"><i className="fas fa-thumbs-up" /> Curtir (15)</a>
                  <a href="#"><i className="fas fa-thumbs-down" /> Descurtir (2)</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card gallery-picture">
                <div className="heading" style={{backgroundImage: 'url(http://atlantaphotography.site/public/purchased/habblive/5cf87d5c8c25ab12e3dd2565c5f3a220.png)'}}>
                  <span className="badge badge-dark">
                    <i className="far fa-clock" /> Há 40 minutos atrás
                  </span>
                  <div className="writer" style={{backgroundImage: 'url(http://habblive.in/imager.php?user=Alice&size=l&head_direction=3&gesture=sml)'}} />
                  <div className="information">
                    Por <a href="#">Alice</a>
                  </div>
                </div>
                <div className="options">
                  <a href="#" data-id="A1"><i className="fas fa-thumbs-up" /> Curtir (15)</a>
                  <a href="#"><i className="fas fa-thumbs-down" /> Descurtir (2)</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card gallery-picture">
                <div className="heading" style={{backgroundImage: 'url(http://atlantaphotography.site/public/purchased/habblive/5cf87d5c8c25ab12e3dd2565c5f3a220.png)'}}>
                  <span className="badge badge-dark">
                    <i className="far fa-clock" /> Há 40 minutos atrás
                  </span>
                  <div className="writer" style={{backgroundImage: 'url(http://habblive.in/imager.php?user=Alice&size=l&head_direction=3&gesture=sml)'}} />
                  <div className="information">
                    Por <a href="#">Alice</a>
                  </div>
                </div>
                <div className="options">
                  <a href="#" data-id="A1"><i className="fas fa-thumbs-up" /> Curtir (15)</a>
                  <a href="#"><i className="fas fa-thumbs-down" /> Descurtir (2)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>);
    }
}