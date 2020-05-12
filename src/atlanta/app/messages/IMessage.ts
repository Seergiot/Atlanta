import Session from "../sessions/Session";
import ClientMessage from "../protocol/ClientMessage";

export default interface IMessage{
    execute(session: Session, reader: ClientMessage);
}