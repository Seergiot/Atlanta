import Constants from '../../Constants';
import HttpUtil from './HttpUtil';
export default class FigureUtil{

    static avatar(look: string, params:any): string{

        var queryString = "";
        if(typeof params === "string"){
            queryString += params;
        }
        else{
            queryString += HttpUtil.httpBuildQuery(params);
        }
        console.log(Constants.AVATAR_IMAGER + "?figure="+look + "&"+queryString);
        return Constants.AVATAR_IMAGER + "?figure="+look + "&"+queryString;
    }
}