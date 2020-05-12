import AtlantaApp from "../../AtlantaApp";
import MoveAvatarComposer from "../messages/outgoing/room/engine/MoveAvatarComposer";

export default class FlashEndPointComponent{
    private flashInterface: any = null;
    private started:boolean = false;

    mount(){
        window.addEventListener("message", (n) => this.callEvent(n), !1);
    }

    start(n){
        setTimeout(() => this.setInterface(n), 30);
    }

    handleKeyDown(ev: KeyboardEvent){
        const keys = [37,38,39, 40];
        if(keys.includes(ev.keyCode) && AtlantaApp.Session.loggedIn){
            ev.preventDefault();
            AtlantaApp.Session.send(MoveAvatarComposer.compose(ev.keyCode));
        }
    }

    setInterface(fsI){
        if(!fsI){
            console.error("Invalid FlashClient. Can't use JS->Flash interface.")
            return;
        }

        this.started = true;
        this.flashInterface = fsI;
        this.mount();
    }
    callEvent(n){

        if(!this.started)
            return;

        if (n.data) {
            var t = n.data;
            switch (t.call) {
                case "open-link":
                    this.e(t.target);
                    break;
                case "open-room":
                    this.a(t.target);
                    break;
            }
        }
    }

    e(n) {
        this.flashInterface.openlink(n)
    }

    a(n) {
        n.indexOf("r-hh") >= 0 ? this.flashInterface.openroom(n) : this.e("navigator/goto/" + n)
    }
}