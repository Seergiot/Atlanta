import ServerMessage from "../../../protocol/ServerMessage";
import EServerMessage from "../../types/EServerMessage";

export default class AuthOkComposer{
    static compose(userId: any, ticket: any):ServerMessage{
        var message = ServerMessage.create(EServerMessage.AuthOkComposer);
        message.writeString(ticket);
        message.writeInt(userId);

        return message;
    }
}