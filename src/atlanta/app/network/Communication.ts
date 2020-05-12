import ClientMessage from "../protocol/ClientMessage";
import AtlantaApp from "../../AtlantaApp";
import Constants from "../../../Constants";
import ServerMessage from "../protocol/ServerMessage";

export default class Communication{
    startedSocket: boolean = false;
	debugMode:boolean = false;
	
	webSocket:WebSocket = null;
	reconnectionInterval:any = null;
	pingInterval:any = null;
    
    constructor(){
        this.initSockets();
    }

    initSockets()
    {
        if(this.pingInterval)
            clearInterval(this.pingInterval);

        if(typeof(WebSocket) === "undefined")
            return;

        
        var wsPath = "wss://";
        if(window.location.host.indexOf("localhost") > -1){
            wsPath = "ws://localhost:30003"
        }
        else{
            wsPath += Constants.WS_HOST + ":" + Constants.WS_PORT;
        }
        
        this.webSocket = new WebSocket(wsPath);
        this.webSocket.binaryType = 'arraybuffer';

        this.webSocket.onopen = () => {
            this.startedSocket = true;
            this.pingInterval = setInterval(() => this.ping(), 10000);
        }

        this.webSocket.onclose = () => {
            setTimeout(() => this.tryReconnect(), 2500);
        }

        this.webSocket.onerror = () => {
            this.webSocket.close();
        }

        this.webSocket.onmessage = (ev: MessageEvent) => {
            AtlantaApp.Session.handleMessage(new ClientMessage(ev.data));
        }

    }

    ping()
    {
        AtlantaApp.Session.timePing = Date.now();
        //this.sendMessage(PingComposer.Compose());
    }

    sendMessage(message: ServerMessage){
        if(!this.startedSocket || !message){
            return;
        }

        this.webSocket.send(message.getBytes());
    }

    tryReconnect()
    {
        this.startedSocket = false;
        this.webSocket.close();
        this.webSocket = null;

        this.initSockets();
    }
}