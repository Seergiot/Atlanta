import React,{ Component } from "react";
type ArticlesCategoriesProps = {
  isMobile: boolean
}
export default class ArticlesCategories extends Component<ArticlesCategoriesProps>{

    mainDom()
    {
      return (<><div className="input-group" style={{float: 'right', width: '120px'}}>
              <select className="custom-select" id="articles-category">
                <option value={1}>Promoções</option>
                <option value={2}>Atualizações</option>
                <option value={3}>Atividades</option>
              </select>
            </div>
            <h4>Notícias</h4>
            <div className="list-group articles">
              <a href="#" className="list-group-item list-group-item-action hall-item">
                <div className="image-window" style={{background: 'url(components/images/promo3.png) center'}} />
                <small className="text-muted" style={{float: 'right'}}>Hoje</small>
                <div className="title">Atualizações</div>
                <div className="desc">Confira os novos mobis no catálogo!</div>
              </a>
              <a href="#" className="list-group-item list-group-item-action hall-item">
                <div className="image-window" style={{background: 'url(components/images/promo3.png) center'}} />
                <small className="text-muted" style={{float: 'right'}}>Hoje</small>
                <div className="title">Atualizações</div>
                <div className="desc">Confira os novos mobis no catálogo!</div>
              </a>
              <a href="#" className="list-group-item list-group-item-action hall-item">
                <div className="image-window" style={{background: 'url(components/images/promo3.png) center'}} />
                <small className="text-muted" style={{float: 'right'}}>Hoje</small>
                <div className="title">Atualizações</div>
                <div className="desc">Confira os novos mobis no catálogo!</div>
              </a>
            </div></>);
    }

    render(){
        const {isMobile} = this.props;
        if(isMobile){
          return <div className="row d-block d-sm-block d-md-none"><div className="col-sm-12">
            {this.mainDom()}
            </div></div>
        }
        else{
          return <div className="col-4" style={{float: 'right'}}>
          {this.mainDom()}
          </div>
        }
    }
  }