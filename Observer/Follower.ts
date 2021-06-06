import {Observable} from './interfaces/Observable'
import {Observer} from './interfaces/Observer'
import {TwitchChannel} from './TwitchChannel'
 
class Follower implements Observer {
  private observable = null

  constructor(observable: Observable){
    this.observable = observable
  }

  update () {
    console.log('Estamos en vivo !')
    console.log((this.observable as TwitchChannel).lastStreamTitle)
  }
}

export{Follower}