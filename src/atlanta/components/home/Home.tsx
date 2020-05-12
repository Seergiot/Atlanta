import React, { Component } from "react";
import ApiUtil from "../../util/ApiUtil";
import AtlantaApp from "../../AtlantaApp";
import MobileLogin from "./subcomponents/mobilelogin/MobileLogin";
import ArticlesCategories from "./subcomponents/articlescategories/ArticlesCategories";

const Api = new ApiUtil();


type AtlantaProps = {
    loginUser: any

};
type AtlantaState = {
    initialized: boolean,
    articles: any,
};
const initialState = {
    articles: [],
    initialized: false,
};
export default class Home extends Component<AtlantaProps, AtlantaState>{

    constructor(props:AtlantaProps){
        super(props);
        this.state = initialState;
    }

    componentDidMount(){
        if(!this.state.initialized){
            AtlantaApp.LoadedComponents = true;
            //this.loadNews();
        }
    }

    loadNews(){
        Api.getAsync("/articles/home")
            .then(res => {
                this.setState({
                    articles:res.data,
                    initialized: true
                });

                AtlantaApp.LoadedComponents = true;
            })
    }

    render(){
        const { Consumer } = AtlantaApp.AtlantaContext;
        return (
            <Consumer>{
                value=>
                    <>
                        { 
                            <>
                                <MobileLogin loginUser={this.props.loginUser}></MobileLogin>
                                <ArticlesCategories isMobile={true}></ArticlesCategories>
                            </>
                            /*value.userData.logged_in ? (
                         <HomeCard userData={value.userData}></HomeCard>
                            ) : (<div> NotLogin </div>)*/
                        }
                    </>
            }
            </Consumer>
        );
        //return (<></>);
    }
}