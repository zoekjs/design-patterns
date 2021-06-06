import { TwitchChannel } from './TwitchChannel'
import { Follower } from './Follower'

let channel = new TwitchChannel()
let follower1 = new Follower(channel)
let follower2 = new Follower(channel)

channel.suscribe(follower1)
channel.suscribe(follower2)
channel.unsuscribe(follower1)

channel.goingLive('Jugando rankeds en Valorant !')