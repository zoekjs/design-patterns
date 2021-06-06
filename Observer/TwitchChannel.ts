import { Observable } from './interfaces/Observable'
import { Observer } from './interfaces/Observer'

class TwitchChannel implements Observable {
  //registrar los observers a los cuales va a notificar
  private channelFollowers: Observer[] = [];
  private lastStreamLiveTitle = ''

  suscribe(o: Observer){
    this.channelFollowers.push(o)
  }

  unsuscribe(o: Observer){
    // eliminar suscriptor o seguidor en concreto
    const currentFollower =  this.channelFollowers.indexOf(o)
    if (currentFollower >= 0){
      this.channelFollowers.splice(currentFollower, 1)
    }
  }

  goingLive (title: string){
    this.lastStreamLiveTitle= title
    this.notify()
    console.log(title)
  }

  lastStreamTitle() {
    return this.lastStreamLiveTitle
  }

  notify() {
    for(let follower of this.channelFollowers){
      follower.update()
    }
  }
}

export { TwitchChannel }