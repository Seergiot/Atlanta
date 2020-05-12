import ServerMessage from "../../../../protocol/ServerMessage";
import EServerMessage from "../../../types/EServerMessage";

export default class MoveAvatarComposer{

    static compose(evKey: Number): ServerMessage{
        var message = ServerMessage.create(EServerMessage.MoveAvatarComposer);
        message.writeInt(evKey);
        return message;
    }
}