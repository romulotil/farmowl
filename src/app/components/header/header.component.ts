import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { liveQuery } from 'dexie';
import { db } from 'src/app/services/db';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private playerData = liveQuery(() => db.players.toArray());
  player!: Player

  ngOnInit(): void {
    this.playerData.subscribe(p => this.player = p ? p[0] as Player : new Player())
  }

}
