import { Component, Input, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from 'src/app/services/db';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss']
})
export class PlayerProfileComponent implements OnInit {
  private playerData = liveQuery(() => db.players.toArray());
  player!: Player

  constructor() { }

  ngOnInit(): void {
    this.playerData.subscribe(p => this.player = p ? p[0] as Player : new Player())
  }


}
