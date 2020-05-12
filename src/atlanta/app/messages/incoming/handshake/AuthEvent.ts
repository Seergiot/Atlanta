import IMessage from "../../IMessage";
import Session from "../../../sessions/Session";
import ClientMessage from "../../../protocol/ClientMessage";

export default class AuthEvent implements IMessage{

    execute(session: Session, reader: ClientMessage) {
        session.loggedIn = true;
        console.log('is loggein');
    }

}