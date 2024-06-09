import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RankingsViewComponent } from './components/rankings-view/rankings-view.component';
import { PlayersViewComponent } from './components/players-view/players-view.component';
import { PlayerComponent } from './components/player/player.component';
import { ClanComponent } from './components/clan/clan.component';
import { ClansViewComponent } from './components/clans-view/clans-view.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'rankings', component: RankingsViewComponent},
    {path: 'players', component: PlayersViewComponent},
    {path: 'players/:playerTag', component: PlayerComponent},
    {path: 'clans', component: ClansViewComponent},
    {path: 'clans/:clanTag', component: ClanComponent},
];
