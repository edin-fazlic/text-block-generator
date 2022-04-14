import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Item} from '../models/item.model';
import {ItemService} from '../services/item.service';

@Injectable({providedIn: 'root'})
export class ItemsResolver implements Resolve<Item[]> {

  constructor(private itemService:ItemService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Item[]> | Promise<Item[]> | Item[] {
    return this.itemService.getItems();
  }

}
