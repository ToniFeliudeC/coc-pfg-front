import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'rankings', component: HomeComponent},
    {path: 'players', component: HomeComponent},
    {path: 'clans', component: HomeComponent},
];
