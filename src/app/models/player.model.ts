import { IPlayer } from "../services/db";

export class Player implements IPlayer {

  id?: number | undefined;
  name?: string;
  money: number = 0;

  constructor() {

  }
}
