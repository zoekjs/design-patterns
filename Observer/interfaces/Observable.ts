import { Observer } from './Observer'

export interface Observable {
  suscribe(o: Observer);
  unsuscribe(o: Observer);
  notify()
}