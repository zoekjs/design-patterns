"use strict";
exports.__esModule = true;
exports.Follower = void 0;
var Follower = /** @class */ (function () {
    function Follower(observable) {
        this.observable = null;
        this.observable = observable;
    }
    Follower.prototype.update = function () {
        console.log('Estamos en vivo !');
        console.log(this.observable.lastStreamTitle);
    };
    return Follower;
}());
exports.Follower = Follower;
