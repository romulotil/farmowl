import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmComponent } from './components/farm/farm.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';


const routes: Routes = [
  {
    path: '',
    component: FarmComponent
  },
  {
    path: 'farm',
    component: FarmComponent
  },
  {
    path: 'player',
    component: PlayerProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
