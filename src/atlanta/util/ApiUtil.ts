import Axios from "axios";
import Cookies from 'universal-cookie';
import Constants from "../../Constants";
const cookies = new Cookies();

export default class ApiUtil
{

    get(query: string, callback: Function) {

        this.getAxiosInstance().get(query)
            .then(response => response.data)
            .then(data => callback(data))
    }

    post(query:string, form:any, callback:Function) {
        var dt = new URLSearchParams(Object.entries(form))
        this.getAxiosInstance().post(query, dt.toString())
            .then(response => response.data)
            .then(data => callback(data))
    }

    async getAsync(query:string){
        return this.getAxiosInstance().get(query);
    }

    getAxiosInstance(){
        var axiosInstance = Axios.create({
            baseURL: Constants.API_URL,
            timeout: 2000,
            headers: { 
                'ATLANTA_SSID': cookies.get('ATLANTA_SSID') ? cookies.get('ATLANTA_SSID'): "",
                'ATLANTA_UID': cookies.get('ATLANTA_UID') ? cookies.get('ATLANTA_UID') : "",
                'ATLANTA_STI': cookies.get('ATLANTA_STI') ? cookies.get('ATLANTA_STI') : ""
            }
        });

        return axiosInstance;
    }
}