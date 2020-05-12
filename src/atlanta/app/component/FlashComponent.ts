import AtlantaApp from "../../AtlantaApp";

export default class FlashComponent{
    
    logLoginStep(e:String, a:String){
        if(e === 'client.init.config.loaded'){ 
            AtlantaApp.Session.login(window.flashvars);
        }

        if(e === 'client.init.room.ready'){// user is ready

        }
    }

    logDebug(...args){
        //console.log(args);

        //console.log(AtlantaApp.Session);
    }

    legacyTrack(...args){console.log('LegacyTrack'); console.log(args);}
    track(...args){console.log('track'); console.log(args);}
    loadConversionTrackingFrame(){}

    logError(...args){console.log('log error'); console.log(args);}
    logEventLog(...args){console.log('logEventLog'); console.log(args);}
    logWarn(...args){console.log('logWarn'); console.log(args);}
    logCrash(...args){console.log('logCrash');console.log(args);}
    logDisconnection(...args){console.log('logDisconnection');console.log(args);}

    swfLog(...args){
        console.log('swfLog'); console.log(args);
    }

    swfMLog(...args){
        console.log('swfMLog'); console.log(args);
    }

    openPage(...args){console.log('openPage'); console.log(args);}

    heartBeat(...args){console.log('heartBeat'); console.log(args);}

    openWebPageAndMinimizeClient(...args){console.log('openWebPageAndMinimizeClient'); console.log(args); }

    closeWebPageAndRestoreClient(...args){console.log('closeWebPageAndRestoreClient'); console.log(args);}

    openHabblet(...args){console.log('openHabblet'); console.log(args);}
    closeHabblet(...args){console.log('closeHabblet'); console.log(args);}

    disconnect(...args){console.log('disconnect'); console.log(args);}

    showGame(...args){console.log('showGame'); console.log(args);}

    hideGame(...args){console.log('hideGame'); console.log(args);}

    openExternalLink(...args){console.log('openExternalLink'); console.log(args);}

    roomVisited(...args){
        console.log('roomVisited'); console.log(args);
        //$(document).trigger("roomVisited", [ roomId ]);

    }
    openMinimail(...args){console.log('openMinimail'); console.log(args);}
    openNews(...args){console.log('openNews'); console.log(args);}
    closeNews(...args){console.log('closeNews'); console.log(args);}
    openAvatars(...args){console.log('openAvatars'); console.log(args);}
    openRoomEnterAd(...args){console.log('openRoomEnterAd'); console.log(args);}

    updateFigure(...args){console.log('updateFigure'); console.log(args);}
    updateName(...args){console.log('updateName'); console.log(args);}
    logout(...args){
        console.log('logout'); console.log(args);
    }
    subscriptionUpdated(...args){console.log('subscriptionUpdated'); console.log(args);}
    updateBuildersClub(...args){console.log('updateBuildersClub'); console.log(args);}
    showInterstitial(...args){console.log('showInterstitial'); console.log(args);}
    listPlugins(...args){console.log('listPlugins'); console.log(args); }

}