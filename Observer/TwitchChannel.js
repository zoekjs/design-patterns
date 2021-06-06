"use strict";
exports.__esModule = true;
exports.TwitchChannel = void 0;
var TwitchChannel = /** @class */ (function () {
    function TwitchChannel() {
        //registrar los observers a los cuales va a notificar
        this.channelFollowers = [];
        this.lastStreamLiveTitle = '';
    }
    TwitchChannel.prototype.suscribe = function (o) {
        this.channelFollowers.push(o);
    };
    TwitchChannel.prototype.unsuscribe = function (o) {
        // eliminar suscriptor o seguidor en concreto
        var currentFollower = this.channelFollowers.indexOf(o);
        if (currentFollower >= 0) {
            this.channelFollowers.splice(currentFollower, 1);
        }
    };
    TwitchChannel.prototype.goingLive = function (title) {
        this.lastStreamLiveTitle = title;
        this.notify();
        console.log(title);
    };
    TwitchChannel.prototype.lastStreamTitle = function () {
        return this.lastStreamLiveTitle;
    };
    TwitchChannel.prototype.notify = function () {
        for (var _i = 0, _a = this.channelFollowers; _i < _a.length; _i++) {
            var follower = _a[_i];
            follower.update();
        }
    };
    return TwitchChannel;
}());
exports.TwitchChannel = TwitchChannel;
