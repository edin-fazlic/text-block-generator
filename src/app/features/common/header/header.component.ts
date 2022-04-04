import {Component} from '@angular/core';
import {Route} from '../../../constants/route.constants';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public selectedRoute: string = '';

  constructor(router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.selectedRoute = ((event as NavigationEnd).url)?.substring(1);
    });
  }

  public buttons = [
    {
      type: 'icon',
      icon: 'directions_run',
      routerLink: Route.EMPTY,
    },
    {
      type: 'text',
      text: 'Items',
      routerLink: Route.ITEMS,
    },
    {
      type: 'text',
      text: 'Stats',
      routerLink: Route.STATS,
    },
  ];

}
