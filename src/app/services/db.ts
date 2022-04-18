import Dexie, { Table } from 'dexie';

export interface IPlayer {
  id?: number;
  name?: string;
  money: number | undefined;
}

export class AppDb extends Dexie {
  players!: Table<IPlayer, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(1).stores({
      players: '++id'
    });
  }
}

export const db = new AppDb();
