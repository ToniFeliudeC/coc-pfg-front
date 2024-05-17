import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RankingsViewComponent } from './components/rankings-view/rankings-view.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'rankings', component: RankingsViewComponent},
    {path: 'players', component: HomeComponent},
    {path: 'clans', component: HomeComponent},
];
