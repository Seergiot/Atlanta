import Session from "../sessions/Session";
import IMessage from "./IMessage";
import ClientMessage from "../protocol/ClientMessage";
import EClientMessage from "./types/EClientMessage";
import AuthEvent from "./incoming/handshake/AuthEvent";

export default class MessageHandler{

    events: IMessage[] = [];

    constructor()
    {
        this.events = [];
        this.registerMessages();
    }

    registerMessages()
    {
        this.addMessage(EClientMessage.AuthEvent, new AuthEvent());
    }

    execute(connection: Session, reader: ClientMessage){
        var message = this.events[reader.id];
        if(message){
            message.execute(connection, reader);
        }
    }

    addMessage(id: number, handler: IMessage)
    {
        if(id > 0 && !this.events[id]){
            this.events[id] = handler;
        }
        else{

        }
    }
}