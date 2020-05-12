import Communication from "../network/Communication";
import ClientMessage from "../protocol/ClientMessage";
import MessageHandler from "../messages/MessageHandler";
import ServerMessage from "../protocol/ServerMessage";
import AuthOkComposer from "../messages/outgoing/handshake/AuthOkComposer";

export default class Session{

    private communication: Communication = null;

    private messageHandler: MessageHandler;

    public timePing: number = 0;
    public timePong: number = 0;

    public isIddle: boolean = true;

    public loggedIn: boolean = false;
    public sendLogin: boolean = false;

    constructor()
    {
        this.messageHandler = new MessageHandler();
        this.communication = new Communication();
    }

    login(flashvars){
        if(this.sendLogin){
            return;
        }
        this.sendLogin = true;
        console.log("authok");
        this.send(AuthOkComposer.compose(flashvars["account_id"], flashvars["sso.ticket"]));
        
    }

    send(message: ServerMessage){
        this.communication.sendMessage(message);
    }

    handleMessage(message: ClientMessage){
        if(message.id === 0){
            return;
        }
        this.messageHandler.execute(this, message);
    }
}