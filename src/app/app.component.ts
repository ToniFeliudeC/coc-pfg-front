import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavBarComponent, HomeComponent]
})
export class AppComponent {

  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  title = 'coc-pfg-front';
  navLinks = [
    {
      label: 'Home',
      url: '/home'
    },
    {
      label: 'Rankings',
      url: '/rankings'
    },
    {
      label: 'Players',
      url: '/players'
    },
    {
      label: 'Clans',
      url: '/clans'
    },
  ]
}